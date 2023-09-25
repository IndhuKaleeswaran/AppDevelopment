import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { useNavigate, Link } from 'react-router-dom'


import '../assets/css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p className='about'>
            <br/>
               Welcome to Enlighten Within, your companion on the journey to inner peace and physical well-being through yoga. We believe that yoga is not just a physical exercise but a holistic path to a healthier, happier life. Our dedicated team of experienced yogis, instructors, and wellness enthusiasts is committed to guiding you on this transformative voyage.
               <br/><br/>Join us on this enlightening journey, and together, let's discover the harmony, strength, and wisdom that lie within.
               <br/><br/><br/></p>
              <p className='tq'> Thank You.
            </p>
          </div>
          <div className="footer-section">
          <h4 className='foot-head'>Enlighten Within</h4>
            <ul className='footer-center'>
              <li><Link to='/Terms' >Terms & Conditions</Link></li>
              <br/>
              <li><Link to='/PrivacyPolicy'>Privacy Policy</Link></li>
              <br/>
              <li><Link to='/Faq'>FAQs</Link></li>
              </ul>
            <div className="social-media-icons">
            <p>Reach out to us on:</p><br/>
                <a href="https://www.instagram.com" className='sm-icon1'>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://twitter.com" className='sm-icon1'>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://www.facebook.com" className='sm-icon1'>
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </div>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <br/>
            <p>Contact: 9876543210</p>
            <br/>
            <p>Email: enlightenwithin@gmail.com</p>
            <br/>
            <p>Website: enlightenwithin.in</p>
            <br/>
            <p>Address:</p>
            <p className='add'>No.123 Yoga street,</p>
            <p className='add'>Race course,</p>
            <p className='add'>Coimbatore-641018</p>
            <br/>
            
            <br/>
            </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Enlighten Within. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
