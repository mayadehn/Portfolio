import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../Components/NavBar/NavBar'
import moon from './../../assets/icons/moon.png'
import sun from './../../assets/icons/sun.png'
import line from './../../assets/images/line.png'
import darkline from './../../assets/images/darkLine.png'
import frame from './../../assets/images/Frame.png'
import darkframe from './../../assets/images/darkFrame.png'
import Home from '../Home/Home'
import About from '../About/About'
import Education from '../Education/Education'
import Ask from '../Ask/Ask'
import Contact from '../Contact/Contact'
import Footer from '../../components/Footer/Footer'
import Projects from '../Projects/Projects'

const Root = () => {

    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    })

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
    }

    useEffect(() => {
        document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
    }, [isDarkMode])

    const navItems = [
        {
            href: "home",
            content: "Home"
        },
        {
            href: "about",
            content: "About me"
        },
        {
            href: "education",
            content: "Education"
        },
        {
            href: "projects",
            content: "Projects"
        },
        {
            href: "contact",
            content: "Contact"
        },
    ]

    return (
        <div>

            <NavBar
                name="Maya"
                navItems={navItems}
                icon={isDarkMode ? sun : moon}
                toggleTheme={toggleTheme} />

            <Home />

            <About src={isDarkMode ? darkline : line} />

            <Education frame={isDarkMode ? darkframe : frame} />

            <Ask />

            <Projects />

            <Contact />

            <Footer />
            <Outlet />
        </div>
    )
}

export default Root
