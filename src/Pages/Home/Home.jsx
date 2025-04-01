import './Home.css'
import girl from "./../../assets/images/girl.png"
import lines from './../../assets/images/lines.png'

const Home = () => {
    return (
        <section id='home'>
            <div className='content'>
                <h1>HEY! <span>I’m Maya, Frontend Developer</span></h1>
                <p>Agency-quality Webflow websites with the personal touch of a freelancer.</p>
                <a href="/CV.pdf" download="CV.pdf">
                    <button>Download CV</button>
                </a>
            </div>
            <img className='lines' src={lines} />
            <div  >
                <img src={girl} />
            </div>
        </section>
    )
}

export default Home
