import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { FiMail, FiPhone } from 'react-icons/fi'
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa'
import './Footer.css'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Achievements', to: '/achievements' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Brand */}
        <div className="footer-col brand-col">
          <Logo light />
          <p className="footer-desc">
            Professional e-commerce solutions to help you grow on Amazon, eBay, Walmart and beyond. 
            From account creation to full management — we've got you covered.
          </p>
          <div className="social-icons">
            <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href="#" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube /></a>
            <a href="#" target="_blank" rel="noreferrer" aria-label="TikTok"><FaTiktok /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            {quickLinks.map(l => (
              <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h3 className="footer-heading">Services</h3>
          <ul className="footer-links">
            <li><Link to="/services">LTD & LLC Formation</Link></li>
            <li><Link to="/services">Account Creation</Link></li>
            <li><Link to="/services">Account Management</Link></li>
            <li><Link to="/services">Account Reinstatement</Link></li>
            <li><Link to="/services">Web Development</Link></li>
            <li><Link to="/services">Digital Marketing</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3 className="footer-heading">Contact Us</h3>
          <ul className="footer-contact">
            <li>
              <FiMail className="fc-icon" />
              <a href="mailto:info@ecommercewithzain.com">info@ecommercewithzain.com</a>
            </li>
            <li>
              <FaWhatsapp className="fc-icon" />
              <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer">+92 300 1234567</a>
            </li>
            <li>
              <FiPhone className="fc-icon" />
              <span>Pakistan 🇵🇰</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2025 E-Commerce with Zain. All Rights Reserved.</p>
          <p>Designed with ❤️ for E-Commerce Excellence</p>
        </div>
      </div>
    </footer>
  )
}
