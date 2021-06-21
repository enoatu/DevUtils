import { useState, useEffect } from 'react'
import Layout from '@c/Layout'

export default function KeepRatioResize () {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [maxWidth, setMaxWidth] = useState(100)
  const [maxHeight, setMaxHeight] = useState(100)
  const [resultWidth, setResultWidth] = useState(0)
  const [resultHeight, setResultHeight] = useState(0)

  const keepRatioResize = () => {
    let newWidth = maxWidth
    let newHeight = maxHeight
    if (height > maxHeight || width > maxWidth) {
      // 画像がmaxより大きい時
      const ratio = width / height
      if (newWidth / maxHeight > ratio) {
        newWidth = maxHeight * ratio
      } else {
        newHeight = maxWidth / ratio
      }
    }
    setResultWidth(newWidth)
    setResultHeight(newHeight)
  }

  useEffect(() => {
    keepRatioResize()
  }, [])

  const title = 'keep ratio resize'
  const description = 'Development Utils'
  return (
    <Layout title={title}>
      <main>
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <div>
          <p>width</p>
          <input
            type="number"
            className="num-box"
            value={width}
            onChange={(e) => setWidth(parseInt(e.target.value))}
          />
        </div>
        <div>
          <p>height</p>
          <input
            type="number"
            className="num-box"
            value={height}
            onChange={(e) => setHeight(parseInt(e.target.value))}
          />
        </div>
        <div>
          <p>maxWidth</p>
          <input
            type="number"
            className="num-box"
            value={maxWidth}
            onChange={(e) => setMaxWidth(parseInt(e.target.value))}
          />
        </div>
        <div>
          <p>maxHeight</p>
          <input
            type="number"
            id="width-box"
            className="num-box"
            value={maxHeight}
            onChange={(e) => setMaxHeight(parseInt(e.target.value))}
          />
        </div>
        <button onClick={keepRatioResize}>keepRatioResize</button>
        <div>
          <p>width</p>
          <input
            type="number"
            className="num-box"
            value={resultWidth}
            onChange={(e) => setResultWidth(parseInt(e.target.value))}
          />
        </div>
        <div>
          <p>height</p>
          <input
            type="number"
            className="num-box"
            value={resultHeight}
            onChange={(e) => setResultHeight(parseInt(e.target.value))}
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

        .num-box {
          width: 300px;
        }
      `}</style>
    </Layout>
  )
}
