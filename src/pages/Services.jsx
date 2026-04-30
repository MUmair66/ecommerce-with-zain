import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiArrowRight, FiChevronDown } from 'react-icons/fi'
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

// services array imported from data

const faqs = [
  { q: 'How long does Amazon account reinstatement take?', a: 'Most reinstatements are resolved within 3–10 business days depending on the suspension type. Section 3 cases may take longer but we handle them with precision.' },
  { q: 'Do you guarantee account reinstatement?', a: 'We have a very high success rate and use proven strategies. While no one can guarantee 100% reinstatement (Amazon has the final say), we do everything possible to get the best outcome.' },
  { q: 'Can you create accounts for non-Pakistan residents?', a: 'Yes! We create accounts for clients worldwide — UK, USA, UAE, Australia and more. We handle the full process regardless of your location.' },
  { q: 'How much does LLC formation cost?', a: 'The cost varies by state. We offer competitive pricing that includes all government fees, registered agent, and documentation. Contact us for a custom quote.' },
  { q: 'What platforms do you manage stores on?', a: 'We manage stores on Amazon, eBay, Walmart, TikTok Shop, Etsy, and OnBuy — providing full-service management including listings, orders, and customer service.' },
  { q: 'Do you offer ongoing support after service completion?', a: 'Yes! We provide 24/7 support via WhatsApp and email. We stay with you even after your service is complete to ensure long-term success.' },
]

function AccordionItem({ q, a, index }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item${open ? ' open' : ''}`} id={`faq-${index + 1}`}>
      <button className="faq-q" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span>{q}</span>
        <FiChevronDown className={`faq-arrow${open ? ' rotated' : ''}`} />
      </button>
      {open && (
        <motion.div
          className="faq-a"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}>
          <p>{a}</p>
        </motion.div>
      )}
    </div>
  )
}

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | E-Commerce with Zain</title>
        <meta name="description" content="Explore all our e-commerce services — LTD/LLC formation, account creation, management, reinstatement on Amazon & eBay, web development and digital marketing." />
      </Helmet>

      {/* PAGE HERO */}
      <section className="page-hero section-navy">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="badge light">What We Offer</span>
            <h1 className="page-hero-title">Our Professional Services</h1>
            <p className="page-hero-sub">
              Comprehensive e-commerce solutions designed to launch, grow, and protect your online business on every major platform.
            </p>
          </motion.div>
        </div>
        <div className="hero-wave" style={{ position: 'absolute', bottom: -2, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" id="all-services">
        <div className="container">
          {servicesData.map((svc, i) => (
            <FadeUp key={svc.id} delay={0.05}>
              <div className={`svc-detail-card${i % 2 === 1 ? ' reverse' : ''}`} id={svc.id}>
                <div className="sdc-icon-wrap" style={{ background: `${svc.color}18`, borderColor: `${svc.color}30` }}>
                  <span className="sdc-icon">{svc.icon}</span>
                </div>
                <div className="sdc-content">
                  <span className="sdc-badge" style={{ background: `${svc.color}18`, color: svc.color }}>{svc.subtitle}</span>
                  <h2 className="sdc-title">{svc.title}</h2>
                  <p className="sdc-desc">{svc.desc}</p>

                  {svc.items && (
                    <ul className="sdc-list">
                      {svc.items.map(item => (
                        <li key={item}><span className="sdc-check">✓</span>{item}</li>
                      ))}
                    </ul>
                  )}

                  {svc.subsections && svc.subsections.map(sub => (
                    <div key={sub.label} className="sdc-subsection">
                      <h4 className="sdc-sublabel">{sub.label}</h4>
                      <ul className="sdc-list">
                        {sub.items.map(item => (
                          <li key={item}><span className="sdc-check">✓</span>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <Link to={`/services/${svc.id}`} className="btn btn-primary" style={{ marginTop: 20 }}>
                    Learn More <FiArrowRight />
                  </Link>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt" id="faq">
        <div className="container">
          <FadeUp className="text-center">
            <span className="badge">FAQs</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="divider" />
            <p className="section-subtitle">Have questions? We have answers.</p>
          </FadeUp>
          <div className="faq-list">
            {faqs.map((f, i) => <AccordionItem key={i} index={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner" id="services-cta">
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <FadeUp>
            <span className="badge light">Get Started</span>
            <h2 className="cta-heading">Ready to Take Your Business to the Next Level?</h2>
            <p className="cta-sub">Book a free consultation and let's craft the perfect strategy for your e-commerce success.</p>
            <div className="cta-btns">
              <Link to="/contact" className="btn btn-primary" id="services-cta-btn">Get Free Consultation <FiArrowRight /></Link>
              <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer" className="btn wa-btn">
                <FaWhatsapp /> Chat on WhatsApp
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
