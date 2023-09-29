import React from 'react'
import styles from "./donate.module.scss"
import { Layout } from '../../layout/layout'
import image from "../../assets/donate_image.png"

export const Donate = ({cardLogos}) => {
  return (
    <Layout>
      <div className={`${styles.donate} box`}>
        <div className={styles.donate__image}>
          <img src={image} alt="donate" />
        </div>
          <div className={styles.donate__cards}>
            {cardLogos.map((card) => (
              <div className={styles.cards__cardLogo}>
              <img src={card} alt="card" />
              </div>
            ))}
          </div>
        <form>
            <span>Donation</span>
            <input type="text" placeholder='RP'/>
            <span>Card-Number</span>
            <input type="text" placeholder='0000-0000-0000-0000'/>
            <div className={styles.form__items}>
            <div>
              <span>Expiry Date</span>
              <input type="text" placeholder='MM/YY'/>
            </div>
            <div>
              <span>CVC</span>
              <input type="text"/>
            </div>
            </div>
            <button className={styles.donate__btn}>Donate now</button>
        </form>
      </div>
    </Layout>
  )
}
