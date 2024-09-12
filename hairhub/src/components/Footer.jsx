import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-column">
        <h2>Hairhub</h2>
        <p>Connecting you with high-quality hair care services</p>
      </div>

      <div className="divider"></div>

      <div className="footer-column">
        <h2>Legal</h2>
        <ul>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>

      <div className="divider-vertical"></div>

      <div className="footer-column">
        <h2>Follow us</h2>
        <ul>
          <li> <a href="#"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
          <li><a href="#"><FontAwesomeIcon icon={faTwitter}/> Twitter</a></li>
          <li><a href="#"><FontAwesomeIcon icon={faFacebook}/> Facebook</a></li>
        </ul>
      </div>

      <div className="divider-vertical"></div>

      <div className="footer-column">
        <h2>Quick links</h2>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>

      <div className="divider"></div>

      <div className="footer-column">
        <h2>For Your Business</h2>
        <ul>
          <li><a href="#">Business Resources</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
