import React from "react";
import "./Process.css";

const Process = () => {
    // Data for the cards
    const activities = [
        {
            title: "Discover & Strategize",
            image: "assets/Discover-Strategize.jpg",
            description:
                "We begin by understanding your industry, learner environment, and core objectives to shape a high-impact VR roadmap.",
        },
        {
            title: "Design & Prototype",
            image: "assets/Design-Craft.png",
            description:
                "We craft detailed storyboards, build 3D environments, and prototype immersive interactions to ensure each scene feels authentic and purposeful.",
        },
        {
            title: "Develop & Launch",
            image: "assets/Develop-Launch.jpg",
            description:
                "Our team codes, animates, and optimizes the full VR experience for headsets and devices—followed by smooth deployment and support.",
        },
    ];

    return (
        <div id="card-area">
            <div className="our-partner-content">
                <div className="top">
                    <div>How We Work</div>
                    <div>Your VR Training, From Idea to Impact
                    </div>
                    <div>
                    At The Wise Blend, our VR training process is built around one goal: making learning feel real. From discovery to deployment, we design hyper-relevant, interactive experiences that engage users like never before—and deliver lasting results.
                    </div>
                </div>
            </div>
            <div className="wrapper-card">
                <div className="box-area">
                    {activities.map((activity, index) => (
                        <div className="box-card" key={index}>
                            <img loading="lazy" alt={activity.title} src={activity.image} />
                            <h3>{activity.title}</h3>
                            <div className="overlay">
                                <p>{activity.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Process;
