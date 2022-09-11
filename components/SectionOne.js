import { FaCreditCard, FaExchangeAlt, FaLock } from 'react-icons/fa';
import styles from './SectionOne.module.css';


export default function SectionOne() {
  return (
    <div className={styles.container}>
      <div><FaCreditCard /><b>Buy Crypto With a Card</b></div>
      <div><FaExchangeAlt /><b>Exchange Instantly</b></div>
      <div><FaLock /><b>Private & Secure</b></div>
    </div>
  )
}
