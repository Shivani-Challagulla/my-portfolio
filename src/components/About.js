import React from 'react';
import '../styles/About.css'; // Ensure correct import
import shivaniPic from '../assets/shivani-picture.jpg';

const About = () => {
  return (
    <div className="about-container">
      <h2>Shivani Challagulla</h2>
      <img src={shivaniPic} alt="Shivani" className="profile-image" />
      <p>
        I am a Full Stack Software Developer specializing in Java, Spring Boot, and Microservices. 
        I design and develop scalable backend architectures, API-driven applications, and cloud-based solutions 
        using AWS, Kafka, Docker, and PostgreSQL. Passionate about problem-solving, distributed systems, 
        and writing clean, efficient code.
      </p>
    </div>
  );
};

export default About;