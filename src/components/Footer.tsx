import React from 'react';
import { Link } from 'react-router-dom';
import {Mail, MapPin, Phone } from 'lucide-react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.div 
          className="footer-content"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            className="footer-section"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            <h3>Services</h3>
            <ul className="footer-links">
              <li><Link to="/services/3d-modeling">3D Modeling</Link></li>
              <li><Link to="/services/2d-shop-drawings">2D Shop Drawings</Link></li>
              <li><Link to="/services/anchor-bolt-drawings">Anchor Bolt Drawings</Link></li>
              <li><Link to="/services/material-summary">Material Summary</Link></li>
            </ul>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}
          >
            <h3>Contact Info</h3>
            <ul className="footer-links">
              <li>
                <Phone size={16} style={{ marginRight: '8px', display: 'inline' }} />
                +91 755 824 5864
              </li>
              <li>
                <Mail size={16} style={{ marginRight: '8px', display: 'inline' }} />
                info@hirise.com
              </li>
              <li>
                <MapPin size={16} style={{ marginRight: '8px', display: 'inline' }} />
                1212 Pakhal ROAD, NAshik
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 3 }}
          >
            <h3>Follow Us</h3>
            <div className="social-links">
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
            </div>
          </motion.div>
        </motion.div> 

        <motion.div 
          className="copyright"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 3.5}}
        >
          <p>&copy; 2025 HIRISE STEEL STRUCTURE DETAILING. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;