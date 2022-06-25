import React from 'react'
import styles from "../styles/LandingPage.module.css";

const SimpleButton = ({onClick=()=>{},text}) => {
  return (
    <button className={styles.simpleBtn} onClick={()=>onClick()}>{text}</button>
  )
}

export default SimpleButton