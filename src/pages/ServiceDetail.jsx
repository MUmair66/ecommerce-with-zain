import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams, Navigate, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiArrowRight, FiCheckCircle, FiChevronDown, FiGlobe, FiShield, FiClock, FiTrendingUp, FiTarget } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { servicesData } from '../data/servicesData'
import './Services.css'

const iconMap = {
  globe: <FiGlobe />,
  shield: <FiShield />,
  clock: <FiClock />,
  trending: <FiTrendingUp />,
  target: <FiTarget />
}

function FadeUp({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

function Accordion({ q, a }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-q" onClick={() => setIsOpen(!isOpen)}>
        {q}
        <FiChevronDown className={`faq-arrow ${isOpen ? 'rotated' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="faq-a-wrapper"
          >
            <div className="faq-a">
              <p>{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ServiceDetail() {
  const { id } = useParams()
  const service = servicesData.find(s => s.id === id)

  if (!service) return <Navigate to="/services" replace />

  return (
    <>
      <Helmet>
        <title>{service.title} | E-Commerce with Zain</title>
        <meta name="description" content={service.desc} />
      </Helmet>

      {/* Hero Section */}
      <section className="page-hero section-navy service-detail-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="sdh-content">
            <FadeUp>
              <span className="badge light sdh-badge">Premium Service</span>
              <h1 className="page-hero-title">{service.title}</h1>
              <p className="page-hero-sub">{service.heroDesc || service.desc}</p>
              <div className="sdh-actions">
                <Link to="/contact" className="btn btn-primary">
                  Get Started <FiArrowRight />
                </Link>
                <a href="https://wa.me/923054445888" target="_blank" rel="noreferrer" className="btn btn-outline">
                  <FaWhatsapp /> Ask on WhatsApp
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
        <div className="hero-wave" style={{ position: 'absolute', bottom: -2, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      {service.features && (
        <section className="section sdp-features">
          <div className="container">
            <div className="sdp-grid-3">
              {service.features.map((feat, idx) => (
                <FadeUp key={idx} delay={idx * 0.1} className="sdp-feat-card">
                  <div className="sdp-feat-icon" style={{ color: service.color }}>
                    {iconMap[feat.icon] || <FiCheckCircle />}
                  </div>
                  <h3>{feat.title}</h3>
                  <p>{feat.desc}</p>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Overview & Image Section */}
      <section className="section section-alt sdp-overview">
        <div className="container">
          <div className="sdp-overview-grid">
            <FadeUp className="sdp-overview-img-wrap">
              <img src={service.image} alt={service.title} />
            </FadeUp>
            <FadeUp delay={0.2} className="sdp-overview-text">
              <h2>Why You Need This</h2>
              <div className="divider left"></div>
              <p className="sdp-desc-large">{service.desc}</p>
              
              <h3 className="sdp-included-title">What's Included</h3>
              {service.groups ? (
                <div className="sdp-groups">
                  {service.groups.map(group => (
                    <div key={group.label} className="sdp-group">
                      <h4>{group.label}</h4>
                      <ul>
                        {group.items.map(item => (
                          <li key={item}><FiCheckCircle style={{ color: service.color }} /> {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="sdp-list-grid">
                  {service.subservices.map(item => (
                    <li key={item}><FiCheckCircle style={{ color: service.color }} /> {item}</li>
                  ))}
                </ul>
              )}
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Process Section */}
      {service.process && (
        <section className="section sdp-process">
          <div className="container">
            <div className="text-center">
              <h2>How It Works</h2>
              <div className="divider"></div>
              <p className="section-subtitle">Our streamlined process to get you results faster.</p>
            </div>
            <div className="sdp-process-timeline">
              {service.process.map((proc, idx) => (
                <FadeUp key={idx} delay={idx * 0.15} className="sdp-step">
                  <div className="sdp-step-num" style={{ backgroundColor: `${service.color}15`, color: service.color }}>
                    {proc.step}
                  </div>
                  <div className="sdp-step-content">
                    <h3>{proc.title}</h3>
                    <p>{proc.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {service.faq && (
        <section className="section section-alt sdp-faq">
          <div className="container">
            <div className="text-center">
              <h2>Frequently Asked Questions</h2>
              <div className="divider"></div>
            </div>
            <div className="faq-list">
              {service.faq.map((f, idx) => (
                <FadeUp key={idx} delay={idx * 0.1}>
                  <Accordion q={f.q} a={f.a} />
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="cta-banner">
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <FadeUp>
            <h2 className="cta-heading">Ready to scale your business?</h2>
            <p className="cta-sub">Get in touch with us today to start your journey.</p>
            <div className="cta-btns">
              <Link to="/contact" className="btn btn-primary">Start Now <FiArrowRight /></Link>
              <a href="https://wa.me/923054445888" target="_blank" rel="noreferrer" className="btn btn-outline wa-btn"><FaWhatsapp /> WhatsApp Us</a>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
