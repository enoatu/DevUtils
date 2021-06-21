import { useState, useEffect, useRef } from 'react'
import Layout from '@c/Layout'

export default function CreateImage () {
  const [width, setWidth] = useState(300)
  const [height, setHeight] = useState(300)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const draw = (): void => {
    const canvas = canvasRef.current! // !で type-check 通す
    const ctx = canvas.getContext('2d')!
    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = '#ccc'
    ctx.strokeStyle = '#ccc'
    ctx.rect(0, 0, width, height)
    ctx.fill()
    ctx.stroke()
  }

  const onClickCanvas = (): void => {
    const canvas = canvasRef.current!
    const url = canvas.toDataURL('image/png')
    const a = document.createElement('a')
    a.href = url
    a.setAttribute('download', `w${width}px_h${height}px.png`)
    a.click()
  }

  useEffect(() => {
    draw()
  }, [])

  const title = 'create image'
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
        <button onClick={draw}>draw</button>
        <p>Click for download!</p>
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          onClick={onClickCanvas}
        />
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
