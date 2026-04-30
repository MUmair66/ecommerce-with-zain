import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'
import Logo from './Logo'
import { servicesData } from '../data/servicesData'
import './Navbar.css'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services', hasDropdown: true },
  { label: 'Achievements', to: '/achievements' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastY, setLastY] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 30)
      setHidden(y > lastY && y > 100)
      setLastY(y)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastY])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <motion.nav
      className={`navbar${scrolled ? ' scrolled' : ''}${hidden ? ' nav-hidden' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container nav-inner">
        <Logo />
        <ul className="nav-links desktop-links">
          {navLinks.map(l => (
            <li key={l.to} className={l.hasDropdown ? 'has-dropdown' : ''}>
              <Link
                to={l.to}
                className={`nav-link${location.pathname.startsWith(l.to) && l.to !== '/' ? ' active' : location.pathname === l.to ? ' active' : ''}`}
              >
                {l.label} {l.hasDropdown && <FiChevronDown style={{ marginLeft: 2, marginBottom: -2 }} />}
              </Link>
              {l.hasDropdown && (
                <div className="dropdown-menu">
                  {servicesData.map(s => (
                    <Link key={s.id} to={`/services/${s.id}`} className="dropdown-item">
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
        <Link to="/contact" className="btn btn-primary nav-cta">
          Get Free Consultation
        </Link>
        <button
          className="hamburger"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.32, ease: 'easeInOut' }}
          >
            <ul style={{ maxHeight: '70vh', overflowY: 'auto' }}>
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    to={l.to}
                    className={`mobile-link${location.pathname === l.to ? ' active' : ''}`}
                  >
                    {l.label}
                  </Link>
                  {l.hasDropdown && (
                    <div className="mobile-dropdown">
                      {servicesData.map(s => (
                        <Link key={s.id} to={`/services/${s.id}`} className="mobile-dropdown-item">
                          - {s.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.li>
              ))}
              <li>
                <Link to="/contact" className="btn btn-primary mobile-cta">
                  Get Free Consultation
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
