import React from 'react'
import './Projects.css'
import { MdOutlineArrowOutward } from 'react-icons/md'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import dashboard from "./../../assets/images/1.png"
import reactdesign from './../../assets/images/2.png'
import edupress from './../../assets/images/3.png'
import managePosts from './../../assets/images/4.png'
import flora from './../../assets/images/5.png'
import { Outlet } from 'react-router-dom'

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "DashBoard",
            subtitle: "React js",
            image: dashboard,
        },
        {
            id: 2,
            title: "Manage Posts",
            subtitle: "Html-Css-Vanilla javascript",
            image: managePosts
        },
        {
            id: 3,
            title: "EduPress",
            subtitle: "Html-Css",
            image: edupress,
        },

    ]


    return (
        <section id='projects'>

            <div className="header">
                <div className="title">
                    <p>Portfolio</p>
                    <h1>My Creative Works Latest <span>Projects</span></h1>
                </div>
                <button>
                    <a href="https://github.com/mayadehn">
                        View Github <MdOutlineArrowOutward />
                    </a>
                </button>
            </div>

            <div className="card-container">
                {
                    projects?.map((project) => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            subtitle={project.subtitle}
                            image={project.image}
                        >
                        </ProjectCard>
                    ))
                }
            </div>
        </section>
    )
}

export default Projects
