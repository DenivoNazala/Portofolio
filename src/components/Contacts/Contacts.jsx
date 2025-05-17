import React from 'react'
import { getImageUrl } from '../Navbar/utils'
import styles from './Contact.module.css'
export const Contacts = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt='email icon'/>
                <a href="mailto:denivonazala19@gmail.com" target="_blank" rel="noopener noreferrer">denivonazala19@gmail.com</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt='linkedIn icon'/>
                <a href="https://www.linkedin.com/in/denivo-candrania-b49456270/" target="_blank" rel="noopener noreferrer">linkedIn.com/DenivoCandrania</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt='github icon'/>
                <a href="https://github.com/DenivoNazala" target="_blank" rel="noopener noreferrer">github.com/DenivoNazala</a>
            </li>
        </ul>
    </footer>
  )
}
