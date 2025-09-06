import React from "react";
import "../css/Hobbies.css";
import { FaTools, FaLinux } from "react-icons/fa";

const Hobbies = () => {
  return (
    <section className="hobbies-section" id="hobbies">
      <h2 className="hobbies-title">My Hobbies</h2>
      <div className="hobbies-container">

        {/* Hobby 1 */}
        <div className="hobby-card">
          <FaTools className="hobby-icon" />
          <div>
            <h3 className="hobby-heading">Repairing Electronics</h3>
            <p className="hobby-info">
              I love repairing <strong>electronic devices and circuits</strong>, 
              exploring how hardware works, and fixing gadgets in my free time.
            </p>
          </div>
        </div>

        {/* Hobby 2 */}
        <div className="hobby-card">
          <FaLinux className="hobby-icon" />
          <div>
            <h3 className="hobby-heading">Exploring Operating Systems</h3>
            <p className="hobby-info">
              I enjoy exploring OS like <strong>Tails</strong>, <strong>Parrot</strong>, 
              <strong>Kali Linux</strong> and learning about Linux tools for 
              <strong> ethical hacking</strong> and cybersecurity.<br/><strong>For Future Goal</strong>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hobbies;
