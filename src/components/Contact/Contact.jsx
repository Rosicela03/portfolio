import React from 'react'

import styles from "./Contact.module.css" 
import { getImageUrl } from '../../utils'

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>You’re welcome to contact me anytime</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="email icon" />
            <a href="mailto:rosicelaluna03@gmail.com">rosicelaluna03@gmail.com</a>
        </li>

        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin icon" />
            <a href="https://www.linkedin.com/in/rosicela-luna-713116351">linkedin/rosicelaluna</a>
        </li>

        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="email icon" />
            <a href="https://github.com/Rosicela03">Github/rosicela03</a>
        </li>

    </ul>
  </footer>
  )
   
}
