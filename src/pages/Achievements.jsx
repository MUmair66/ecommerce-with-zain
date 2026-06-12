import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { FiArrowRight } from 'react-icons/fi'
import { FaWhatsapp, FaTrophy, FaStar, FaUsers } from 'react-icons/fa'
import './Achievements.css'

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

function CounterCard({ end, suffix, label, icon, delay }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  return (
    <motion.div ref={ref} className="counter-card"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.55, delay }}>
      <div className="counter-icon">{icon}</div>
      <div className="counter-num">
        {inView ? <CountUp end={end} duration={2.5} suffix={suffix} /> : `0${suffix}`}
      </div>
      <div className="counter-label">{label}</div>
    </motion.div>
  )
}

const counters = [
  { end: 750, suffix: '+', label: 'Happy Clients',       icon: '😊', delay: 0 },
  { end: 1500, suffix: '+', label: 'Accounts Created',   icon: '🛒', delay: 0.1 },
  { end: 6, suffix: '+', label: 'Services Offered',      icon: '⚙️', delay: 0.2 },
  { end: 100, suffix: '%', label: 'Satisfaction Rate',   icon: '✅', delay: 0.3 },
  { end: 5, suffix: '+', label: 'Years Experience',      icon: '🏆', delay: 0.4 },
  { end: 75, suffix: '+', label: 'eBay Cases Won',       icon: '⚖️', delay: 0.5 },
]

const achievementCards = [
  {
    icon: <FaTrophy />,
    title: 'Best E-Commerce Service Provider',
    desc: 'Recognized for delivering exceptional e-commerce solutions to clients across the UK, USA, UAE, and Pakistan with unmatched quality.',
    color: '#FFC107',
  },
  {
    icon: <FaStar />,
    title: 'Top Amazon Reinstatement Experts',
    desc: 'Proven track record of reinstating suspended Amazon accounts with high success rates across all suspension types including Section 3.',
    color: '#111111',
  },
  {
    icon: <FaUsers />,
    title: 'Trusted by 750+ Clients Worldwide',
    desc: 'A growing global community of satisfied e-commerce entrepreneurs who rely on us for their business growth and account management needs.',
    color: '#E0A800',
  },
]

const timeline = [
  { year: '2019', title: 'The Beginning', desc: 'E-Commerce with Zain was founded with a mission to help entrepreneurs succeed on Amazon and eBay.' },
  { year: '2020', title: 'First 100 Clients', desc: 'Reached our first milestone of 100 happy clients, expanding to eBay reinstatement and account creation services.' },
  { year: '2021', title: 'Multi-Platform Expansion', desc: 'Added Walmart, TikTok Shop, Etsy and OnBuy services to our portfolio, becoming a true multi-platform agency.' },
  { year: '2022', title: 'Web & Digital Services', desc: 'Launched full web development and digital marketing divisions to offer clients a complete business growth package.' },
  { year: '2023', title: 'LLC & LTD Formation', desc: 'Started offering company formation services for UK and USA, helping clients legally establish their e-commerce businesses.' },
  { year: '2024–25', title: '750+ Clients & Growing', desc: 'Surpassed 750 happy clients worldwide and 1500+ accounts created — continuing to grow as a leading e-commerce service provider.' },
]

export default function Achievements() {
  return (
    <>
      <Helmet>
        <title>Our Achievements | E-Commerce with Zain</title>
        <meta name="description" content="750+ happy clients, 1500+ accounts created, 5+ years experience. See why E-Commerce with Zain is a trusted leader in e-commerce services." />
      </Helmet>

      {/* PAGE HERO */}
      <section className="page-hero section-navy" style={{ position: 'relative', padding: '100px 0 90px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 50%, rgba(255,193,7,0.1) 0%, transparent 60%)' }} />
        <div className="container text-center" style={{ position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="badge light">Our Story</span>
            <h1 className="page-hero-title">Our Achievements</h1>
            <p className="page-hero-sub">Numbers that tell the story of our commitment to excellence and client success.</p>
          </motion.div>
        </div>
        <div className="hero-wave" style={{ position: 'absolute', bottom: -2, left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* COUNTERS */}
      <section className="section" id="counters">
        <div className="container">
          <FadeUp className="text-center">
            <span className="badge">By The Numbers</span>
            <h2 className="section-title">Our Numbers Speak For Themselves</h2>
            <div className="divider" />
          </FadeUp>
          <div className="counters-grid">
            {counters.map((c, i) => (
              <CounterCard key={c.label} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENT CARDS */}
      <section className="section section-alt" id="achievement-cards">
        <div className="container">
          <FadeUp className="text-center">
            <span className="badge">Recognition</span>
            <h2 className="section-title">What We're Known For</h2>
            <div className="divider" />
            <p className="section-subtitle">Our reputation is built on results, trust, and thousands of success stories.</p>
          </FadeUp>
          <div className="ach-cards-grid">
            {achievementCards.map((a, i) => (
              <FadeUp key={a.title} delay={i * 0.12}>
                <div className="ach-card" id={`achievement-card-${i + 1}`}>
                  <div className="ach-icon" style={{ color: a.color, background: `${a.color}18` }}>
                    {a.icon}
                  </div>
                  <h3 className="ach-title" style={{ color: a.color }}>{a.title}</h3>
                  <p className="ach-desc">{a.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section" id="timeline">
        <div className="container">
          <FadeUp className="text-center">
            <span className="badge">Our Journey</span>
            <h2 className="section-title">Our Company Timeline</h2>
            <div className="divider" />
            <p className="section-subtitle">From a single-service startup to a full-stack e-commerce agency.</p>
          </FadeUp>
          <div className="timeline">
            {timeline.map((t, i) => (
              <FadeUp key={t.year} delay={i * 0.1}>
                <div className={`timeline-item${i % 2 === 1 ? ' right' : ''}`} id={`timeline-${i + 1}`}>
                  <div className="tl-dot" />
                  <div className="tl-content">
                    <span className="tl-year">{t.year}</span>
                    <h3 className="tl-title">{t.title}</h3>
                    <p className="tl-desc">{t.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
            <div className="tl-line" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner" id="achievements-cta" style={{ background: 'linear-gradient(135deg, #222222 0%, #000000 60%, #111111 100%)', padding: '90px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(255,193,7,0.1) 0%, transparent 60%)' }} />
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <FadeUp>
            <span className="badge light">Join Our Success Stories</span>
            <h2 className="cta-heading">Become Our Next Success Story</h2>
            <p className="cta-sub">750+ clients have already trusted us with their e-commerce journey. It's your turn to grow.</p>
            <div className="cta-btns">
              <Link to="/contact" className="btn btn-primary" id="achievements-cta-btn">Get Free Consultation <FiArrowRight /></Link>
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
