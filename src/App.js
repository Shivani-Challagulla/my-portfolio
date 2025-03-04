import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Experience from './components/Experience';
import './styles/App.css';

function App() {
  return (
    <div>
      <Navbar />

      <section id="about" className="section">
        <About />
      </section>
      <section id="skills" className="section">
        <Skills />
      </section>
      <section id="experience" className="section">
        <Experience />
      </section>
      <section id="projects" className="section">
        <Projects />
      </section>
      <section id="contact" className="section">
        <Contact />
      </section>
    </div>
  );
}

export default App;
