import React from 'react'
import { getImageUrl } from '../Navbar/utils'
import styles from './Hero.module.css'

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.tittle}>Hi, I am Ivo</h1>
                <p className={styles.description}>I am a Software Quality Assurance with one year of experience in both manual. Every project tells a story. Here's mine.
                </p>
                <a href="mailto:denivonazala19@gmail.com" className={styles.contactBtn} target="_blank" rel="noopener noreferrer">Contact Me</a>
            </div>

            <img src={getImageUrl("hero/DENIVO_CL4.png")} alt="hero image of me" className={styles.heroImg} style={{
                width: '250px', height: '250px', borderRadius: '50%', objectFit: 'cover', justifyContent: 'center'
            }} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />

        </section>
    )
}
