import React from 'react'
import { AppProps } from 'next/app'
import Script from 'next/script'
import { Roboto } from '@next/font/google'
import { StoreProvider, RootStoreHydration } from '../stores'
import '../styles/globals.css'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }: AppProps<{hydrationData?: RootStoreHydration}>) {
  return (
    <>
      <Script src={'https://connect.facebook.net/en_US/sdk.js'} strategy="lazyOnload" />
      <style jsx global>{`
          html {
            font-family: ${roboto.style.fontFamily};
          }
        `}</style>
      <StoreProvider hydrationData={pageProps.hydrationData}>
        <Component {...pageProps} />
      </StoreProvider>
    </>
  )
}

export default MyApp
