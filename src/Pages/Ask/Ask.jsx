import React from 'react'
import './Ask.css'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-scroll';

const Ask = () => {
    return (
        <section id='ask'>
            <div className="container">
                <div className="content">
                    <h1>Try me out, risk free!</h1>
                    <p>If you’re not happy with the design after the first draft, I’ll refund your deposit, no questions asked</p>
                </div>
                <Link
                    to='contact'
                    smooth={true}
                    duration={500}
                ><button>Contact   <FaArrowRight /></button>
                </Link>
            </div>
        </section>
    )
}

export default Ask
