import React from 'react'
import styles from "../styles/LandingPage.module.css";

const BorderContainer = ({text}) => {
  return (
    <div className={styles.borderContainer}>{text}</div>
  )
}

export default BorderContainer