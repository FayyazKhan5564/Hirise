import React, { useState } from 'react';
import TraceLogo from '../assets/images/HIRISE_LOGO_01.svg?react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
    >
      <div className="container header-content">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link to="/" className="logo">
            <TraceLogo width={200} height={100} />
            <span className="company-name">HIRISE STEEL <br />DETAILING SOLUTIONS</span>
          </Link>
        </motion.div>

        <motion.button 
          className="mobile-menu-button"
          onClick={toggleMenu}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        <AnimatePresence>
          <motion.nav 
            className={`nav-container ${isMenuOpen ? 'active' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.ul 
              className="nav-links"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
              <li className="nav-item">
                <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
                <div className="dropdown">
                  <ul className="dropdown-links">
                    <li><Link to="/services/3d-modeling" onClick={() => setIsMenuOpen(false)}>3D Modeling</Link></li>
                    <li><Link to="/services/anchor-bolt-drawings" onClick={() => setIsMenuOpen(false)}>Anchor Bolt Drawings</Link></li>
                    <li><Link to="/services/advance-bill-of-material" onClick={() => setIsMenuOpen(false)}>Advance Bill of Material</Link></li>
                    <li><Link to="/services/2d-erection-drawings" onClick={() => setIsMenuOpen(false)}>2D Erection Drawings</Link></li>
                    <li><Link to="/services/2d-shop-drawings" onClick={() => setIsMenuOpen(false)}>2D Shop Drawings</Link></li>
                    <li><Link to="/services/fabtrol" onClick={() => setIsMenuOpen(false)}>Fabtrol</Link></li>
                    <li><Link to="/services/cnc-files" onClick={() => setIsMenuOpen(false)}>CNC, DXF, DSTV, KISS Files</Link></li>
                    <li><Link to="/services/material-summary" onClick={() => setIsMenuOpen(false)}>Material Summary</Link></li>
                    <li><Link to="/services/field-bolt-summary" onClick={() => setIsMenuOpen(false)}>Field Bolt Summary</Link></li>
                  </ul>
                </div>
              </li>
              <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            </motion.ul>

            <motion.div 
              className="social-links-mobile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} />
              </a>
              {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={20} />
              </a> */}
            </motion.div>
          </motion.nav>
        </AnimatePresence>

        <motion.div 
          className="social-links-desktop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} />
          </a>
          {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={20} />
          </a> */}
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;