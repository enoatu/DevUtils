import { AppProps } from 'next/app'
import '@/configs/i18n'
import 'public/calendar.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

export default MyApp
