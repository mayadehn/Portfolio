import React from 'react'
import './Education.css'
import rightBg from './../../assets/images/rightBg.png'
import leftBg from './../../assets/images/leftBg.png'
import up from './../../assets/icons/Up.png'
import { Link } from 'react-scroll'

const Education = ({ frame }) => {
    return (
        <div>
            <section id='education'>
                <div className="header">
                    <h3>Education and Experience</h3>
                    <h1>Education & Experience</h1>
                </div>
                <img src={rightBg} className="right-bg" />
                <div className="content">
                    <div className='column'>
                        <img src={frame} />
                        <div>
                            <h2>Education</h2>
                            <p>I am currently pursuing a degree in Information Technology with a specialization in Software Engineering.</p>
                            <h2>Frontend Developer</h2>
                            <p>Passionate about creating responsive and user-friendly interfaces using HTML5, CSS3, JavaScript, and React.</p>
                        </div>
                    </div>

                    <div className='column'>
                        <img src={frame} />
                        <div>
                            <h2>Hobbies and Interests</h2>
                            <p>I enjoy exploring new technologies, working on creative projects, and staying active through fitness and reading.</p>

                            <h2>Soft Skills</h2>
                            <p>Quick learner, detail-oriented, and a collaborative team player with strong problem-solving abilities.</p>
                        </div>
                    </div>
                </div>

                <img src={leftBg} className="left-bg" />

                <Link
                    to='home'
                    smooth={true}
                    duration={500}
                >
                    <button><img src={up} /></button>
                </Link>
            </section>
        </div>
    )
}

export default Education
