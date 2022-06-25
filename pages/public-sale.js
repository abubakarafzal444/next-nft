import styles from "../styles/LandingPage.module.css";
import Image from "next/image";
import nameLogo from "../assets/desktop/bitmap_2@3x.png";
import metamaskLogo from "../assets/desktop/metamask-logo@3x.png";
import { useState } from "react";
import BorderContainer from "../components/BorderContainer";
import SimpleButton from "../components/SimpleButton";
import IconButton from "../components/IconButton";
export default function PublicSale() {
  const [isConnected, setIsConnected] = useState(false);
  const [walletId,setWalletId]=useState("0x2D4e853789754960d06E90c4159e704bA3568478")
  //Note: if you update isConnected state to true, it will show wallet connected on screen.
  //You also need to update walletID state along with it so that it is displayed correctly.
  const [saleStatus,setSaleStatus]=useState("ended");
  //publicSale status is being shown in transparent box. It has 3 options on the basis of which
  //, it will show different text.options are: notStarted, started and ended. Update this 
  //state with your logic. If saleStatus is "ended", it will not show mint button or connect wallet button.

  const [isWalletWhitelisted,setIsWalletWhitelisted]=useState(true);
  //If wallet is whitelisted, only then, it will show mint button. update this state with your logic.

  return (
    <>
      <header className={styles.wrapper}>
        <div className={styles.pacmanImg}>
          <Image src={nameLogo} alt="logo img" />
        </div>
        <h1 className={styles.heading}>Public Sale</h1>
        {!isConnected&&saleStatus!=="ended" && (
          <IconButton text="Connect Wallet" onClick={() => setIsConnected(true)} icon={metamaskLogo}/>
        )}
        {isConnected && (
          <div className={styles.connectedSection}>
            <div className={styles.walletConnectedContainer}>
              <div className={styles.walletConnectedMeta}>
                <Image src={metamaskLogo} alt="" />
              </div>
              <p>Wallet Connected:</p>
            </div>
            <p className={styles.walletId}>
             {walletId}
            </p>
          </div>
        )}
        {!isConnected && (
          <BorderContainer text={saleStatus==='started'&&"public sale has started"||saleStatus==="ended"&&"public sale has ended"||saleStatus==="notStarted"&&"public sale hasn't started yet"}/>
        )}
        {isConnected &&isWalletWhitelisted&&<SimpleButton text="MINT" />}
        {isConnected &&!isWalletWhitelisted&&<BorderContainer text="your wallet is not on the whitelist"/>}
      </header>
      <footer className={styles.footerSection}>
        <p>Copyright © Pacman the Jack Russell by Manny Pacquiao.</p>
      </footer>
    </>
  );
}
