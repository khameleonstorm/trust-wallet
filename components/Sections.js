import styles from "./Sections.module.css";
import Image from "next/image";
import React from "react";
import { texts } from "../utils/text";




const Sections = () => {

  return (texts && texts.map(text => 
      <div className={text.reversed ? styles.container2 : styles.container} key={text.id}>
        <div className={styles.imgcard}>
          <div className={styles.img}>
            <Image 
            src={text.imageUrl}
            layout="fill"
            objectFit="contain"
            alt="Trust Wallet benefits"
            />
          </div>
        </div>

        <div className={styles.text}>
          <div>
            <h1>{text.title}</h1>
            <p>{text.desc}</p>
          </div>
        </div>
      </div>
  ))
}

export default Sections