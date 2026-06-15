import React, { Suspense, lazy, useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import LoadingScreen from './components/LoadingScreen'

const Home          = lazy(() => import('./pages/Home'))
const Services      = lazy(() => import('./pages/Services'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const Achievements  = lazy(() => import('./pages/Achievements'))
const Contact       = lazy(() => import('./pages/Contact'))

const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -16 },
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.32, ease: 'easeInOut' }}
      >
        <Suspense fallback={
          <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ color: 'var(--navy)', fontWeight: 700, opacity: 0.4 }}>Loading…</div>
          </div>
        }>
          <Routes location={location}>
            <Route path="/"             element={<Home />} />
            <Route path="/services"     element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact"      element={<Contact />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    let originalTitle = document.title;
    const handleVisibilityChange = () => {
      if (document.hidden) {
        originalTitle = document.title;
        document.title = "Come Back ⚡";
      } else {
        document.title = originalTitle;
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  if (loading) return <LoadingScreen />

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <main style={{ paddingTop: '84px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <AnimatedRoutes />
        </main>
        <Footer />
        <WhatsAppFloat />
      </Router>
    </HelmetProvider>
  )
}
