import React from "react";
import "../css/About.css";

import DeveloperImage from "../assests/my image.png"; // ✅ Ensure image path is correct
const About = () => {
  return (
    <section className="about-section" id="about">
      {/* Decorative blurred circles */}
      <div className="about-accent about-accent-1"></div>
      <div className="about-accent about-accent-2"></div>

      <div className="about-container">
        {/* Image Area */}
        <div className="about-image">
          <div className="image-frame">
            <img
              src={DeveloperImage}
              alt="Sohail - Frontend Developer"
              loading="lazy"
            />
            <div className="image-glow"></div>
          </div>
        </div>

        {/* Text Area */}
        <div className="about-text">
          <div className="title-wrapper">
            <h1 className="about-title">
              <span className="gradient-text">FRONTEND</span>
              <span className="gradient-text">DEVELOPER</span>
            </h1>
          </div>
          <h2 className="about-heading">
            I am <span className="highlight">Sohail Shabbir</span> 
          </h2>
          <p className="about-description">
            A passionate <span className="highlight">web developer</span> specializing in creating beautiful, responsive, and user-friendly websites.
          </p>
          <div className="button-wrapper">
            <a
              href="https://drive.google.com/open?id=1oSq66xGCvFkGilD825Z1ELruLBSweh2x&usp=drive_fs"
              className="about-button"
              aria-label="Download CV"
            >
              DOWNLOAD CV
              <span className="button-icon">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
