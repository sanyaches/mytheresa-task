import 'sanitize.css'
import '@/styles/globals.scss'
import '@/styles/main.scss'
import { wrapper } from '../store/store'
import '@/app/fonts'

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App)
