import React from 'react'

const SkillBar = ({ skill, level }) => {
    return (
        <div className='skill-bar'>
            <div className="skill-label">
                <span>{skill}</span>
                <span>{level}%</span>
            </div>
            <div className="progress-bar">
                <div
                    className="progress"
                    style={{ width: `${level}%` }}
                ></div>
            </div>
        </div>
    )
}

export default SkillBar
