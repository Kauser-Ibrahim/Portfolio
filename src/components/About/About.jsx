import React from "react";
import { getImageURL } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageURL("about/aboutImage2.png")}
          alt="Me about img"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/ai2.png")} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Science</h3>
              <p>
                I have experience in building robust and optimized AI/ML models.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/serverIcon.png")} alt="server Icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend</h3>
              <p>
                I have experience in building fast and optimized backend
                systems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/cursorIcon.png")} alt="UI Icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend</h3>
              <p>
                I have frontend development experience in building responsive
                and optimized websites.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
