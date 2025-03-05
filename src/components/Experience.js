import React, { useState } from "react";
import "../styles/Experience.css";
import { FaBriefcase, FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("work");

  return (
    <div>
      {/* 🟠 Toggle Buttons */}
      <div className="qualification__tabs">
        <button 
          className={`qualification__button ${activeTab === "work" ? "active" : ""}`}
          onClick={() => setActiveTab("work")}
        >
          <FaBriefcase className="qualification__icon" /> Experience
        </button>
        <button 
          className={`qualification__button ${activeTab === "education" ? "active" : ""}`}
          onClick={() => setActiveTab("education")}
        >
          <FaGraduationCap className="qualification__icon" /> Education
        </button>
      </div>

      {/* 🟠 Experience Timeline */}
      {activeTab === "work" && (
        <div className="timeline">
          <div className="container left">
            <div className="content">
              <p><strong>Full Stack Developer</strong></p>
              <p>Walmart, USA</p>
              <p><FaCalendarAlt className="qualification__icon" /> Aug 2023 - Present</p>
            </div>
          </div>

          <div className="container right">
            <div className="content">
              <p><strong>Full Stack Developer</strong></p>
              <p>Magna Infotech, India</p>
              <p><FaCalendarAlt className="qualification__icon" /> May 2020 - July 2022</p>
            </div>
          </div>
        </div>
      )}

      {/* 🟠 Education Timeline */}
      {activeTab === "education" && (
        <div className="timeline">
          <div className="container left">
            <div className="content">
              <p><strong>Master of Science in Computer Science</strong></p>
              <p>University of Houston, USA</p>
              <p><FaCalendarAlt className="qualification__icon" /> Aug 2022 - May 2024</p>
            </div>
          </div>

          <div className="container right">
            <div className="content">
              <p><strong>Bachelor of Technology in Information Technology</strong></p>
              <p>PVP Siddhartha Institute of Technology, India</p>
              <p><FaCalendarAlt className="qualification__icon" /> July 2018 - May 2022</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;