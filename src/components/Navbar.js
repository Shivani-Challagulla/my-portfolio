import React, { useState, useEffect } from 'react';
import { FaUser, FaProjectDiagram, FaEnvelope, FaLaptopCode, FaBriefcase } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    if (section) {
      window.scrollTo({
        top: section.offsetTop - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-links">
        <button onClick={() => scrollToSection('about')} className="nav-button">
          <FaUser size={15} /> <span>About</span>
        </button>
        <button onClick={() => scrollToSection('skills')} className="nav-button">
          <FaLaptopCode size={18} /> <span>Skills</span>
        </button>
        <button onClick={() => scrollToSection('experience')} className="nav-button">
          <FaBriefcase size={16} /> <span>Experience</span>
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