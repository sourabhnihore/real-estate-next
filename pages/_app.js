import '../styles/globals.css'
import Head from 'next/head'
import WhatsAppButton from '../components/WhatsAppButton'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <WhatsAppButton />
    </>
  )
}

export default MyApp
