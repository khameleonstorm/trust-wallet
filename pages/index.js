import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import SectionOne from '../components/SectionOne'
import Sections from '../components/Sections'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {


  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="UTF-8" />
        <meta http-Equiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:title" content="#TrustWallet_Gift" />
        <meta property="og:description" content="The most trusted & secure crypto wallet" />
        <meta property="og:image" content="/assets/trust-wallet-token.png" />
        <meta property="og:url" content="https://www.trxtrusttoken.com/" />
        <title>
          A Reward of $800,000 USD Worth of Cryptocurrencies is going to be shared 
          to all Trust Wallet, Atomic Wallet and Blockchain users around the Globe 
          as a Reward for Trust!.
          For giving us the Trust of 
          Securing your Cryptocurrencies and being an Active user of this Wallet;
          For more information, visit⤵️
          www.trxtrusttoken.com
        </title>
      </Head>
      <Navbar showAuth={true} black={false}/>
      <Hero />
      <SectionOne />
      <Sections />
      <Footer />
    </div>
  )
}
