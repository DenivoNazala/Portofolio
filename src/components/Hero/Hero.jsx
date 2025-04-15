import React from 'react'
import { getImageUrl } from '../Navbar/utils'



export const Hero = () => {
    return (
        <section>
            <div>
                <h1>Hi, I am Ivo</h1>
                <p>A dedicated Quality Assurance professional with 1 year of experience, including 7 months of internship in the QA field.</p>
                <a href="mailto:denivonazala19@gmail.com">Contact Me</a>
            </div>
            
            <img src={getImageUrl("hero/heroIcon.png")} alt="hero image of me"/>
           
        </section>
    )
}
