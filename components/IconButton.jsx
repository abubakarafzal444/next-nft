import Image from 'next/image';
import React from 'react'
import styles from "../styles/LandingPage.module.css";

const IconButton = ({text,onClick:onClickFunc,icon}) => {
  return (
    <button
    onClick={() => onClickFunc()}
    className={styles.iconBtn}
  >
    <p className={styles.iconBtnIcon}>
      <Image src={icon} alt="" />
    </p>
    <p className={styles.iconBtnText}>Connect Wallet</p>
  </button>
  )
}

export default IconButton