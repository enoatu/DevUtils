import { appWithTranslation } from 'next-i18next'

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />
console.log('ddddddddd')

export default appWithTranslation(MyApp)
