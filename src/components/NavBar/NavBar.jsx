import React from 'react'
import './NavBar.css'
import NavItems from '../NavItems/NavItems'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

const NavBar = ({ name, navItems, icon, toggleTheme }) => {

    return (
        <nav>
            <h1>{name}</h1>
            <div className="items">
                <ul>
                    {navItems?.map((item, index) => {
                        return (
                            <li key={index}>
                                <NavItems
                                    href={item.href}
                                    content={item.content}
                                ></NavItems>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <img onClick={toggleTheme}
                className='moon' src={icon} />

            <div className='menu'><HiOutlineMenuAlt3 /></div>
        </nav>
    )
}

export default NavBar
