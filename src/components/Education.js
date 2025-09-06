import React from "react";
import Hobbies from "../components/Hobbies";
import "../css/Education.css";
import { FaSchool, FaUniversity, FaBookOpen, FaLaptopCode } from "react-icons/fa";

const Education = () => {
  return (
    <section className="education-section" id="Education">
      <h2 className="education-title">My Education</h2>
      <div className="education-container">

        {/* School */}
        <div className="education-card">
          <FaSchool className="education-icon" />
          <div>
            <h3 className="edu-heading">High School</h3>
            <p className="edu-info">
              Govt. High School, Jajjah Abasina Khanpur RYK <br />
         Completed Matriculation in Science subjects, building a strong academic foundation (Science) with **96%** – 2019-2021<br></br>

            </p>
          </div>
        </div>

        {/* College */}
        <div className="education-card">
          <FaBookOpen className="education-icon" />
          <div>
            <h3 className="edu-heading">Intermediate</h3>
            <p className="edu-info">
              Punjab Group of College Zahir Peer <br />
               Completed Intermediate with Mathematics, Physics, and Computer Science.<br/>
              Intermediate (ICS) – 2022-2024
            </p>
          </div>
        </div>

        {/* University */}
        <div className="education-card">
          <FaUniversity className="education-icon" />
          <div>
            <h3 className="edu-heading">University</h3>
            <p className="edu-info">
              The Islamia University of Bahawalpur <br />
              BS Software Engineering (2024 – Present)               Expected Graduation: 2028 <br />Focus on Web Development, Databases, and Cybersecurity Engineering.<br></br>

            </p>
          </div>
        </div>

        {/* Extra Courses */}
        <div className="education-card">
          <FaLaptopCode className="education-icon" />
          <div>
            <h3 className="edu-heading">Courses & Skills</h3>
            <p className="edu-info">
              Completed certifications in Web Development, React.js, and Graphic Designing.  
              Focus on **Frontend + Backend Development** to become a Full-Stack Developer.
            </p>
          </div>
        </div>

      </div>
      <Hobbies />
    </section>
  );
};

export default Education;
