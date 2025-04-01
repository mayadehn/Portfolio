import React from 'react'
import { Link } from 'react-scroll'

const NavItems = ({ href, content }) => {
    return (
        <Link
            to={href}
            smooth={true}
            duration={500}
            spy={true}
            activeClass='active' >
            {content}
        </Link>
    )
}

export default NavItems
