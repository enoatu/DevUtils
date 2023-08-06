import { useState, useEffect } from 'react'
import { usePersistState } from '@/hooks/usePersistState'
import Layout from '@c/Layout'
import { useTranslation } from 'react-i18next'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

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

const displayFmt = (date: Date) => {
  // 2021/01/11(月) の形式に変換する
  const fmtDate = fmt(date)
  return `${fmtDate}(${['日', '月', '火', '水', '木', '金', '土'][date.getDay()]})`
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
  const [isSettingUserRestDays, changeIsSettingUserRestDays] = useState<boolean>(false)
  const [userRestDays, setUserRestDays] = usePersistState<UserRestDays>({ key: 'userRestDays', initialValue: {}})
  const [isSettingStartDate, changeIsSettingStartDate] = useState<boolean>(false)
  const [tasks, changeTasks] = usePersistState<{name: string, days: number}[]>({
    key: 'tasks',
    initialValue: [
      {
        name: '準備1',
        days: 1,
      },
      {
        name: '準備',
        days: 3,
      },
      {
        name: '実行',
        days: 5,
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

  type ComputedTask = {
    name: string,
    days: number,
    start: Date,
    end: Date,
  }
  const [computedTasks, changeComputedTasks] = useState<ComputedTask[]>([])

  useEffect(() => {
    let start = new Date(startDate as Date)
    let end = new Date(startDate as Date)
    const result = []
    for (const task of tasks) {
      // restDaysに含まれている日はスキップする
      for (let i = 1; i < task.days; i++) {
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
        i !== task.days && end.setDate(end.getDate() + 1)
      }
      result.push({...task, start: new Date(start), end: new Date(end)})
      // 開始日を1日進め、終了日を開始日と同じにする
      start = new Date(end)
      start.setDate(start.getDate() + 1)
      end = new Date(start)
    }
    changeComputedTasks(result)
  }, [JSON.stringify(tasks), startDate, isRestWeekend, isRestHoliday, userRestDays])

  return (
    <Layout title={t('title')}>
      <main>
        <h1 className="title">{t('title')}</h1>
        <p className="description">{t('description')}</p>
        <p className="comment">{t('now, you can change only 2 indent to 4 indent')}</p>
        <div>
          <p>開始日: {startDate ? fmt(startDate as Date) : '未設定'}</p>
          <button onClick={() => changeIsSettingStartDate(!isSettingStartDate)}>
            {isSettingStartDate ? '設定終了' : '設定開始'}
          </button>
          {isSettingStartDate &&
            <Calendar
              onChange={(value, event) => {
                changeStartDate(value)
                changeIsSettingStartDate(false)
              }}
              value={startDate}
            />
          }
          <p>その他休み設定: {Object.keys(userRestDays).length ? Object.keys(userRestDays).forEach(key => {
            return <p>{key}</p>
          }) : '未設定'}</p>
          <button onClick={() => changeIsSettingUserRestDays(!isSettingUserRestDays)}>
            {isSettingUserRestDays ? '設定終了' : '設定開始'}
          </button>
          {isSettingUserRestDays &&
            <Calendar
              onChange={(value, event) => {
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
          <p onClick={() => setIsRestWeekend(!isRestWeekend)}>土日を休みとする: {isRestWeekend ? 'はい' : 'いいえ'}</p>
          <p onClick={() => setIsRestHoliday(!isRestHoliday)}>祝日を休みとする: {isRestHoliday ? 'はい' : 'いいえ'}</p>
          <ul>
            {computedTasks.map((t) => {
              return (
                <li>{t.name} {t.days}日 {displayFmt(t.start)} ~ {displayFmt(t.end)}</li>
              )
            })}
          </ul>
        </div>
        <Calendar
          onChange={change}
          value={value}
          tileContent={({ date, view }) =>
            <div className="date-box">
              { view === 'month' && rawHolidays[fmt(date)] && <p style={{'color': 'red'}}>{rawHolidays[fmt(date)]}</p> }
              { view === 'month' && computedTasks.map((t) => {
                // タスク名
                if (!isRestDay(fmt(date)) && t.start <= date && date <= t.end) {
                  return <p>{t.name}</p>
                }
              })}
              { view === 'month' && isRestWeekend && isWeekend(fmt(date)) && <p>🛌💤</p> }
              { view === 'month' && isRestHoliday && holidays.includes(fmt(date)) && <p>🇯🇵</p> }
              { view === 'month' && userRestDays[fmt(date)] && <p>😑💤</p> }
            </div>
          }
          />
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

        .source-box {
          height: 300px;
          width: 300px;
        }
        .result-box {
          height: 300px;
          width: 300px;
        }
      `}</style>
    </Layout>
  )
}
