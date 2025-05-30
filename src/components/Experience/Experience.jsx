import React from 'react'
import skills from "../../data/Skills.json"
// import arrow from "../../"
import history from "../../data/History.json"
import styles from "./Experience.module.css"
import { getImageUrl } from '../Navbar/utils'
export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.tittle}>Experience</h2>
            <div className={styles.scrollHint}>
               <img src="/assets/history/arrow3.png" className={styles.bounceArrow} alt="arrow icon" />

                <ul className={styles.history}>
                    {history.map((historyItem, id) => {
                        return (
                            <li key={id} className={styles.historyItem}>
                                <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} Logo`}  />
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>

                                    <ul>
                                        {historyItem.experiences.map((Experience, id) => {
                                            return <li key={id}>{Experience}</li>
                                        })}
                                    </ul>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <h2 className={styles.title}>Skills</h2>
            <div className={styles.content}>
                <div className={styles.skills} >
                    {skills.map((skill, id) => {
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}>
                                    <img src={getImageUrl(skill.imageSrc)} alt={skill.tittle} />
                                </div>
                                <p>{skill.tittle}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div>
                
            </div>

        </section>
    )
}
