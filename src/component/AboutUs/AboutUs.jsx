import React from 'react'
import './AboutUs.css'

const AboutUs = ({ clientWidth }) => {
    return (
        <div className="AboutUs">
            <div className="AboutUs-content">
                <div className="top-AboutUs">
                    <div>Get To Know Us</div>
                    <div>Reimagining Learning for the Modern Workforce</div>
                </div>
            </div>
            <div className="AboutUs-content">
                <div className="bottom-AboutUs">
                    <div className="left-AboutUs">
                        <p>
                        At The Wise Blend, we design next-gen training solutions that go beyond traditional &nbsp; e-learning. From interactive modules to immersive VR simulations, we blend creativity, technology, and strategy to craft impactful experiences tailored to your business goals. Whether you’re onboarding teams, building leadership, or training for safety and compliance—we create scalable, high-performance programs that transform the way your workforce learns, grows, and excels.
                            {/* At The Wise Blend, we craft custom {
                                clientWidth < 408 ? <br /> : ""
                            } E-learning solutions that
                            transform the way businesses
                            train, engage, and inspire their teams. Our approach
                            goes beyond traditional learning 
                            blending creativity, technology, and strategy to deliver dynamic,
                            scalable training programs
                            tailored to your organization's unique needs. Whether you're
                            looking to upskill your workforce
                            or drive better engagement, we're here to make learning
                            impactful, engaging, and
                            results-driven. */}
                        </p>
                    </div>
                    <div className="right-AboutUs" style={{
                        marginBottom: clientWidth < 500 ? "20px" : undefined
                    }}>
                        <div className="right-AboutUs">
                            <iframe src="https://www.youtube.com/embed/2tg2xWtCizQ?si=xo8HepSmj60txn9X&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutUs
