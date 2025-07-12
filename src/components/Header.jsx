import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Header.css';

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Projects', to: 'projects' },
  { label: 'Skills', to: 'skills' },
  { label: 'Contact', to: 'contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <motion.header
      className="header"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="header__container">
        <div className="header__logo" onClick={() => handleNavClick('home')}>
          <span>Areeba Tanveer</span>
        </div>
        <nav className={`header__nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={`#${link.to}`}
              onClick={e => {
                e.preventDefault();
                handleNavClick(link.to);
              }}
              className="header__nav-link"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="header__menu-btn"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {/* Mobile overlay nav */}
      <div className={`header__overlay ${menuOpen ? 'show' : ''}`} onClick={() => setMenuOpen(false)}></div>
    </motion.header>
  );
};

export default Header; 