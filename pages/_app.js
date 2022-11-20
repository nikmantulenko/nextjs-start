import React from 'react'
import App from 'next/app'
import Script from 'next/script'
import { Roboto } from '@next/font/google'
import { getStores, StoreProvider } from '../stores'
import '../styles/globals.css'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

function MyApp({ Component, pageProps, initialData }) {
  return (
    <>
      <Script src={'https://connect.facebook.net/en_US/sdk.js'} strategy="lazyOnload" />
      <style jsx global>{`
          html {
            font-family: ${roboto.style.fontFamily};
          }
        `}</style>
      <StoreProvider value={getStores(initialData)}>
        <Component {...pageProps} />
      </StoreProvider>
    </>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const initialData = {
    postStoreInitialData: '1',
  }

  // Make stores available to page's `getInitialProps`
  appContext.ctx.mobxStores = getStores(initialData)

  return {
    ...(await App.getInitialProps(appContext)),
    initialData,
  }
}

export default MyApp
