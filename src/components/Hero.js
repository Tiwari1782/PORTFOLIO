import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <h1>Hi, I'm <span>Prakash</span></h1>
        <p className="subtitle">Computer Science Student | Full Stack Developer</p>
        <p className="description">
          I'm passionate about building modern web applications with clean code and great user experiences.  
          I specialize in full-stack development using React, Node. js, and modern web technologies.
        </p>

        <div className="hero-buttons">
          <button 
            className="btn btn-primary"
            onClick={() => scrollToSection('projects')}
          >
            <FontAwesomeIcon icon={faArrowRight} /> View Projects
          </button>
          <button 
            className="btn btn-outline"
            onClick={() => scrollToSection('contact')}
          >
            <FontAwesomeIcon icon={faEnvelope} /> Get In Touch
          </button>
        </div>

        <div className="scroll-indicator">
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
    </section>
  );
}

export default Hero;