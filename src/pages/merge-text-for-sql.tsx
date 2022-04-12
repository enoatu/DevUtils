import { useState } from 'react'
import Layout from '@c/Layout'

export default function ReplacerApp() {
  const [source, setSource] = useState('INSERT INTO profile (member_id, name) VALUES(%s);')
  const [pattern, setPattern] = useState('%s')
  const [glue, setGlue] = useState("\n")
  const [separator, setSeparator] = useState("\t")
  const [replacement, setReplacement] = useState("123\tJohn\n1234\tJane")
  const [result, setResult] = useState('')

  const replace = (): void => {
    let replacements: string[] = replacement.split(glue) // hoge fuga
    replacements = replacements.map(r => {
      return r.split(separator).map(s => `'` + s + `'`).join(',')
    })
    const result: string = replacements
      .map((replacement) => source.replaceAll(pattern, replacement))
      .join(glue)
    setResult(result)
  }

  const title = 'merge-text'
  const description = 'Development Utils'
  const placeholder = 'house\nstore\nstation'
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
            placeholder="I'll go to %s"
          />
        </div>
        <div>
          <p>replacement</p>
          <textarea
            className="replacement-box"
            value={replacement}
            onChange={(e) => setReplacement(e.target.value)}
            placeholder={placeholder}
          />
        </div>
        <div>
          <p>pattern</p>
          <textarea
            className="pattern-box"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            placeholder='%s'
          />
        </div>
        <div>
          <p>separator</p>
          <textarea
            className="separator-box"
            value={separator}
            onChange={(e) => setSeparator(e.target.value)}
          />
        </div>
        <div>
          <p>glue</p>
          <textarea
            className="glue-box"
            value={glue}
            onChange={(e) => setGlue(e.target.value)}
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
        .replacement-box {
          height: 300px;
          width: 300px;
        }
        .separator-box {
          height: 300px;
          width: 300px;
        }
        .pattern-box {
          height: 30px;
          width: 300px;
        }
        .glue-box {
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
