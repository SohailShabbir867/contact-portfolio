import React, { useEffect } from "react";
import "../css/Skills.css";

// Import all skill images
import javascriptIcon from "../assests/javascript.png";
import nodejsIcon from "../assests/node.png";
import reactIcon from "../assests/react.png";
import htmlIcon from "../assests/html.png";
import cssIcon from "../assests/css.png";
import bootstrapIcon from "../assests/bootstrap.png";
import cIcon from "../assests/c.png";
import cppIcon from "../assests/c++.png";
import pythonIcon from "../assests/python.png";
import photoshopIcon from "../assests/photoshop.png";
import lightroomIcon from "../assests/lightroom.png";
import illustratorIcon from "../assests/illustrator.png";
import mongodbIcon from "../assests/mongodb.png";
import linuxIcon from "../assests/linux.png";
import capcutIcon from "../assests/capcut.png";
import figmaIcon from "../assests/figma.png";

const Skills = () => {
  const skills = [
    { name: "JavaScript", img: javascriptIcon },
    { name: "Node.js", img: nodejsIcon },
    { name: "React", img: reactIcon },
    { name: "HTML5", img: htmlIcon },
    { name: "CSS3", img: cssIcon },
    { name: "Bootstrap", img: bootstrapIcon },
    { name: "C", img: cIcon },
    { name: "C++", img: cppIcon },
    { name: "Python", img: pythonIcon },
    { name: "Photoshop", img: photoshopIcon },
    { name: "Lightroom", img: lightroomIcon },
    { name: "Illustrator", img: illustratorIcon },
    { name: "MongoDB", img: mongodbIcon },
    { name: "Linux", img: linuxIcon },
    { name: "CapCut", img: capcutIcon },
    { name: "Figma", img: figmaIcon }
  ];

  useEffect(() => {
    const cards = document.querySelectorAll(".skill-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title"> <span className="highlight">My Skills</span></h2>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card" title={skill.name}>
            <div className="skill-content">
              <img 
                src={skill.img} 
                alt={skill.name} 
                className="skill-icon"
                loading="lazy"
              />
              <span className="skill-name">{skill.name}</span>
              <div><span className="skill-description">{skill.description}</span></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;