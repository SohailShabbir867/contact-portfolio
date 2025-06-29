import React, { useEffect } from "react";
import "../css/Projects.css";

const projects = [
  {
    title: "Portfolio Website",
    description: (
      <ul>
        <li>Built with React.js and Tailwind CSS</li>
        <li>Showcases my skills, resume, and contact information</li>
        <li>Fully responsive and mobile-friendly design</li>
        <li>Provides smooth user experience across all devices</li>
      </ul>
    ),
    image: require("../assests/imagep.jpg"),
  },
  {
    title: "E-commerce UI",
    description: (
      <ul>
        <li>Designed with HTML, CSS, and Bootstrap</li>
        <li>Features a responsive layout with product cards</li>
        <li>Includes product categories and an interactive shopping cart</li>
        <li>Mobile-compatible, optimized for various devices</li>
      </ul>
    ),
    image: require("../assests/image2.png"),

  
  },
  {
    title: "Weather App",
    description: (
      <ul>
        <li>Built using JavaScript and OpenWeatherMap API</li>
        <li>Displays real-time weather data for any location</li>
        <li>Shows current weather conditions and forecasts</li>
        <li>Simple and user-friendly interface</li>
      </ul>
    ),
    image: require("../assests/image3.png"),

  },
];

const Projects = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver(
      (entries, observerRef) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observerRef.unobserve(entry.target); // Trigger only once
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect(); // Cleanup
  }, []);

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              loading="lazy"
            />
            <div className="project-content">
              <h3 className="project-name">{project.title}</h3>
              <div className="project-description">{project.description}</div>
              <div className="project-links">{project.button}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
