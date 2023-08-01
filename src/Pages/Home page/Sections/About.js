import React from "react";
import styles from "./about.module.css"

const About = () => {
    return (
        <div className={styles.aboutUs}>
            <div className={styles.aboutUsSections}>
                <h1>About Us:</h1>
                <p>
                    Welcome to <span>IdeaBox</span>, your creative brainstorming
                    platform! We are passionate about empowering individuals and
                    teams to explore their imaginations and turn their ideas
                    into reality. At IdeaBox, we believe that every great
                    innovation starts with a simple idea.
                </p>
            </div>
            <div className={styles.aboutUsSections}>
            <h1>Our Vision:</h1>
                <p>
                    To be the catalyst for creativity and innovation, fostering
                    a community where ideas thrive and dreams take flight.
                </p>
            </div>
            <div className={styles.aboutUsSections}>
                <h1>Who We Are:</h1>
                <p>
                    IdeaBox was born out of the desire to provide a safe and
                    inspiring space for individuals and teams to capture,
                    nurture, and share their ideas. Our team of innovators,
                    thinkers, and dreamers is dedicated to building a platform
                    that encourages collaboration and the free flow of ideas.
                </p>
            </div>
        </div>
    );
};

export default About;
