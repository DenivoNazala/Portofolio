import React from 'react'
import { getImageUrl } from '../Navbar/utils'
import styles from './Hero.module.css'

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h4 className={styles.tittle}>Hi, I'm Ivo</h4>
                <p className={styles.description}>I am a Software Quality Assurance with one year of experience in manual testing. Every project tells a story. Here's mine.
                </p>
                <a
                    href="https://mail.google.com/mail/?view=cm&to=denivonazala19@gmail.com&su=Hello&body=I%20want%20to%20contact%20you"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactBtn}
                >
                    Contact Me
                </a>
            </div>

            <img src={getImageUrl("hero/DENIVO_CL4.png")} alt="hero image of me" className={styles.heroImg} style={{
                width: '250px', height: '250px', borderRadius: '50%', objectFit: 'cover', justifyContent: 'center'
            }} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />

        </section>
    )
}
