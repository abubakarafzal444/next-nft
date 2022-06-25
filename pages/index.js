import styles from "../styles/LandingPage.module.css";
import Image from "next/image";
import nameLogo from "../assets/desktop/bitmap_2@3x.png";
import metamaskLogo from "../assets/desktop/metamask-logo@3x.png";
import { useState } from "react";
export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  return (
    <>
      <header className={styles.wrapper}>
        <div className={styles.pacmanImg}>
          <Image src={nameLogo} alt="logo img" />
        </div>
        <h1 className={styles.heading}>Whitelist Presale</h1>
        {!isConnected && (
          <button
            onClick={() => setIsConnected(true)}
            className={styles.connectBtn}
          >
            <p className={styles.connectBtnIcon}>
              <Image src={metamaskLogo} alt="" />
            </p>
            <p className={styles.connectBtnText}>Connect Wallet</p>
          </button>
        )}
        {isConnected && (
          <div className={styles.connectedSection}>
            <div className={styles.walletConnectedContainer}>
              <div className={styles.walletConnectedMeta}>
                <Image src={metamaskLogo} alt="" />
              </div>
              <p>Wallet Connected:</p>
            </div>
            <p className={styles.walletId}>0x2D4e853789754960d06E90c4159e704bA3568478</p>
          </div>
        )}
        {!isConnected&&<button className={styles.presaleBtn}>
          presale hasn't started yet
        </button>}
        {isConnected&&<button className={styles.mintBtn}>
         MINT
        </button>}
      </header>
      <footer className={styles.footerSection}>
        <p>Copyright © Pacman the Jack Russell by Manny Pacquiao.</p>
      </footer>
    </>
  );
}
