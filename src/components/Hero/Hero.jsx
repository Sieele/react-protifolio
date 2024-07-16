import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-container">
        <div className="hero-content">
            <h2>Sieele Uchiha</h2>
            <p>Junior Frontend Developer</p>
        </div>

        <div className="hero-img">
            <div>
                <div className="tech-icon">
                    <img src='./assets/images/physics.png' alt='html'/>
                </div>
                <img src='./assets/images/wolf1.jpg' alt='hero'/>
            </div>          

            <div>
                <div className="tech-icon">
                    <img src='./assets/images/js.png' alt='js'/>
                </div>  
                <div className="tech-icon">
                    <img src='./assets/images/html.png' alt='html'/>
                </div>  
                <div className="tech-icon">
                    <img src='./assets/images/social.png' alt='css'/>
                </div>
            </div>  
        </div>
    </section>
  )
}

export default Hero