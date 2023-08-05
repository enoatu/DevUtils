import { useState } from 'react'
import Layout from '@c/Layout'
import { useTranslation } from 'react-i18next'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalendarManHours() {
  const { t, i18n } = useTranslation('calendar-man-hours')
  type ValuePiece = Date | null;
  type Value = ValuePiece | [ValuePiece, ValuePiece];
  const [value, change] = useState<Value>(new Date());
  i18n.addResourceBundle('ja', 'calendar-man-hours', {
    'Change indent': 'インデント変更',
  })

  return (
    <Layout title={t('title')}>
      <main>
        <h1 className="title">{t('title')}</h1>
        <p className="description">{t('description')}</p>
        <p className="comment">{t('now, you can change only 2 indent to 4 indent')}</p>
        <Calendar
          onChange={change}
          value={value}

          tileContent={({ date, view }) =>
            <div className="date-box">
              { view === 'month' && date.getDay() === 0 ? <p>It's Sunday!</p> : <p/> }
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
