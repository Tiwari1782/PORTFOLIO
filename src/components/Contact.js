import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Let's Connect</h2>
        <p>
          I'm always interested in hearing about new projects and opportunities. 
          Feel free to reach out if you'd like to collaborate or just say hello!
        </p>
        
        <div className="contact-buttons">
          <a 
            href="mailto:prakashtiwarie06@gmail.com" 
            className="btn btn-primary"
          >
            <FontAwesomeIcon icon={faEnvelope} /> Email Me
          </a>
          
          <a 
            href="https://github.com/Tiwari1782" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
          
          <a 
            href="https://www.linkedin.com/in/prakash-tiwari-8900bb2b2/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
          
          <a 
            href="/resume.pdf" 
            download 
            className="btn btn-outline"
          >
            <FontAwesomeIcon icon={faFileDownload} /> Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;