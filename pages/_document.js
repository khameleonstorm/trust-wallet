import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class _document extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
