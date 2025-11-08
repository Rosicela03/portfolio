import React from 'react'
import styles from "./hero.module.css"
import { getImageUrl } from '../../utils'

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Rosie</h1>
            <p className={styles.description}>I’m a full stack developer just starting out on my journey. I’m passionate about building websites, and I’m constantly learning new technologies to grow my skills. Feel free to reach out if you'd like to connect or learn more!</p>
            <a href='mailto:rosicelaluna03@gmail.com' className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt='Hero image of me' className={styles.heroImg}></img>
        <div className={styles.topBlur} />
        <div className={styles .bottomBlur} />

    </section>
  )
}


