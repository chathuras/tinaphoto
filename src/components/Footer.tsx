import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Tina Photo Solutions</h3>
            <p>Capturing life's beautiful moments with passion and creativity.</p>
            <div className="social-links">
              <a href="#" className="social-link">📸 Instagram</a>
              <a href="#" className="social-link">📘 Facebook</a>
              {/* <a href="#" className="social-link">🐦 Twitter</a> */}
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><Link to="/tinaphoto/services">Portrait Photography</Link></li>
              <li><Link to="/tinaphoto/services">Wedding Photography</Link></li>
              <li><Link to="/tinaphoto/services">Landscape Photography</Link></li>
              <li><Link to="/tinaphoto/services">Event Photography</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/tinaphoto/about">About</Link></li>
              <li><Link to="/tinaphoto/gallery">Gallery</Link></li>
              <li><Link to="/tinaphoto/contact">Contact</Link></li>
              <li><Link to="/tinaphoto/services">Pricing</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📧 hello@tinaphotosolutions.com</p>
              <p>🟢📞 WhatsApp +81-90-1234-5678</p>
              <p>📍 Tokyo, Japan</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {currentYear} Tina Photo Solutions. All rights reserved.</p>
          </div>
          <div className="footer-bottom-links">
            {/* <a href="#privacy">Privacy Policy</a> */}
            {/* <a href="#terms">Terms of Service</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
