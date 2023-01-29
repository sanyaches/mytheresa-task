import 'sanitize.css'
import '@/styles/globals.scss'
import '@/styles/main.scss'
import { Provider } from 'react-redux'
import { storeWrapper } from '../store'
import '@/app/fonts'

function App({ Component, ...rest }) {
  const { store, props } = storeWrapper.useWrappedStore(rest)
  const { pageProps } = props

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
