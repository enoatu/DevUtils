import { useState, useEffect } from 'react'
import Layout from '@c/Layout'
import { useTranslation } from 'react-i18next'

export default function ReplacerApp() {
  const [source, setSource] = useState('')
  const [result, setResult] = useState('')
  const { t, i18n } = useTranslation('insert-sql-viewer')
  i18n.addResourceBundle('ja', 'insert-sql-viewer', {
    'View': '表示',
    'INSERT SQL': 'INSERT SQL',
  })

  const onChange = () => {
    const matches = source.match(/INSERT .*\((.*)\).*\((.*)\)/s)
    let text = 'SQLが不正です'
    if (matches?.[1] && matches?.[2] && matches[1].length === matches[2].length) {
      const columns = matches[1].split(',').map((column) => column.trim())
      const values = matches[2].split(',').map((value) => value.trim())
      text = columns.map((column, index) => `${column} = ${values[index]}`).join("\n")
    }
    setResult(text)
  }

  return (
    <Layout title={t('title')}>
      <main>
        <h1 className="title">{t('title')}</h1>
        <p className="description">{t('description')}</p>
        <div>
          <p>{t('INSERT SQL')}</p>
          <textarea
            className="source-box"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
        </div>
        <button onClick={onChange}>{t('View')}</button>
        <div>
          <textarea
            className="result-box"
            value={result}
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
