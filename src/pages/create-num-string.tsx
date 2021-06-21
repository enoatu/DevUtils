import { useState } from 'react'
import Layout from '@c/Layout'
import Chance from 'chance'

export default function ReplacerApp () {
  const [column, setColumn] = useState(0)
  const [row, setRow] = useState(0)
  const [mode, setMode] = useState('numrandom')
  const [result, setResult] = useState('')

  const createNumRandom = () => {
    const chance = new Chance()
    const array: number[] = [...Array(row)].map((_, i) => i) // 50 [0, 1, 50]
    const result = array
      .map((num) => {
        const nextNum = num + 1
        let data = ''
        if (column && column > 1) {
          const random: string = chance.string({
            length: column,
            pool: 'abcdefghijklmnopqrstuvwxyz'
          })
          data = random.substring([...String(nextNum)].length)
          return nextNum + data
        }
        return ''
      })
      .join('\n')
    setResult(result)
  }

  const createRandom = () => {
    const array: number[] = [...Array(row)].map((_, i) => i) // 50 [0, 1, 50]
    const result = array
      .map((num) => [...Array(column)].fill(num + 1).join(''))
      .join('\n')
    setResult(result)
  }

  const createNum = () => {
    const array: number[] = [...Array(row)].map((_, i) => i) // 50 [0, 1, 50]
    const result = array
      .map((num) => [...Array(column)].fill(num + 1).join(''))
      .join('\n')
    setResult(result)
  }

  const create = () => {
    switch (mode) {
      case 'numrandom':
        createNumRandom()
        break
      case 'random':
        createRandom()
        break
      case 'num':
        createNum()
        break
    }
  }

  const title = 'create-num-string'
  const description = 'Development Utils'
  return (
    <Layout title={title}>
      <main>
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <div>
          <p>column</p>
          <textarea
            className="column-box"
            value={column}
            onChange={(e) => setColumn(parseInt(e.target.value))}
          />
        </div>
        <div>
          <p>row</p>
          <textarea
            className="row-box"
            value={row}
            onChange={(e) => setRow(parseInt(e.target.value))}
          />
        </div>
        <div>
          <p>mode</p>
          <select value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="numrandom">num + random string</option>
            <option value="random">random string</option>
            <option value="num">num</option>
          </select>
        </div>
        <button onClick={create}>create</button>
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
          height: 30px;
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
