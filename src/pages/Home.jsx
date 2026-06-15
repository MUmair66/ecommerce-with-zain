import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TypeAnimation } from 'react-type-animation'
import { FiArrowRight, FiCheckCircle, FiClock, FiUsers, FiHeadphones, FiPlus, FiMinus } from 'react-icons/fi'
import { FaAmazon, FaEbay, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import { SiWalmart, SiEtsy } from 'react-icons/si'
import { getServiceItems, servicesData } from '../data/servicesData'
import './Home.css'

function FadeUp({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 })
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}

function Particles() {
  return (
    <div className="particles" aria-hidden="true">
      {[...Array(18)].map((_, i) => <span key={i} className={`particle p${i + 1}`} />)}
    </div>
  )
}

function FAQItem({ q, a }) {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question">
        <h4>{q}</h4>
        <div className="faq-icon">{isOpen ? <FiMinus /> : <FiPlus />}</div>
      </div>
      <div className="faq-answer">
        <p>{a}</p>
      </div>
    </div>
  )
}

const platforms = [
  { icon: <FaAmazon />, name: 'Amazon' },
  { icon: <FaEbay />, name: 'eBay' },
  { icon: <SiWalmart />, name: 'Walmart' },
  { icon: <FaTiktok />, name: 'TikTok Shop' },
  { icon: <SiEtsy />, name: 'Etsy' },
  { icon: <span style={{ fontWeight: 900 }}>OnBuy</span>, name: 'OnBuy' },
]

const whyUs = [
  { icon: <FiCheckCircle />, title: '100% Satisfaction Guaranteed', desc: 'We only succeed when you do. Every service comes with our full satisfaction promise.' },
  { icon: <FiUsers />, title: 'Expert Team', desc: 'Years of hands-on experience across Amazon, eBay, Walmart and global e-commerce platforms.' },
  { icon: <FiClock />, title: 'Fast Turnaround', desc: 'Quick, efficient delivery without compromising on quality or compliance.' },
  { icon: <FiHeadphones />, title: '24/7 Support', desc: 'Round-the-clock assistance via WhatsApp, email and calls whenever you need us.' },
]

const testimonials = [
  { name: 'Ahmed Raza', role: 'Amazon Seller, UK', stars: 5, text: 'Zain\'s team got my suspended Amazon account reinstated in just 4 days! Absolutely professional and responsive. Highly recommended for anyone needing reinstatement.' },
  { name: 'Sarah Johnson', role: 'eBay Store Owner, USA', stars: 5, text: 'They created my eBay and Etsy accounts smoothly and helped me get my first 100 sales. The account management service is worth every penny. 10/10!' },
  { name: 'Usman Khan', role: 'E-Commerce Entrepreneur', stars: 5, text: 'Got my LLC formed and Walmart account set up in record time. My business is growing tremendously thanks to E-Commerce with Zain!' },
]

const workflowSteps = [
  { step: '01', title: 'Consultation & Strategy', desc: 'We analyze your business needs and craft a customized roadmap for success.' },
  { step: '02', title: 'Account Setup & Compliance', desc: 'Our experts handle all documentation, ensuring fast and compliant approvals.' },
  { step: '03', title: 'Launch & Optimization', desc: 'We launch your store with optimized listings designed to rank and convert.' },
  { step: '04', title: 'Growth & Scaling', desc: 'Continuous management, marketing, and expansion to scale your revenue.' },
]

