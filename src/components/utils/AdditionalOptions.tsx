import { useState, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

type Props = {
  children: ReactNode
}

export default function UseAdditionalOptions(props: Props) {
  const { t, i18n } = useTranslation('utils')
  i18n.addResourceBundle('ja', 'utils', {
     'Additional Options': '追加オプション',
  })

  const [isShow, setIsShow] = useState(false)
  return (
    <div>
      <button onClick={() => setIsShow(!isShow)}>{t('Additional Options')}</button>
      {isShow && <div>{props.children}</div>}
    </div>
  )
}
