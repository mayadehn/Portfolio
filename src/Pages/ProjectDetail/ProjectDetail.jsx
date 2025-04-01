import React from 'react'
import './ProjectDetail.css'
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer'
import icon from "./../../assets/icons/icon.png"
import dashboard from "./../../assets/images/1.png"
import edupress from './../../assets/images/3.png'
import managePosts from './../../assets/images/4.png'
import full from './../../assets/icons/full.png'
import demo from './../../assets/icons/demo.png'

const ProjectDetail = () => {

    const { id } = useParams();
    console.log('ProjectDetail ID:', id);

    const projectDetails = {
        1: {
            title: "DashBoard",
            description: "A full-featured dashboard with user authentication (Login, Signup, Logout) and CRUD API integration for managing data efficiently. Built with React.js,",
            image: dashboard,
            basicLanguage: "Html5 , Css , Javascript",
            libraries: "React.js",
            repo: "https://github.com/mayadehn/DashBoard",
            demo: "https://mayadehn.github.io/DashBoard/"
        },
        2: {
            title: "Manage Posts",
            description: "A simple website JavaScript CRUD API allows users to create, read, update, and delete data through a web interface",
            image: managePosts,
            basicLanguage: "Html-Css-Vanilla javascript",
            repo: "https://github.com/mayadehn/JS-CRUD-API",
            demo: "https://mayadehn.github.io/JS-CRUD-API/"
        },
        3: {
            title: "EduPress",
            description: "The HTML and CSS design for an educational website focuses on providing a user-friendly interface for students.",
            image: edupress,
            basicLanguage: "Html5 , Css ",
            libraries: "",
            repo: "https://github.com/mayadehn/Project-Lv1",
            demo: "https://mayadehn.github.io/Project-Lv1/"
        }
    };

    const project = projectDetails[id];

    return (
        <>

            <div className='project-details'>
                <div className='image-container'>
                    <img src={project.image} className='project-image' />
                    <div className="icon-overlay">
                        <a href={project.demo}><img src={demo} /></a>
                    </div>
                </div>
                <div className="content">
                    <div className='head'>
                        <h1>{project.title}</h1>
                        <a href={project.demo}><img src={icon} /></a>
                    </div>
                    <p className='description'>{project.description}</p>
                    <p className='basicLanguage'>Basic Language : {project.basicLanguage}</p>
                    <p className='libraries'>Libraries : {project.libraries}</p>
                    <button>
                        <a href={project.repo}>
                            Github Repo
                        </a>
                    </button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProjectDetail
