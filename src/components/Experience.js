import React, { useState } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import "../styles/Experience.css"; // Make sure to import the CSS

const Experience = () => {
  const [activeTab, setActiveTab] = useState("work");

  return (
    <div className="experience-container">
      <h2 className="heading">Experiences</h2>
      <p className="subheading">My journey</p>
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "work" ? "active" : ""}`}
          onClick={() => setActiveTab("work")}
        >
          <FaBriefcase /> <span>Work</span>
        </button>
        <button
          className={`tab-button ${activeTab === "education" ? "active" : ""}`}
          onClick={() => setActiveTab("education")}
        >
          <FaGraduationCap /> <span>Education</span>
        </button>
      </div>

      {activeTab === "work" ? (
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content left">
              <h3 className="title">Full Stack Developer</h3>
              <p className="company">Walmart, USA</p>
              <p className="duration">Aug 2023 - Present</p>
              {/* <p className="description">Developing and managing key software projects.</p> */}
            </div>
            <div className="timeline-line"></div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content right">
              <h3 className="title">Full Stack Developer</h3>
              <p className="company">Magna Infotech, India</p>
              <p className="duration">May 2020 - July 2022</p>
              {/* <p className="description">Building responsive and dynamic web applications.</p> */}
            </div>
            <div className="timeline-line"></div>
          </div>
          
        </div>
      ) : (
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content left">
              <h3 className="title">Master of Science in Computer Science</h3>
              <p className="company">University of Houston, USA</p>
              <p className="duration">Aug 2022 - May 2024</p>
              {/* <p className="description">Focus on software engineering and computer applications.</p> */}
            </div>
            <div className="timeline-line"></div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content right">
              <h3 className="title">Bachelor of Technology in Information Technology</h3>
              <p className="company">Prasad V. Potluri Siddhartha Institute of Technology, India</p>
              <p className="duration">July 2018 - June 2022</p>
              {/* <p className="description">Focus on software engineering and computer applications.</p> */}
            </div>
            <div className="timeline-line"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
