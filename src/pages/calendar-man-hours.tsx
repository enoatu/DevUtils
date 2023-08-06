import { useState, useEffect } from 'react'
import { usePersistState } from '@/hooks/usePersistState'
import Layout from '@c/Layout'
import { useTranslation } from 'react-i18next'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import {t} from 'i18next'
import { ReactSortable } from "react-sortablejs";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece]

const fmt = (date: Date) => {
  // 2021/01/11 の形式に変換する
  // 0埋めする
  const year = date.getFullYear()
  const month = ('0' + (date.getMonth() + 1)).slice(-2)
  const day = ('0' + date.getDate()).slice(-2)
  return `${year}/${month}/${day}`
}

type RawHolidays= {[key: string]:string }
const useHoliday = (): [string[], RawHolidays, Boolean, (arg: Boolean) => void] => {
  const [rawHolidays, setRawHolidays] = usePersistState<RawHolidays>({ key: 'rawHolidays', initialValue: {} })
  const [isRestHoliday, setIsRestHoliday] = usePersistState<Boolean>({ key: 'isRestHoliday', initialValue: true })
  const getRawHolidays = async () => {
    const res = await fetch('https://holidays-jp.github.io/api/v1/date.json')
    if (!res.ok) {
      throw new Error('Network response was not ok')
    }
    const json = await res.json()
    // key が 2021-01-01 の形式なので 2021/01/01 に変換する
    const result = {} as RawHolidays
    for (const key of Object.keys(json)) {
      const k = key.replace(/-/g, '/')
      result[k] = json[key]
    }
    return result
  }
  useEffect(() => {
    (async () => {
    if (Object.keys(rawHolidays).length === 0) {
      setRawHolidays(await getRawHolidays())
    }
    })()
  }, [])
  const holidays = Object.keys(rawHolidays).map((key) => key)
  return [holidays, rawHolidays, isRestHoliday, setIsRestHoliday]
}

type StartDateSettingProps = {
  startDate: Value,
  changeStartDate: (arg: Value) => void,
}
const StartDateSetting = ({ startDate, changeStartDate }: StartDateSettingProps) => {
  const [isSettingStartDate, changeIsSettingStartDate] = useState<boolean>(false)
  return (
    <>
      <p>開始日: {startDate ? fmt(startDate as Date) : '未設定'}</p>
      <button onClick={() => changeIsSettingStartDate(!isSettingStartDate)}>
        {isSettingStartDate ? '設定終了' : '設定開始'}
      </button>
      {isSettingStartDate &&
        <Calendar
          onChange={(value) => {
            changeStartDate(value)
            changeIsSettingStartDate(false)
          }}
          value={startDate}
        />
      }
    </>
  )
}

type UserRestDaysSettingProps = {
  userRestDays: UserRestDays,
  setUserRestDays: (arg: UserRestDays) => void,
  rawHolidays: RawHolidays,
}
const UserRestDaysSetting = ({ userRestDays, setUserRestDays, rawHolidays }: UserRestDaysSettingProps) => {
  const [isSettingUserRestDays, changeIsSettingUserRestDays] = useState<boolean>(false)
  return (
    <>
      <button onClick={() => changeIsSettingUserRestDays(!isSettingUserRestDays)}>
        {isSettingUserRestDays ? '設定終了' : '設定開始'}
      </button>
      {isSettingUserRestDays &&
        <Calendar
          onChange={(value) => {
            if (value instanceof Date) {
              const date = fmt(value)
              if (userRestDays[date]) {
                const { [date]: _, ...rest } = userRestDays
                setUserRestDays(rest)
              } else {
                setUserRestDays({...userRestDays, [date]: '休み'})
              }
            }
          }}
          tileContent={({ date, view }) =>
            <div className="date-box">
              { view === 'month' && rawHolidays[fmt(date)] && <p style={{'color': 'red'}}>{rawHolidays[fmt(date)]}</p> }
              { view === 'month' && userRestDays[fmt(date)] && <p style={{'color': 'yellow'}}>😑💤</p> }
            </div>
          }
        />
      }
    </>
  )
}

const generateRand = () => {
  return Math.floor(Math.random() * 100000000)
}

type UserRestDays = { [key: string]: string }

