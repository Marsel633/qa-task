import React from "react";
import styles from "./home.module.scss";
import { Layout } from "../../layout/layout";
import bgImage from "../../assets/homePage.png";

export const Home = () => {
  return (
    <Layout>
      <div className={`${styles.home} box`}>
        <div className={styles.home__bgImage}>
          <img src={bgImage} alt="home bgImg" />
        </div>
        <h3 className={styles.home__title}>
        The Biggest Charity Music Concert Is About To Start
        </h3>
        <p>
        Come on, register yourself and book your ticket now !!!
        </p>
        <button className={styles.home__getTicketBtn}>
          Get Ticket
        </button>
      </div>
    </Layout>
  );
};
