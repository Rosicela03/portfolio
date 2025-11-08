import React from "react";
import styles from "./about.module.css";
import { getImageUrl } from "../../utils/";

export const About = () => {
    console.log("about image URL:", getImageUrl("about/aboutImage.png"));
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>ABOUT</h2>
        <div className={styles.content}>


        <img
  src={getImageUrl("about/aboutImage.png")}
  alt="me sitting with a laptop"
  className={styles.aboutImage}
/>




        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>I’m a front-end developer focused on creating responsive, user-friendly websites. Continuously growing through hands-on projects and ongoing learning.</p>
                </div>
            </li>

            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>I’m currently learning back-end development, building my skills in APIs and databases like MongoDB as I expand my full-stack knowledge.</p>
                </div>
            </li>

            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
                <div className={styles.aboutItemText}>
                    <h3>UI Designer</h3>
                    <p>I'm Familiar with core UI design principles and skilled at translating designs into responsive, functional web applications.</p>
                </div>
            </li>
        </ul>
        </div>
    </section>

  )};




