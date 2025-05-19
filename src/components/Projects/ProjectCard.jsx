import React from 'react'
import { getImageUrl } from '../Navbar/utils'
import styles from './ProjectCard.module.css'
export const ProjectCard = ({project : {title, imageSrc, description, skills, evidence, source}}) => {
    return (
        <div className={styles.container}>
            <img src={getImageUrl(imageSrc)} alt={`image of ${title}`} className={styles.image}/>
            
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <ul className={styles.skills}>
                    {skills.map((skill, id) => (
                        <li key={id} className={styles.skill}>{skill}</li>
                    ))}
                </ul>
            </div>
            
            <div className={styles.links}>
                <a href={evidence} className={styles.link} target="_blank" rel="noopener noreferrer">Evidence</a>
                {/* <a href={source} className={styles.link}>Source</a> */}
            </div>
        </div>
    );
};
