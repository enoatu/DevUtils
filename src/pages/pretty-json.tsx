import { useState } from 'react'
import Layout from '@c/Layout'

export default function PrettyJsonApp() {
  const [source, setSource] = useState('')
  const [result, setResult] = useState('')
  const [indentNum, setIndentNum] = useState(2)

  const replace = (): void => {
    let json = '' 
    try {
      json = JSON.stringify(JSON.parse(source), null, indentNum)
    } catch (e) {
      try {
        // replace \" with "
        const replacedSource = source.replaceAll('\\"', '"')
        json = JSON.stringify(JSON.parse(replacedSource), null, indentNum)
      } catch {
        setResult('JSONのparseに失敗しました')
        return
      }
    }
    setResult(json)
  }
  const title = 'pretty json'
  const description = "Yoo can pretty quoted double quotation json."
  const description2 = "ex) one line json to here document"

  return (
    <Layout title={title}>
      <main>
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <p className="description">{description2}</p>
        <div>
          <p>source</p>
          <textarea
            className="source-box"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
        </div>
        <div>
          <p>indent</p>
          <input
            type="number"
            min={1}
            max={10}
            className="num-box"
            value={indentNum}
            onChange={(e) => setIndentNum(parseInt(e.target.value))}
          />
        </div>
        <button onClick={replace}>pretty</button>
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

        .num-box {
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
