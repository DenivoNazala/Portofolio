import React from 'react'
import styles from './About.module.css'
import { getImageUrl } from '../Navbar/utils'

export const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.tittle}>About</h2>
      <div className={styles.content}>
        {/* <img src={getImageUrl("about/AboutDenivo.png")} alt="about image of me" className={styles.aboutImage} style={{
          width: '250px', height: '250px', borderRadius: '50%', objectFit: 'cover', justifyContent: 'center'
        }} /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/manualTesting.png")} alt="coments icon" />
            <div className={styles.aboutItemText}>
              <h3>Manual Testing</h3>
              <p>I experienced in manual testing, with strong skills in test case design and a solid understanding of the Software Testing Life Cycle.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/automation.png")} alt="server icon" />
            <div className={styles.aboutItemText}>
              <h3>Automation Testing</h3>
              <p>I have a strong understanding of automation testing for API and E2E testing through an intensive bootcamp using Cypress framework</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/mastery.png")} alt="list icon" />
            <div className={styles.aboutItemText}>
              <h3>Practical Experience in Final Project</h3>
              <p>Through an intensive bootcamp, I’ve built hands-on experience writing test scripts, simulating user workflows, and validating API responses using Cypress.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
