import React from 'react'
import styles from "./footer.module.scss"
import appStoreIcon from "../../assets/appStoreIcon.svg"
import googlePlayIcon from "../../assets/googlePlayIcon.svg"
import twitterIcon from "../../assets/twitterIcon.svg"
import linkedinIcon from "../../assets/linkedinIcon.svg"
import facebookIcon from "../../assets/facebookIcon.svg"

export const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footer__findUs}>
            <div>
                <img src={appStoreIcon} alt="appstore icon" />
            </div>
            <div>
                <img src={googlePlayIcon} alt="googleplay icon" />
            </div>
        </div>
        <p className={styles.footer__desc}>© Marsel Akaprov 2023</p>
        <div className={styles.footer__social}>
            <div>
                <img src={facebookIcon} alt="facebook icon" />
            </div>
            <div>
                <img src={twitterIcon} alt="twitter icon" />
            </div>
            <div>
                <img src={linkedinIcon} alt="linkedin icon" />
            </div>
        </div>
    </div>
  )
}
