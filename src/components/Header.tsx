import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Tina Photo Solutions</h1>
        </div>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/gallery" className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}>Gallery</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
