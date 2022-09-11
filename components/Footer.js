import styles from "./Footer.module.css"
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaRedditSquare } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";
import logo from "../public/assets/Logo_TrustWallet.png";





export default function Footer() {
  return (
        <div className={styles.container}>
        <div className={styles.endlogo}>
            <div className={styles.img}><Image priority src={logo} alt="trust-logo" layout="fill" objectFit="cover" />
            </div>
            <div className={styles.icons}>
            <a href="https://facebook.com/trustwalletapp"><FaFacebookSquare /></a> 
            <a href="https://github.com/trustwallet"><FaGithubSquare /></a> 
            <a href="https://instagram.com/trustwallet"><FaInstagramSquare /></a> 
            <a href="https://twitter.com/trustwallet"><FaTwitterSquare /></a> 
            <a href="https://reddit.com/r/trustapp"><FaRedditSquare /></a> 
            <a href="https://t.me/trust_announcements"><FaTelegramPlane /></a> 
            </div>
        </div>
        <div className={styles.one}>
            <b>TRUST WALLET</b>
            <p><a href="https://trustwallet.com/assets">Assets</a></p>
            <p><a href="https://trustwallet.com/dapp">DApp Browser</a></p>
            <p><a href="https://trustwallet.com/stablecoins">Stablecoins</a></p>
            <p><a href="https://trustwallet.com/beta">Beta</a></p>
            <p><a href="https://trustwallet.com/nft-wallet">NFTs</a></p>
            <p><a href="https://trustwallet.com/el-salvador-wallet">El Salvador Wallet</a></p>
            <p><a href="https://apps.apple.com/app/apple-store/id1288339409?mt=8">Crypto Wallet for iOS</a></p>
            <p><a href="https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp&referrer=utm_source%3Dwebsite">Crypto Wallet for Android</a></p>
        </div>
        <div className={styles.two}>
            <b>INFORMATION</b>
            <p><a href="https://community.trustwallet.com/">Community</a></p>
            <p><a href="https://community.trustwallet.com/c/helpcenter">Help Center</a></p>
            <p><a href="https://support.trustwallet.com/">Support</a></p>
            <p><a href="https://trustwallet.com/blog">DApp Journey</a></p>
            <p><a href="https://trustwallet.com/developer">Developers</a></p>
            <p><a href="https://trustwallet.com/submit-dapp">Submit DApp</a></p>
            <p><a href="https://trustwallet.com/press">Press Kit</a></p>
            <p><a href="https://trustwallet.com/terms-of-services">Terms Of Service</a></p>
            <p><a href="https://trustwallet.com/privacy-and-policy">Privacy Policy</a></p>
        </div>
        <div className={styles.three}>
            <b> USE CRYPTO</b>
            <p><a href="https://trustwallet.com/buy-bitcoin">Buy Bitcoin with a credit card</a></p>
            <p><a href="https://trustwallet.com/buy-ethereum">Buy Ethereum</a></p>
            <p><a href="https://trustwallet.com/buy-bnb">Buy BNB</a></p>
            <p><a href="https://trustwallet.com/buy-litecoin">Buy Litecoin</a></p>
            <p><a href="https://trustwallet.com/buy-trons">Buy TRON</a></p>
            <p><a href="https://trustwallet.com/buy-xrp">Buy XRP</a></p>
            <p><a href="https://trustwallet.com/buy-bitcoincash">Buy Bitcoin Cash</a></p>
            <p><a href="https://trustwallet.com/earn-bitcoin">Earn Bitcoin</a></p>
            <p><a href="https://trustwallet.com/earn-ethereum">Earn Ethereum</a></p>
            <p><a href="https://trustwallet.com/earn-binance-coin">Earn Binance Coin</a></p>
            <p><a href="https://trustwallet.com/earn-cake">Earn Cake</a></p>
        </div>
        <div className={styles.four}>
            <b>ASSETS</b>
            <p><a href="https://trustwallet.com/bitcoin-wallet">Bitcoin (BTC)</a></p>
            <p><a href="https://trustwallet.com/ethereum-wallet">Ethereum (ETH)</a></p>
            <p><a href="https://trustwallet.com/binance-coin-wallet">Binance Coin (BNB)</a></p>
            <p><a href="https://trustwallet.com/litecoin-wallet">Litecoin (LTC)</a></p>
            <p><a href="https://trustwallet.com/xrp-wallet">Ripple (XRP)</a></p>
            <p><a href="https://trustwallet.com/dogecoin-wallet">Dogecoin (DOGE)</a></p>
            <p><a href="https://trustwallet.com/polkadot-wallet">Polkadot (DOT)</a></p>
            <p><a href="https://trustwallet.com/smart-chain-wallet">Smartchain (BNB)</a></p>
            <p><a href="https://trustwallet.com/dash-wallet">Dash (DASH)</a></p>
            <p><a href="https://trustwallet.com/tron-wallet">TRON (TRX)</a></p>
            <p><a href="https://trustwallet.com/tezos-wallet">Tezos (XTZ)</a></p>
            <p><a href="https://trustwallet.com/cosmos-wallet">Cosmos (ATOM)</a></p>
            <p><a href="https://trustwallet.com/stellar-wallet">Stellar (XLM)</a></p>
            <p><a href="https://trustwallet.com/kava-wallet">Kava (KAVA)</a></p>
        </div>
    </div>
  )
}
