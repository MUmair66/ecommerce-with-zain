import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiArrowRight, FiChevronDown, FiCheckCircle } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { getServiceItems, servicesData } from '../data/servicesData'
import './Services.css'

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

const faqs = [
  { q: 'How long does Amazon account reinstatement take?', a: 'Most reinstatements are resolved within 3-10 business days depending on the suspension type. Section 3 cases may take longer, but we handle them with precise documentation and appeal structure.' },
  { q: 'Do you guarantee account reinstatement?', a: 'We have a strong success process, but no agency can guarantee a marketplace decision. We focus on root-cause analysis, clean documentation, and the strongest possible appeal.' },
  { q: 'Can you create accounts for international clients?', a: 'Yes. We support clients in Pakistan and worldwide, including the UK, USA, UAE, Australia, and other regions depending on platform requirements.' },
  { q: 'How much does LLC formation cost?', a: 'Pricing depends on the selected state and required documentation. Contact us for a quote based on your business structure and account goals.' },
  { q: 'What platforms do you manage stores on?', a: 'We manage Amazon, eBay, Walmart, TikTok Shop, Etsy, and OnBuy accounts, including listings, account health, order workflows, and growth support.' },
  { q: 'Do you offer ongoing support after service completion?', a: 'Yes. We provide follow-up support through WhatsApp and email so your setup, account, or website keeps moving after delivery.' },
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
          transition={{ duration: 0.3 }}
        >
          <p>{a}</p>
        </motion.div>
      )}
    </div>
  )
}

function ServiceItems({ service }) {
  if (service.groups) {
    return (
      <div className="sdc-groups">
        {service.groups.map(group => (
          <div key={group.label} className="sdc-subsection">
            <h4 className="sdc-sublabel">{group.label}</h4>
            <ul className="sdc-list">
              {group.items.map(item => (
                <li key={item}><FiCheckCircle className="sdc-check" />{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )
  }

  return (
    <ul className="sdc-list">
      {service.subservices.map(item => (
        <li key={item}><FiCheckCircle className="sdc-check" />{item}</li>
      ))}
    </ul>
  )
}

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | E-Commerce with Zain</title>
        <meta name="description" content="Explore LTD and LLC formation, account creation, account management, reinstatement, compliance, website services, and digital marketing services." />
      </Helmet>

      <section className="page-hero section-navy">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="badge light">What We Offer</span>
            <h1 className="page-hero-title">Our Professional Services</h1>
            <p className="page-hero-sub">
              Complete e-commerce support to launch, verify, manage, recover, and grow your online business.
            </p>
          </motion.div>
        </div>
        <div className="hero-wave" style={{ position: 'absolute', bottom: -2, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      <section className="section" id="all-services">
        <div className="container">
          <FadeUp className="services-intro text-center">
            <span className="badge">Service Directory</span>
            <h2 className="section-title">Built for Serious E-Commerce Work</h2>
            <div className="divider" />
            <p className="section-subtitle">
              Choose the service area you need and review the exact subservices we can handle for your business.
            </p>
          </FadeUp>

          {servicesData.map((svc, i) => (
            <FadeUp key={svc.id} delay={0.05}>
              <div className={`svc-detail-card${i % 2 === 1 ? ' reverse' : ''}`} id={svc.id}>
                <div className="sdc-image-wrap">
                  <img src={svc.image} alt={svc.title} className="sdc-image" />
                </div>
                <div className="sdc-content">
                  <div className="sdc-heading-row">
                    <div>
                      <span className="sdc-badge" style={{ background: `${svc.color}18`, color: svc.color }}>{svc.subtitle}</span>
                      <h2 className="sdc-title">{svc.title}</h2>
                    </div>
                  </div>
                  <p className="sdc-desc">{svc.desc}</p>
                  <ServiceItems service={svc} />
                  <Link to={`/services/${svc.id}`} className="btn btn-primary" style={{ marginTop: 20 }}>
                    View {getServiceItems(svc).length} Services <FiArrowRight />
                  </Link>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

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

      <section className="cta-banner" id="services-cta">
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <FadeUp>
            <span className="badge light">Get Started</span>
            <h2 className="cta-heading">Ready to Take Your Business to the Next Level?</h2>
            <p className="cta-sub">Book a free consultation and let&apos;s craft the right service plan for your business.</p>
            <div className="cta-btns">
              <Link to="/contact" className="btn btn-primary" id="services-cta-btn">Get Free Consultation <FiArrowRight /></Link>
              <a href="https://wa.me/923054445888" target="_blank" rel="noreferrer" className="btn wa-btn">
                <FaWhatsapp /> Chat on WhatsApp
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
