import React from "react";
import { getImageURL } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kauser</h1>
        <p className={styles.description}>
          a 4th-year Computer Science Engineering student at Jamia Millia
          Islamia with interests in Data Science, Web-Development, and Cloud
          Technologies.
        </p>
        <a href="mailto:kauser4960@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageURL("hero/heroImage4.png")}
        alt="hero-img"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
