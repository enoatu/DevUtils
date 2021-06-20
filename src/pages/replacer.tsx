import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import Layout from '@c/Layout'

export default function ReplacerApp() {
  const { t } = useTranslation('common')
  const [source, setSource] = useState('')
  const [pattern, setPattern] = useState('')
  const [replacement, setReplacement] = useState('')
  const [result, setResult] = useState('')

  const replace = () => {
    setResult(source.replaceAll(pattern, replacement))
  }
  console.log(t)
  console.log(t('hoeg'))

  return (
    <Layout title={t('replacer')}>
      <main>
        <h1 className="title">t('hoeg')</h1>
        <p className="description">t('description')</p>
        <div>
          <p>source</p>
          <textarea
            className="source-box"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
        </div>
        <div>
          <p>pattern</p>
          <textarea
            className="pattern-box"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
          />
        </div>
        <div>
          <p>replacement</p>
          <textarea
            className="replacement-box"
            value={replacement}
            onChange={(e) => setReplacement(e.target.value)}
          />
        </div>
        <button onClick={replace}>replace</button>
        <div>
          <textarea className="result-box" value={result} readOnly />
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
        .pattern-box {
          height: 30px;
          width: 300px;
        }
        .replacement-box {
          height: 30px;
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