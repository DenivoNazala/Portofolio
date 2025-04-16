import React from 'react'
import styles from './About.module.css'
import { getImageUrl } from '../Navbar/utils'

export const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.tittle}>About</h2>
      <div className={styles.content}>
        <img src={getImageUrl("about/about-img.png")} alt="sitting with laptop" className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/coments-img.png")} alt="coments icon" />
            <div className={styles.aboutItemText}>
              <h3>Quality Assurance</h3>
              <p>im a quality assurance tester, with experience in quality and optimize product</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/server-img.png")} alt="server icon" />
            <div className={styles.aboutItemText}>
              <h3>Quality Assurance</h3>
              <p>im a quality assurance tester, with experience in quality and optimize product</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/list-img.png")} alt="list icon" />
            <div className={styles.aboutItemText}>
              <h3>Quality Assurance</h3>
              <p>im a quality assurance tester, with experience in quality and optimize product</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
