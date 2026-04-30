import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams, Navigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { servicesData } from '../data/servicesData'
import './Services.css'

function FadeUp({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}

export default function ServiceDetail() {
  const { id } = useParams()
  const service = servicesData.find(s => s.id === id)

  if (!service) {
    return <Navigate to="/services" replace />
  }

  return (
    <>
      <Helmet>
        <title>{service.title} | E-Commerce with Zain</title>
        <meta name="description" content={service.desc} />
      </Helmet>

      {/* HERO */}
      <section className="page-hero section-navy">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="badge light" style={{ fontSize: '2rem', padding: '10px 20px', marginBottom: 20 }}>{service.icon}</span>
            <h1 className="page-hero-title">{service.title}</h1>
            <p className="page-hero-sub">{service.subtitle}</p>
          </motion.div>
        </div>
        <div className="hero-wave" style={{ position: 'absolute', bottom: -2, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section" style={{ paddingBottom: 40 }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <FadeUp>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '50px' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--navy)', marginBottom: 20 }}>Overview</h2>
              <p style={{ fontSize: '1.1rem', color: '#556080', lineHeight: 1.8, marginBottom: 40 }}>{service.desc}</p>

              {service.items && (
                <>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--navy)', marginBottom: 16 }}>What's Included:</h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40 }}>
                    {service.items.map(item => (
                      <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: '1.05rem', color: '#222' }}>
                        <FiCheck style={{ color: 'var(--golden)', fontSize: '1.4rem', flexShrink: 0, marginTop: 2 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {service.subsections && service.subsections.map(sub => (
                <div key={sub.label} style={{ marginBottom: 30 }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--navy)', marginBottom: 16, borderBottom: '2px solid var(--golden)', display: 'inline-block', paddingBottom: 6 }}>{sub.label}</h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 10 }}>
                    {sub.items.map(item => (
                      <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: '1.05rem', color: '#222' }}>
                        <FiCheck style={{ color: 'var(--golden)', fontSize: '1.4rem', flexShrink: 0, marginTop: 2 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div style={{ marginTop: 50, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
                  Get Started <FiArrowRight />
                </Link>
                <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer" className="btn btn-outline-navy" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
                  <FaWhatsapp style={{ fontSize: '1.2rem' }} /> Ask on WhatsApp
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* MORE SERVICES */}
      <section className="section section-alt" style={{ paddingTop: 60 }}>
        <div className="container text-center">
          <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--navy)', marginBottom: 30 }}>Explore Other Services</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16 }}>
            {servicesData.filter(s => s.id !== id).map(s => (
              <Link key={s.id} to={`/services/${s.id}`} style={{ background: '#fff', border: '1px solid var(--border)', padding: '16px 24px', borderRadius: '50px', fontWeight: 700, color: 'var(--navy)', transition: 'all 0.3s' }} className="other-svc-link">
                {s.icon} {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .other-svc-link:hover { border-color: var(--golden); box-shadow: 0 4px 15px rgba(255,193,7,0.2); transform: translateY(-2px); }
      `}</style>
    </>
  )
}
