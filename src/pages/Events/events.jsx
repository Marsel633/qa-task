import React from 'react'
import { Layout } from '../../layout/layout'
import styles from "./events.module.scss"
import { useSelector } from 'react-redux'

export const Events = () => {
  // const dispatch = useDispatch();
  const { events } = useSelector((state) => state.events || {});

  return (
    <Layout>
      <div className={`${styles.events} box`}>
        <h3 className={styles.events__title}>
          All Events
        </h3>
        <div className={styles.events__content}>
          {events && events.map(({id, name, date, price, image}) => (
            <div key={id} className={styles.events__card}>
              <div className={styles.card__image}>
                <img src={image} alt="event" />
                </div>
                <h5 className={styles.card__title}>{name}</h5>
                <p className={styles.card__date}>Date: {date}</p>
                <span className={styles.card__price}>Price: {price}$</span>
                <button className={styles.card__btn}>Buy Ticket</button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
