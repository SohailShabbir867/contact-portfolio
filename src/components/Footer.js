import React from "react";
import "../css/Footer.css"; // Make sure to create this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-about">
          <h2 className="footer-heading">About</h2>
          <p className="footer-description">I am intreased working with AI Tecnologies and Tools</p>
          <div className="footer-divider"></div>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <h3 className="footer-subheading">Links</h3>
          <ul className="links-list">
            <li className="link-item">
              <a href="#navbar" className="footer-link">
                <span className="link-arrow">→</span> Home
              </a>
            </li>
            <li className="link-item">
              <a href="#about" className="footer-link">
                <span className="link-arrow">→</span> About
              </a>
            </li>
            <li className="link-item">
              <a href="#skills" className="footer-link">
                <span className="link-arrow">→</span> Skills
              </a>
            </li>
            <li className="link-item">
              <a href="#projects" className="footer-link">
                <span className="link-arrow">→</span> Projects
              </a>
            </li>
            <li className="link-item">
              <a href="#contact" className="footer-link">
                <span className="link-arrow">→</span> Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright Section */}
        <div className="footer-copyright">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;