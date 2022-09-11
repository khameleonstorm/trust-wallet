import Image from "next/image";
import styles from "./Navbar.module.css";
import logo from "../public/assets/horizontal_white.png";
import { useState } from "react";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(true)

    const handleClick = () => {
        setShowMenu(!showMenu)
        console.log(showMenu)
    }





  return ( 
    <nav className={styles.navbar}>
      <div className={styles.navlogo}>
          <Image src={logo} alt="trust-logo" layout="fill" objectFit="cover" />
      </div>
      <ul className={styles.navmenu} style={showMenu ? {right:  "0"} : {right:  '-100%'}} onClick={handleClick}>
          <li className={styles.navitem}>
              <a href="https://trustwallet.com/assets">Assets</a>
          </li>
          <li className={styles.navitem}>
              <a href="https://trustwallet.com/staking" >Staking</a>
          </li>
          <li className={styles.navitem}>
              <a href="https://trustwallet.com/earn">Earn <b>+11% APR</b></a>
          </li>
          <li className={styles.navitem}>
              <a href="https://trustwallet.com/nft-wallet">NFTs</a>
          </li>
          <li className={styles.navitem}>
              <a href="https://trustwallet.com/dapp">DApp Browser</a>
          </li>
          <li className={styles.navitem}>
              <a href="https://trustwallet.com/#">Language</a>
          </li>
      </ul>
      <div className={styles.hamburger} onClick={handleClick}>
          <span className={showMenu ? styles.menu : styles.bar}></span>
          <span className={showMenu ? styles.menu : styles.bar}></span>
          <span className={showMenu ? styles.menu : styles.bar}></span>
      </div>
    </nav>
  )
}
