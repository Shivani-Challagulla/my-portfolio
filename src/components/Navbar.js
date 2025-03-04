import React from 'react';
import { FaUser, FaProjectDiagram, FaEnvelope, FaLaptopCode } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbarHeight = document.querySelector('.navbar').offsetHeight; // Adjust for fixed navbar
    if (section) {
      window.scrollTo({
        top: section.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-links">
        
        <button onClick={() => scrollToSection('about')} className="nav-button">
          <FaUser size={16} /> <span>About</span>
        </button>
        <button onClick={() => scrollToSection('skills')} className="nav-button">
          <FaLaptopCode size={20} /> <span>Skills</span>
        </button>
        <button onClick={() => scrollToSection('projects')} className="nav-button">
          <FaProjectDiagram size={16} /> <span>Projects</span>
        </button>
        <button onClick={() => scrollToSection('contact')} className="nav-button">
          <FaEnvelope size={16} /> <span>Contact</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
