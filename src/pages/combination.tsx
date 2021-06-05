import Head from 'next/head'
import { useState } from 'react'

export default function CombinationApp() {
  const [source, setSource] = useState('')
  const [result, setResult] = useState('')
  const [num, setNum] = useState(2)

  const permutation = (nums: string[], k: number): string[][] => {
    let ans = []
    if (nums.length < k) {
      return []
    }
    if (k === 1) {
      for (let i = 0; i < nums.length; i++) {
        ans[i] = [nums[i]]
      }
    } else {
      for (let i = 0; i < nums.length; i++) {
        let parts = nums.slice(0)
        parts.splice(i, 1)[0]
        let row = permutation(parts, k - 1)
        for (let j = 0; j < row.length; j++) {
          ans.push([nums[i]].concat(row[j]))
        }
      }
    }
    return ans
  }

  const combination = (nums: string[], k: number): string[][] => {
    let ans = [];
    if (nums.length < k) {
      return []
    }
    if (k === 1) {
      for (let i = 0; i < nums.length; i++) {
        ans[i] = [nums[i]]
      }
    } else {
      for (let i = 0; i < nums.length - k + 1; i++) {
        let row = combination(nums.slice(i + 1), k - 1);
        for (let j = 0; j < row.length; j++) {
          ans.push([nums[i]].concat(row[j]))
        }
      }
    }
    return ans
  }

  const display = (callBack: (array: string[], num: number) => string[][]) => {
    const array = source.split("\n")
    const resultArray = callBack(array, num).map(item => item.join(' → ')).sort()
    const resultText = resultArray.join("\n")
    setResult(resultText)
  }

  return (
    <div className="container">
      <Head>
        <title>DevUtils | combination </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title">combinations</h1>
        <p className="description">Development Utils</p>
        <div>
          <p>source</p>
          <textarea className="source-box" value={source} onChange={e => setSource(e.target.value)}/>
        </div>
        <div>
          <p>count</p>
          <input type="number" value={num} onChange={e => setNum(parseInt(e.target.value))}/>
        </div>
        <button onClick={() => display(permutation)}>順列実行</button>
        <button onClick={() => display(combination)}>組み合わせ実行</button>
        <div>
          <textarea className="result-box" value={result} readOnly/>
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