const faqs = [
  { q: 'How long does it take to reinstate an Amazon account?', a: 'Typically, we see reinstatements within 3 to 7 business days, depending on the complexity of the suspension (e.g., Section 3 vs. IP complaints).' },
  { q: 'Do you guarantee account creation approval?', a: 'While no one can guarantee platform decisions, our deep understanding of compliance means over 95% of the accounts we apply for get approved on the first attempt.' },
  { q: 'What is included in your E-Commerce Management?', a: 'Everything from product listing, inventory management, customer service handling, to PPC ad campaigns and daily performance monitoring.' },
  { q: 'Can you help non-US/UK residents form an LLC or LTD?', a: 'Yes! We specialize in helping international entrepreneurs set up their UK LTD or US LLC, complete with registered agents and business bank accounts.' },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>E-Commerce with Zain | Amazon, eBay & Walmart Services</title>
        <meta name="description" content="Professional e-commerce services — account creation, management, reinstatement, web development and digital marketing on Amazon, eBay, Walmart & more." />
      </Helmet>

      {/* HERO */}
      <section className="hero-section" id="hero">
        <Particles />
        <div className="hero-overlay" />
        <div className="container hero-content">


          <motion.h1 className="hero-heading" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <TypeAnimation
              sequence={[
                'We Help You Grow on Amazon, eBay, Walmart & More', 3000,
                'Expert Account Creation & Management Services', 3000,
                'Fast Amazon & eBay Account Reinstatement', 3000,
                'Scale Your E-Commerce Business Today', 3000,
              ]}
              wrapper="span" repeat={Infinity} speed={55}
            />
          </motion.h1>

          <motion.p className="hero-sub" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>
            Professional E-Commerce Services — Account Creation, Management, Reinstatement, Web Development &amp; Digital Marketing
          </motion.p>

          <motion.div className="hero-btns" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
            <Link to="/services" className="btn btn-primary hero-btn" id="hero-services-btn">Our Services <FiArrowRight /></Link>
            <Link to="/contact" className="btn btn-outline hero-btn" id="hero-consult-btn">Get Free Consultation</Link>
          </motion.div>

          <motion.div className="hero-stats" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }}>
            {[['7+', 'Years Experience'], ['1200+', 'Accounts Created'], ['363', 'eBay Account Reinstated'], ['1850+', 'Happy Customer'], ['1000+', 'Amazon Account Reinstated']].map(([num, lbl]) => (
              <div className="hero-stat" key={lbl}>
                <span className="hs-num">{num}</span>
                <span className="hs-lbl">{lbl}</span>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="section" id="about-us">
        <div className="container about-container">
          <FadeUp className="about-text">
            <span className="badge">Who We Are</span>
            <h2 className="section-title">Your Trusted Partner in Global E-Commerce</h2>
            <div className="divider" style={{ margin: '15px 0' }} />
            <p className="section-subtitle" style={{ textAlign: 'left', margin: '20px 0' }}>
              At <strong>E-Commerce with Zain</strong>, we take the complexity out of selling online. Whether you're an aspiring entrepreneur looking to set up your first LLC and Amazon store, or an established brand needing high-level management and marketing—we have the expertise to scale your business.
            </p>
            <p className="section-subtitle" style={{ textAlign: 'left', margin: '20px 0' }}>
              We specialize in navigating the strict compliance protocols of major marketplaces, getting suspended accounts reinstated, and building powerful digital assets that drive conversions.
            </p>
            <ul className="about-list">
              <li><FiCheckCircle className="check-icon gold-check" /> Proven Track Record of Reinstatements</li>
              <li><FiCheckCircle className="check-icon gold-check" /> Comprehensive Cross-Platform Knowledge</li>
              <li><FiCheckCircle className="check-icon gold-check" /> Tailored Growth Strategies for Every Client</li>
            </ul>
          </FadeUp>
          <FadeUp delay={0.2} className="about-image-wrapper">
            <div className="about-image-card">
              <div className="about-image-inner">
                <FiUsers className="about-huge-icon" />
                <h3>Empowering Sellers Worldwide</h3>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="section section-alt" id="platforms">
        <div className="container">
          <FadeUp className="text-center">
            <span className="badge">Our Reach</span>
            <h2 className="section-title">Platforms We Work On</h2>
            <div className="divider" />
            <p className="section-subtitle">We help sellers succeed across the world's top e-commerce marketplaces.</p>
          </FadeUp>
          <div className="platforms-track-wrap">
            <div className="platforms-track">
              {[...platforms, ...platforms].map((p, i) => (
                <div className="platform-item" key={i}>
                  <span className="platform-icon">{p.icon}</span>
                  <span className="platform-name">{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES */}
      <section className="section" id="detailed-services">
        <div className="container">
          <FadeUp className="text-center">
            <span className="badge">Our Expertise</span>
            <h2 className="section-title">Comprehensive Solutions</h2>
            <div className="divider" />
            <p className="section-subtitle">Explore our full range of professional services designed to establish, manage, and scale your brand.</p>
          </FadeUp>
          
          <div className="detailed-services-list">
            {servicesData.map((svc, index) => (
              <div className={`ds-row ${index % 2 !== 0 ? 'ds-row-reverse' : ''}`} key={svc.id}>
                <FadeUp delay={0.1} className="ds-content">
                  <div className="ds-icon-wrap" style={{ color: svc.color }}>
                    <span className="ds-icon-inner">{svc.icon}</span>
                  </div>
                  <h3 className="ds-title">{svc.title}</h3>
                  <h4 className="ds-subtitle">{svc.subtitle}</h4>
                  <p className="ds-desc">{svc.desc}</p>
                  
                  <ul className="ds-bullet-list">
                    {getServiceItems(svc).slice(0, 6).map((item, i) => (
                      <li key={i}><FiCheckCircle className="check-icon" /> {item}</li>
                    ))}
                  </ul>
                  <div style={{ marginTop: '28px' }}>
                    <Link to={`/services/${svc.id}`} className="btn btn-navy ds-learn-more">
                      Learn More About {svc.title} <FiArrowRight />
                    </Link>
                  </div>
                </FadeUp>
                <FadeUp delay={0.3} className="ds-visual">
                  <div className="ds-image-container" style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius)' }}>
                    <img 
                      src={svc.image} 
                      alt={svc.title} 
                      className="ds-service-img" 
                      style={{ 
                        width: '100%', 
                        height: 'auto', 
                        borderRadius: 'var(--radius)', 
                        boxShadow: 'var(--shadow)',
                        border: '1px solid var(--border)',
                        transition: 'transform 0.5s ease',
                        display: 'block'
                      }}
                    />
                    <div className="ds-mockup-bg" style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${svc.color}15 0%, transparent 100%)`, pointerEvents: 'none', mixBlendMode: 'overlay' }}></div>
                  </div>
                </FadeUp>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK (WORKFLOW) */}
      <section className="section section-alt" id="workflow">
        <div className="container">
          <FadeUp className="text-center">
            <span className="badge">Our Process</span>
            <h2 className="section-title">How We Work</h2>
            <div className="divider" />
            <p className="section-subtitle">A streamlined, transparent process designed to get you results quickly and securely.</p>
          </FadeUp>
          <div className="workflow-grid">
            {workflowSteps.map((step, i) => (
              <FadeUp key={step.step} delay={i * 0.1}>
                <div className="workflow-card">
                  <div className="workflow-step-num">{step.step}</div>
                  <h3 className="workflow-title">{step.title}</h3>
                  <p className="workflow-desc">{step.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section" id="why-us">
        <div className="container">
          <FadeUp className="text-center">
            <span className="badge">Why Us</span>
            <h2 className="section-title">Why Choose E-Commerce with Zain?</h2>
            <div className="divider" />
          </FadeUp>
          <div className="why-grid">
            {whyUs.map((w, i) => (
              <FadeUp key={w.title} delay={i * 0.1}>
                <div className="why-card" id={`why-card-${i + 1}`}>
                  <div className="why-icon">{w.icon}</div>
                  <h3 className="why-title">{w.title}</h3>
                  <p className="why-desc">{w.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section-alt" id="testimonials">
        <div className="container">
          <FadeUp className="text-center">
            <span className="badge">Client Reviews</span>
            <h2 className="section-title">What Our Clients Say</h2>
            <div className="divider" />
          </FadeUp>
          <div className="testi-grid">
            {testimonials.map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.1}>
                <div className="testi-card" id={`testimonial-${i + 1}`}>
                  <div className="stars">{'★'.repeat(t.stars)}</div>
                  <p className="testi-text">"{t.text}"</p>
                  <div className="testi-author">
                    <div className="testi-avatar">{t.name[0]}</div>
                    <div>
                      <div className="testi-name">{t.name}</div>
                      <div className="testi-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section" id="faq">
        <div className="container">
          <FadeUp className="text-center">
            <span className="badge">Got Questions?</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="divider" />
          </FadeUp>
          <div className="faq-container">
            {faqs.map((faq, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <FAQItem q={faq.q} a={faq.a} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner" id="cta-banner">
        <div className="container cta-inner">
          <FadeUp>
            <span className="badge light">Take Action</span>
            <h2 className="cta-heading">Ready to Scale Your E-Commerce Business?</h2>
            <p className="cta-sub">Join 750+ satisfied clients who trust E-Commerce with Zain. Let's build your success story together.</p>
            <div className="cta-btns">
              <Link to="/contact" className="btn btn-primary" id="cta-consult-btn">Get Free Consultation <FiArrowRight /></Link>
              <a href="https://wa.me/923054445888" target="_blank" rel="noreferrer" className="btn wa-btn" id="cta-whatsapp-btn">
                <FaWhatsapp /> Chat on WhatsApp
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
