import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer closeOnClick pauseOnHover={false} />
    </>
  )
}

export default MyApp
