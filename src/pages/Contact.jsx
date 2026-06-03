import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { FiMail, FiUser, FiPhone, FiMessageSquare, FiSend, FiCheckCircle } from 'react-icons/fi'
import { FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'
import './Contact.css'

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

const services = [
  'LTD & LLC Formation',
  'Amazon Account Creation',
  'eBay Account Creation',
  'Walmart Account Creation',
  'TikTok Shop Account Creation',
  'Etsy Account Creation',
  'OnBuy Account Creation',
  'Amazon Account Management',
  'eBay Account Management',
  'Amazon Account Reinstatement',
  'eBay Account Reinstatement',
  'Web Development',
  'Shopify Store Setup',
  'Digital Marketing / SEO',
  'Meta Ads (Facebook & Instagram)',
  'Google Ads / PPC',
  'Other',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = (data) => {
    console.log('Form data:', data)
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | E-Commerce with Zain</title>
        <meta name="description" content="Get in touch with E-Commerce with Zain for a free consultation. WhatsApp, email or fill out our contact form to get started today." />
      </Helmet>

      {/* PAGE HERO */}
      <section style={{ position: 'relative', padding: '100px 0 90px', background: 'linear-gradient(135deg, #222222 0%, #000000 60%, #111111 100%)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 50%, rgba(255,193,7,0.1) 0%, transparent 60%)' }} />
        <div className="container text-center" style={{ position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="badge light">Get In Touch</span>
            <h1 style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 900, color: '#fff', margin: '12px 0 16px' }}>Contact Us</h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', maxWidth: 560, margin: '0 auto' }}>
              Ready to grow your e-commerce business? Reach out for a free consultation — we respond within 24 hours.
            </p>
          </motion.div>
        </div>
        <div style={{ position: 'absolute', bottom: -2, left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section" id="contact-section">
        <div className="container contact-layout">

          {/* CONTACT INFO */}
          <div className="contact-info-col">
            <FadeUp>
              <span className="badge">Reach Us</span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 24 }}>Let's Talk Business</h2>
              <p style={{ color: '#556080', lineHeight: 1.75, marginBottom: 32 }}>
                Whether you need help with account creation, reinstatement, or growing your brand online — our team is ready to help. Book a free consultation today!
              </p>

              <div className="info-cards">
                <a href="https://wa.me/923054445888" target="_blank" rel="noreferrer" className="info-card" id="contact-whatsapp">
                  <div className="info-card-icon" style={{ background: 'rgba(37,211,102,0.12)', color: '#25D366' }}>
                    <FaWhatsapp />
                  </div>
                  <div>
                    <div className="info-card-label">WhatsApp</div>
                    <div className="info-card-value">+92 305 4445888</div>
                  </div>
                </a>

                <a href="mailto:info@ecommercewithzain.com" className="info-card" id="contact-email">
                  <div className="info-card-icon" style={{ background: 'rgba(17,17,17,0.06)', color: 'var(--navy)' }}>
                    <FiMail />
                  </div>
                  <div>
                    <div className="info-card-label">Email Address</div>
                    <div className="info-card-value">info@ecommercewithzain.com</div>
                  </div>
                </a>

                <div className="info-card" id="contact-location">
                  <div className="info-card-icon" style={{ background: 'rgba(255,193,7,0.15)', color: 'var(--golden-dark)' }}>
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <div className="info-card-label">Location</div>
                    <div className="info-card-value" style={{ fontSize: '0.88rem', lineHeight: '1.4' }}>
                      Office 28, 4th Floor, AL Latif Center, Lahore, Pakistan 🇵🇰
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/923054445888?text=Hello!%20I%20want%20a%20free%20consultation."
                target="_blank"
                rel="noreferrer"
                className="btn wa-direct-btn"
                id="whatsapp-direct-btn"
              >
                <FaWhatsapp /> Chat Directly on WhatsApp
              </a>
            </FadeUp>
          </div>

          {/* CONTACT FORM */}
          <FadeUp delay={0.15} className="contact-form-col">
            <div className="contact-form-card">
              <h3 className="form-title">Send Us a Message</h3>
              <p className="form-sub">Fill out the form below and we'll get back to you within 24 hours.</p>

              {submitted && (
                <motion.div
                  className="success-msg"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FiCheckCircle /> Message sent successfully! We'll contact you soon.
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="contact-form" noValidate>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <div className="input-wrap">
                    <FiUser className="input-icon" />
                    <input
                      id="fullName"
                      type="text"
                      placeholder="Your full name"
                      className={errors.fullName ? 'error' : ''}
                      {...register('fullName', { required: 'Full name is required', minLength: { value: 2, message: 'Name must be at least 2 characters' } })}
                    />
                  </div>
                  {errors.fullName && <span className="err-msg">{errors.fullName.message}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <div className="input-wrap">
                    <FiMail className="input-icon" />
                    <input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className={errors.email ? 'error' : ''}
                      {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address' }
                      })}
                    />
                  </div>
                  {errors.email && <span className="err-msg">{errors.email.message}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="whatsapp">WhatsApp Number *</label>
                  <div className="input-wrap">
                    <FiPhone className="input-icon" />
                    <input
                      id="whatsapp"
                      type="tel"
                      placeholder="+92 300 0000000"
                      className={errors.whatsapp ? 'error' : ''}
                      {...register('whatsapp', {
                        required: 'WhatsApp number is required',
                        minLength: { value: 8, message: 'Enter a valid phone number' }
                      })}
                    />
                  </div>
                  {errors.whatsapp && <span className="err-msg">{errors.whatsapp.message}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Required *</label>
                  <div className="input-wrap">
                    <select
                      id="service"
                      className={errors.service ? 'error select-input' : 'select-input'}
                      {...register('service', { required: 'Please select a service' })}
                    >
                      <option value="">— Select a Service —</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  {errors.service && <span className="err-msg">{errors.service.message}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <div className="input-wrap textarea-wrap">
                    <FiMessageSquare className="input-icon" />
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about your project or what you need help with..."
                      className={errors.message ? 'error' : ''}
                      {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Message must be at least 10 characters' } })}
                    />
                  </div>
                  {errors.message && <span className="err-msg">{errors.message.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary submit-btn" id="contact-submit-btn">
                  <FiSend /> Send Message
                </button>
              </form>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="section section-alt" style={{ padding: '0 0 90px' }} id="map-section">
        <div className="container">
          <FadeUp>
            <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: 'var(--shadow)', height: '450px' }}>
              <iframe
                title="Office Location Map"
                src="https://maps.google.com/maps?q=Al%20Latif%20Center%20Lahore&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
