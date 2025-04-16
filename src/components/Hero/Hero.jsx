import React from 'react'
import { getImageUrl } from '../Navbar/utils'
import styles from './Hero.module.css'

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.tittle}>Hi, I am Ivo</h1>
                <p className={styles.description}>A dedicated Quality Assurance junior with 1 year of experience, including 7 months of internship in the QA field.</p>
                <a href="mailto:denivonazala19@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>

            <img src={getImageUrl("hero/heroIcon.png")} alt="hero image of me" className={styles.heroImg} style={{
                width: '250px', height: '250px', borderRadius: '50%', objectFit: 'cover', justifyContent: 'center'
            }} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />

        </section>
    )
}
