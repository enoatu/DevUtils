import Head from 'next/head'
import { useState } from 'react'

export default function MultiReplacerApp() {
  const [source, setSource] = useState('')
  const [pattern, setPattern] = useState('')
  const [result, setResult] = useState('')

  const replace = () => {
    const patternArray = pattern.split('\n')
    let resultText = source
    patternArray.forEach((text) => {
      const [pattern, replacement] = text.split(' ')
      resultText = resultText.replaceAll(pattern, replacement)
    })
    setResult(resultText)
  }

  return (
    <div className="container">
      <Head>
        <title>DevUtils | Multi Replacer </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title">Multi Replacer</h1>
        <p className="description">Development Utils</p>
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
          <p>replacement</p>
          <textarea
            className="pattern-box"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
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
          height: 100px;
          width: 300px;
        }
        .result-box {
          height: 300px;
          width: 300px;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}