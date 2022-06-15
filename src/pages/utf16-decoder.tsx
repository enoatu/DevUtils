import { useState } from 'react'
import Layout from '@c/Layout'
import chartable from '@/utils/chartable'

interface CharTableObject {
  [text: string]: string
}

export default function DecoderApp() {
  const [source, setSource] = useState(
    'nickname => \\x{30d9}\\x{30b8}\\x{30bf}\\x{30d6}\\x{30eb}'
  )
  const [result, setResult] = useState('')

  const ctj = chartable
    .split('\n')
    .reduce((acc: CharTableObject, line: string) => {
      const arr = line.split(' ')
      const text = arr[arr.length - 2]
      const utf16 = arr[1]
      acc[utf16] = text
      return acc
    }, {})

  const replace = (): void => {
    const result = source.replaceAll(
      /\\x{(\w{4})}/g,
      (_, hex) => ctj[hex] || ctj[hex.toUpperCase()] || 'FAIL'
    )
    setResult(result)
  }
  const title = 'UTF16 Decoder'
  const description = 'Development Utils'

  return (
    <Layout title={title}>
      <main>
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <div>
          <p>source</p>
          <textarea
            className="source-box"
            value={source}
            onChange={(e) => setSource(e.target.value)}
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
        .result-box {
          height: 300px;
          width: 300px;
        }
      `}</style>
    </Layout>
  )
}
