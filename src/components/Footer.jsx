import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { FiMail, FiPhone } from 'react-icons/fi'
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'
import './Footer.css'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Achievements', to: '/achievements' },
  { label: 'Contact Us', to: '/contact' },
]

const serviceLinks = [
  { label: 'LTD & LLC Formation', to: '/services/ltd-llc' },
  { label: 'Account Creation', to: '/services/account-creation' },
  { label: 'Account Management', to: '/services/account-management' },
  { label: 'Account Reinstatement', to: '/services/reinstatement' },
  { label: 'Website Services', to: '/services/website-services' },
  { label: 'Digital Marketing', to: '/services/digital-marketing' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col brand-col">
          <Logo light />
          <p className="footer-desc">
            Professional e-commerce solutions to help you grow on Amazon, eBay, Walmart and beyond.
            From account creation to full management, we&apos;ve got you covered.
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/ecommercewithzainofficial/" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://www.instagram.com/ecommerce.with.zain/" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.tiktok.com/@ecommercewithzainoficial?_r=1&_t=ZS-97EaTHHtpif" target="_blank" rel="noreferrer" aria-label="TikTok"><FaTiktok /></a>
          </div>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            {quickLinks.map(l => (
              <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Services</h3>
          <ul className="footer-links">
            {serviceLinks.map(l => (
              <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Contact Us</h3>
          <ul className="footer-contact">
            <li>
              <FiMail className="fc-icon" />
              <a href="mailto:info@ecommercewithzain.com">info@ecommercewithzain.com</a>
            </li>
            <li>
              <FaWhatsapp className="fc-icon" />
              <a href="https://wa.me/923054445888" target="_blank" rel="noreferrer">+92 305 4445888</a>
            </li>
            <li>
              <FiPhone className="fc-icon" />
              <a href="tel:+923054445888">+92 305 4445888</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2026 E-Commerce with Zain. All Rights Reserved.</p>
          <p>Designed for E-Commerce Excellence</p>
        </div>
      </div>
    </footer>
  )
}
