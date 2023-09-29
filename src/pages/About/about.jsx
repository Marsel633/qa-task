import React from "react";
import { Layout } from "../../layout/layout";
import styles from "./about.module.scss";
import bgImage from "../../assets/aboutBg.png"

export const About = ({ aboutImages }) => {
  return (
    <Layout>
      <div className={`${styles.about} box`}>
        <div className={styles.about__images}>
          {aboutImages.map((item) => (
            <img src={item} alt="img" />
          ))}
        </div>
        <h3 className={styles.about__title}>Who Are We?</h3>
        <p className={styles.about__desc}>
          We are a charity to help victims of natural disasters, with this
          charity gathering by holding this music concert, it is hoped that it
          can help all and equally those who are affected by natural disasters
          and can help them for a better life.
        </p>
        <div className={styles.about__bgImage}>
          <img src={bgImage} alt="bg" />
        </div>
      </div>
    </Layout>
  );
};
