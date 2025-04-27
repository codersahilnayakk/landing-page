import React from 'react'
import './Header.css'
import Marquee from '../Marquee/Marquee'

const Header = ({darkMode,clientWidth}) => {
    return (
        <>
            <div className="hero-section">
                <div className="hero-content">
                    <div className="top-line">
                    WE MAKE IT IMMERSIVE
                    </div>
                    <div className="box">
                        <div className='hero-heading'>
                        Virtual Reality  Solutions for Forward-Thinking Teams.
                        </div>
                        <div className='simple-line'>
                            <div>
                            Step into the future of learning with VR-powered training experiences. Engage your teams like never before—boost retention, sharpen real-world skills, and create impact that lasts.
                            </div>
                           <a href="#contact"><button>Speak to an Expert</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='marquee1'>
                <Marquee darkMode={darkMode}/>
            </div>
        </>
    )
}

export default Header