export default function CalendarManHours() {
  const { t, i18n } = useTranslation('calendar-man-hours')
  i18n.addResourceBundle('ja', 'calendar-man-hours', {
    'Change indent': 'インデント変更',
  })

  const [value, change] = useState<Value>(new Date())
  const [startDate, changeStartDate] = usePersistState<Value>({ key: 'startDate', initialValue: new Date(new Date().toDateString()) }) // 0時にする
  const [isRestWeekend, setIsRestWeekend] = usePersistState<Boolean>({ key: 'isRestWeekend', initialValue: true })
  const [holidays, rawHolidays, isRestHoliday, setIsRestHoliday] = useHoliday()
  const [userRestDays, setUserRestDays] = usePersistState<UserRestDays>({ key: 'userRestDays', initialValue: {}})
  type Task = {
    id: number,
    name: string,
    days: number,
    start: Date,
    end: Date,
  }
  const [tasks, changeTasks] = usePersistState<Task[]>({
    key: 'tasks',
    initialValue: [
      {
        id: generateRand(),
        name: '準備1',
        days: 1,
        start: new Date(),
        end: new Date(),
      },
      {
        id: generateRand(),
        name: '準備',
        days: 3,
        start: new Date(),
        end: new Date(),
      },
      {
        id: generateRand(),
        name: '実行',
        days: 5,
        start: new Date(),
        end: new Date(),
      },
    ]
  })
  const isWeekend = (date: string) => {
    return new Date(date).getDay() === 0 || new Date(date).getDay() === 6
  }

  const isRestDay = (date: string) => {
    if (isRestWeekend && isWeekend(date)) {
      return true
    }
    if (isRestHoliday && holidays.includes(date)) {
      return true
    }
    if (userRestDays[date]) {
      return true
    }
    return false
  }

  const updateTasks = (newTasks?:Task[]) => {
    console.log('tasksが更新されました')
    let start = new Date(startDate as Date)
    let end = new Date(startDate as Date)
    const result = []
    for (const task of (newTasks || tasks)) {
      // restDaysに含まれている日はスキップする
      for (let i = 0; i < task.days; i++) {
        // console.log(task.name + 'の' + (i + 1) + '日目'+ fmt(end))
        // console.log('スキップ後' + fmt(start) + 'から' + fmt(end))
        while (true) {
          if (!isRestDay(fmt(end))) {
            break
          }
          // console.log(fmt(end) + 'は休みなのでスキップします')
          end.setDate(end.getDate() + 1)
          // console.log('スキップ後' + fmt(start) + 'から' + fmt(end))
        }
        // (次のループのため)はendを進める
        i !== task.days - 1 && end.setDate(end.getDate() + 1)
      }
      result.push({...task, start: new Date(start), end: new Date(end)})
      // 開始日を1日進め、終了日を開始日と同じにする
      start = new Date(end)
      start.setDate(start.getDate() + 1)
      end = new Date(start)
    }
    changeTasks(result)
  }
  useEffect(() => {
    updateTasks()
  }, [startDate, isRestWeekend, isRestHoliday, userRestDays])

  const editTaskName = (id: number, name: string) => {
    const newTasks = tasks.map(task => {
        if (task.id === id) {
            return {...task, name}
        }
        return task
    })
    changeTasks(newTasks)
  }
  const editTaskDays = (id: number, days: string) => {
    const newTasks = tasks.map(task => {
        if (task.id === id) {
            let daysNumber = Number(days)
            if (isNaN(daysNumber) || daysNumber < 0) {
              daysNumber = 0
            }
            return {...task, days: daysNumber}
        }
        return task
    })
    changeTasks(newTasks)
  }

  const deleteTask = (id: number) => {
    const newTasks = tasks.filter(task => task.id !== id)
    changeTasks(newTasks)
  }

  return (
    <Layout title={t('title')}>
      <main>
        <h1 className="title">{t('title')}</h1>
        <p className="description">{t('description')}</p>
        <p className="comment">{t('now, you can change only 2 indent to 4 indent')}</p>
        <div style={{ 'width': '80%' }}>
          <StartDateSetting startDate={startDate} changeStartDate={changeStartDate} />
          <p onClick={() => setIsRestWeekend(!isRestWeekend)}>土日を休みとする: {isRestWeekend ? 'はい' : 'いいえ'}</p>
          <p onClick={() => setIsRestHoliday(!isRestHoliday)}>祝日を休みとする: {isRestHoliday ? 'はい' : 'いいえ'}</p>
          <p>その他休み設定: {Object.keys(userRestDays).length ? Object.keys(userRestDays).forEach(key => {
            return <p>{key}</p>
          }) : '未設定'}</p>
          <UserRestDaysSetting
            userRestDays={userRestDays}
            setUserRestDays={setUserRestDays}
            rawHolidays={rawHolidays}
          />
          <div className="task-edit">
            <div className="task-list task-header">
              <div className="task-item-wrapper task-header">
                <div className="task-item task-header">タスク名</div>
                <div className="task-item task-header">かかる日数</div>
                <div className="task-item task-header">開始日<br/>(自動作成)</div>
                <div className="task-item task-header">終了日<br/>(自動作成)</div>
                <div className="task-item task-header">並替</div>
                <div className="task-item task-header">編集</div>
              </div>
            </div>
            <div className="task-list">
              <ReactSortable list={tasks} setList={(c) => updateTasks(c) }>
                {tasks.map((t) => (
                  <div key={t.id} className="task-item-wrapper">
                    <div className="task-item">
                      <input type="text" value={t.name} onChange={(e) => editTaskName(t.id, e.target.value)}/>
                    </div>
                    <div className="task-item">
                      <input type="text" value={t.days} onChange={(e) => editTaskDays(t.id, e.target.value)}/>
                    </div>
                    <div className="task-item">{fmt(t.start)}</div>
                    <div className="task-item">{fmt(t.end)}</div>
                    <div className="task-item">☰</div>
                    <div className="task-item"><button onClick={() => deleteTask(t.id)}>削除</button></div>
                  </div>
                ))}
              </ReactSortable>
            </div>
          </div>
          <Calendar
            onChange={change}
            value={value}
            tileContent={({ date, view }) =>
              <div className="date-box">
                { view === 'month' && rawHolidays[fmt(date)] && <p style={{'color': 'red'}}>{rawHolidays[fmt(date)]}</p> }
                { view === 'month' && tasks.map((t) => {
                  // タスク名
                  if (!isRestDay(fmt(date)) && t.start <= date && date <= t.end) {
                    return <p style={{ 'fontSize': 7 }}>{t.name}</p>
                  }
                })}
                { view === 'month' && isRestWeekend && isWeekend(fmt(date)) && <p>🛌💤</p> }
                { view === 'month' && isRestHoliday && holidays.includes(fmt(date)) && <p>🇯🇵</p> }
                { view === 'month' && userRestDays[fmt(date)] && <p>😑💤</p> }
              </div>
            }
          />
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .date-box {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .task-edit {
          margin-top: 10px;
          margin-bottom: 10px;
        }
        .task-list {
          box-sizing: border-box;
          border: 1px #ccc solid;
          display: flex;
          flex-direction: column;
        }
        .task-item-wrapper {
          display: flex;
        }
        .task-header.task-item-wrapper {
          justify-content: center;
          text-align: center;
          align-items: center;
        }
        .task-item {
          display: flex;
          background-color: #fff;
          justify-content: flex-start;
          align-items: center;
          padding: 0 10px;
          box-sizing: border-box;
          width: 110px;
          overflow: hidden;
          flex: 3;
        }
        .task-item:nth-child(1) {
          flex: 6;
        }
        .task-item:nth-child(1) input {
          padding: 2px;
          width: 100%;
          background-color: #cff0f0;
        }
        .task-item:nth-child(2) {
          flex: 2;
        }
        .task-item:nth-child(2) input {
          padding: 2px;
          width: 100%;
          text-align: right;
          background-color: #cff0f0;
        }

        .task-item:nth-child(5) {
          flex: 1;
          font-size: 50px;
          cursor: move;
          color: #ddd;
          padding-bottom: 5px;
        }
        .task-header.task-item:nth-child(5) {
          font-size: 16px;
          color: #000;
        }
        .task-item:nth-child(6) {
          flex: 1;
          text-align: center;
        }


      `}</style>
    </Layout>
  )
}
