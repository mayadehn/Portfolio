import React from 'react'
import './About.css'
import about from './../../assets/images/about.png'
import SkillBar from './SkillBar'

const About = ({ src }) => {
    return (
        <>
            <img className='line' src={src} />
            <section id='about'>
                <img src={about} />
                <div className="container">
                    <h1>About Me </h1>
                    <p>Hi, I'm Maya, a Front-End Developer skilled in HTML5, CSS3, JavaScript, and React. I specialize in creating responsive and user-friendly web applications. With a passion for coding and problem-solving, I'm always eager to learn and contribute to innovative projects.</p>
                    <div className="skills-container">
                        <SkillBar skill="HTML5" level={95} />
                        <SkillBar skill="CSS3" level={85} />
                        <SkillBar skill="JavaScript" level={80} />
                        <SkillBar skill="React" level={90} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
