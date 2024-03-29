import '../styles/globals.css'
import NProgress from "nprogress"
import Head from "next/head"
import Router from "next/router"

Router.onRouteChangeStart = url => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => NProgress.done()

Router.onRouteChangeError = () => NProgress.done()

function MyApp({ Component, pageProps }) {

  return (
          <>
            <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/favicon.png" />
            </Head>
            <Component {...pageProps} />
          </>
        )
}

export default MyApp