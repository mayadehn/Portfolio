import React from 'react'
import './Footer.css'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <p>@ 2025. All Rights Reserved</p>
            <p>Develpoment by Maya</p>
            <div className="icons">
                <a href="https://www.facebook.com/share/19rVV8avU9/?mibextid=LQQJ4d">
                    <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/maya.abodhn?igsh=MWgwYjZ2Z2pvN3AwZA%3D%3D&utm_source=qr">
                    <BsInstagram />
                </a>
                <a href="https://www.linkedin.com/in/maya-abo-dehn-30a78b332">
                    <FaLinkedinIn />
                </a>
            </div>
        </footer>

    )
}

export default Footer
