import { useState } from 'react'
import Layout from '@c/Layout'
import { useTranslation } from 'react-i18next'

export default function ChangeIndent() {
  const [source, setSource] = useState('')
  const [result, setResult] = useState('')

  const { t, i18n } = useTranslation('change-indent')
  i18n.addResourceBundle('ja', 'change-indent', {
    'now, you can change only 2 indent to 4 indent': '現在、2インデントから4インデントにしか変更できません',
    'Put text': 'テキストをここに貼り付けてください',
    'Change indent': 'インデント変更',
  })

  const change = () => {
    let newResult: string[] = []
    source.split("\n").forEach(line => {
      let pointer: number = 0
      let targetPointer: number = 0
      while (pointer <= line.length) {
        if (line[pointer] === ' ') {
          console.log('hogee')
          ++targetPointer
        } else {
          break
        }
        ++pointer
      }
      newResult.push(' '.repeat(targetPointer) + line)
    })
    setResult(newResult.join("\n"))
  }

  return (
    <Layout title={t('title')}>
      <main>
        <h1 className="title">{t('title')}</h1>
        <p className="description">{t('description')}</p>
        <p className="comment">{t('now, you can change only 2 indent to 4 indent')}</p>
        <div>
          <p>{t('Put text')}</p>
          <textarea
            className="source-box"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
        </div>
        <button onClick={change}>{t('Change indent')}</button>
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
