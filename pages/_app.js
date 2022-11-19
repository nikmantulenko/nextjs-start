import Script from 'next/script'
import { Roboto } from '@next/font/google'
import '../styles/globals.css'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://connect.facebook.net/en_US/sdk.js" strategy="lazyOnload" />
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
