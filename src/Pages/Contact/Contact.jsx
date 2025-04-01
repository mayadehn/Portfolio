import React from 'react'
import './Contact.css'
import { FiPhone } from 'react-icons/fi'
import { MdOutlineEmail } from 'react-icons/md'
import { GrLocation } from 'react-icons/gr'

const Contact = () => {
    return (
        <section id='contact'>

            <div className="header">
                <h3>Contact</h3>
                <h1>Let’s Discuss Your <span>Project</span></h1>
            </div>

            <div className="container">
                <div className="contact-container">
                    <div className="contact">
                        <div className="icon"><FiPhone /></div>
                        <div>
                            <p className='label'>Call me</p>
                            <p>+963956620097</p>
                        </div>
                    </div>

                    <div className="contact">
                        <div className="icon"><MdOutlineEmail /></div>
                        <div>
                            <p className='label'>Email me</p>
                            <p>mayaabodehn2004@gmail.com</p>
                        </div>
                    </div>

                    <div className="contact">
                        <div className="icon"><GrLocation /></div>
                        <div>
                            <p className='label'>Address</p>
                            <p>Damascus,syria</p>
                        </div>
                    </div>

                </div>

                <div className="form-container">
                    <form>
                        <div className='inputs'>
                            <input type="text" placeholder='Full name' />
                            <input type="text" placeholder='Your email' />
                        </div>
                        <input type="number" placeholder='Phone number' />
                        <textarea rows="8" placeholder='Message'></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact
