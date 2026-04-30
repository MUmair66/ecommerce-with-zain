import React from 'react'
import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <motion.div
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ textAlign: 'center' }}
      >
        <div style={{
          fontSize: '1.15rem',
          fontWeight: 900,
          color: '#fff',
          letterSpacing: 1,
          textTransform: 'uppercase',
          fontFamily: 'Outfit, sans-serif'
        }}>
          E-COMMERCE with <span style={{ color: '#FFC107' }}>ZAIN</span>
        </div>
        <div style={{ color: '#FFC107', fontSize: '1.5rem', letterSpacing: -2 }}>⌣⌣⌣⌣</div>
      </motion.div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
        style={{
          marginTop: 30,
          width: 120,
          height: 3,
          background: 'linear-gradient(90deg, #FFC107, #fff)',
          borderRadius: 2,
          transformOrigin: 'left'
        }}
      />
    </div>
  )
}
