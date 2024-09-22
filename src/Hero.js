import React from "react";
import "./HeroStyles.css";
import Image from './Wallpapers.jpg';

function Hero() {
    return (
        <div className='hero'>
            <img alt="HeroImage" src={Image} />
            <div className="hero-text">
                <h1>We create award<br/>winning websites</h1>
                <p className="formatted-text">{`Based in San Francisco, we're a digital 
products design & development studio 
that's passionate about creating high 
applicability of digital experiences`}</p>
                <button 
                    className="btn btn-dark" 
                    style={{ backgroundColor: 'transparent', border: '0px solid white' }} 
                    type="submit"
                >
                    Explore 7 <i className="bi bi-arrow-up-right"></i>
                </button>
            </div>
        </div>
    );
}

export default Hero;
