import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import '../styles/Contact.css'; // Make sure you have this file for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact me on</h2>
      <div className="icons-container">
        <a href="https://x.com/itsshivanich" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={100} className="contact-icon twitter" />
        </a>
        <a href="https://www.linkedin.com/in/shivani-challagulla/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={100} className="contact-icon linkedin" />
        </a>
        <a href="https://github.com/Shivani-Challagulla" target="_blank" rel="noopener noreferrer">
          <FaGithub size={100} className="contact-icon github" />
        </a>
        <a href="mailto:shivanichallagulla6@gmail.com">
          <FaEnvelope size={100} className="contact-icon email" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
