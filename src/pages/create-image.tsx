import { useState, useEffect, useRef } from 'react'
import Layout from '@c/Layout'
import AdditionalOptions from '@c/utils/AdditionalOptions'
import { useTranslation } from 'react-i18next'

export default function CreateImage() {
  const { t, i18n } = useTranslation('create-image')
  i18n.addResourceBundle('ja', 'create-image', {
    'height': '高さ',
    'width': '横幅',
    'text': 'テキスト',
    'text size': 'テキストサイズ',
    'text color': 'テキストの色',
    'background color:': '背景の色',
    'Click Image for download!': '画像をクリックしてダウンロード',
  })
  const [width, setWidth] = useState(300)
  const [height, setHeight] = useState(300)
  const [text, setText] = useState('')
  const [textSize, setTextSize] = useState(0)
  const [bgColor, setBgColor] = useState('#ccc')
  const [textColor, setTextColor] = useState('#f00')
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const draw = (): void => {
    const w = width || 0
    const h = height || 0
    const canvas = canvasRef.current! // !で type-check 通す
    const ctx = canvas.getContext('2d')!
    ctx.clearRect(0, 0, w, h)
    ctx.fillStyle = bgColor
    ctx.strokeStyle = bgColor
    ctx.rect(0, 0, w, h)
    ctx.fill()
    ctx.stroke()
    ctx.fillStyle = textColor
    let fontSize: number = 0
    if (w - h > 0) {
      if (textSize === 0) {
        fontSize = (h * 1) / 3
      } else {
        fontSize = (h * 2) / 3
      }
    } else {
      if (textSize === 0) {
        fontSize = (w * 1) / 3
      } else {
        fontSize = (w * 2) / 3
      }
    }
    ctx.font = `${fontSize}px 'ＭＳ ゴシック'`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    const textImage = text || `w${w}px × h${h}px`
    ctx.fillText(textImage, w / 2, h / 2, w)
  }

  const onClickCanvas = (): void => {
    const canvas = canvasRef.current!
    const url = canvas.toDataURL('image/png')
    const a = document.createElement('a')
    a.href = url
    a.setAttribute('download', `${text}.png`)
    a.click()
  }

  useEffect(() => {
    draw()
  }, [width, height, text, textSize, textColor, bgColor])

  return (
    <Layout title={t('title')}>
      <main>
        <h1 className="title">{t('title')}</h1>
        <p className="description">{t('description')}</p>

        <div>
          <p>{t('width')}</p>
          <input
            type="number"
            className="num-box"
            value={width}
            onChange={(e) => setWidth(parseInt(e.target.value))}
          />
        </div>
        <div>
          <p>{t('height')}</p>
          <input
            type="number"
            className="num-box"
            value={height}
            onChange={(e) => setHeight(parseInt(e.target.value))}
          />
        </div>
        <AdditionalOptions>
          <div>
            <p>{t('text')}</p>
            <input
              type="text"
              className="text-box"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div>
            <p>{t('text size')}</p>
            <select
              className="num-box"
              value={textSize}
              onChange={(e) => setTextSize(parseInt(e.target.value))}
            >
              <option value="0">normal</option>
              <option value="1">big</option>
            </select>
          </div>
          <div>
            <p>{t('text color')}</p>
            <input
              type="text"
              className="text-box"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
            />
          </div>
          <div>
            <p>{t('background color')}</p>
            <input
              type="text"
              className="text-box"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
            />
          </div>
        </AdditionalOptions>
        <p>{t('Click Image for download!')}</p>
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
