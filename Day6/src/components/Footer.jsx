import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

import '../assets/css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut libero in lectus feugiat suscipit.
            </p>
          </div>
          <div className="footer-section">
            <h3>Classes</h3>
            <ul>
              <li><a href="#">Yoga for Beginners</a></li>
              <li><a href="#">Hatha Yoga</a></li>
              <li><a href="#">Vinyasa Flow</a></li>
              <li><a href="#">Meditation</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <address>
              <p>123 Yoga Street</p>
              <p>Cityville, State 12345</p>

              <p>Email: info@enlightenwithin.com</p>
              <div className="social-media-icons">
                <a href="https://www.instagram.com">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://twitter.com">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://www.facebook.com">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </div>
            </address>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Yoga Training App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
