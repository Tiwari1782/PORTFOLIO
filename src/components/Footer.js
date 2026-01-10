import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {currentYear} Tiwari.  All rights reserved.</p>
        <p>Built with <FontAwesomeIcon icon={faHeart} className="heart" /> using React & CSS</p>
      </div>
    </footer>
  );
}

export default Footer;