import React from 'react'
import './ProjectCard.css'
import { Link, useNavigate } from 'react-router-dom'
import icon from "./../../assets/icons/icon.png"

const ProjectCard = ({ id, title, subtitle, image }) => {

    const navigate = useNavigate();

    const cardClick = () => {
        console.log(' project:', id);
        navigate(`/project/${id}`);
    };

    return (
        <div className="card" onClick={cardClick}>
            <img src={image} alt={title} className='card-image' />
            <div className="card-content">
                <div className="title">
                    <h4>{title}</h4>
                    <p>{subtitle}</p>
                </div>
                <img src={icon} />
            </div>
        </div>
    )
}

export default ProjectCard
