import { useState } from 'react'
import Layout from '@c/Layout'

export default function HighlightStringApp() {
  const [source, setSource] = useState('dog, cat, bird')
  const [line, setLine] = useState(6)
  const [num, setNum] = useState(6)
  const [result, setResult] = useState('')

  const replace = () => {
    let html = ''
    const modifiedNum = num - 1
    ;[...source].forEach((char, index) => {
      if (index === modifiedNum) {
        char = `<span id="target" style="background-color: aquamarine">${char}</span>`
      }
      html += char
    })
    setResult(html)
    const target = document.getElementById('target')
    if (!target) return
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    })
  }

  const title = 'highlight-string'
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
        <div>
          <p>num</p>
          <input
            className="num-box"
            type="number"
            value={num}
            onChange={(e) => setNum(Number(e.target.value))}
          />
        </div>
        <button onClick={replace}>highlight</button>
        <div>
          <div
            className="result-box"
            dangerouslySetInnerHTML={{ __html: result }}
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
        .num-box {
          height: 300px;
          width: 300px;
        }
        .result-box {
          min-height: 300px;
          min-width: 300px;
          max-width: 1000px;
          max-width: 1000px;
          border: 1px solid #ccc;
        }
      `}</style>
    </Layout>
  )
}
