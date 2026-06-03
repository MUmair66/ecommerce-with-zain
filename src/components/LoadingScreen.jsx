import React from 'react'
import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <motion.img
          src="/ecomerce%20with%20zain%20without%20background%201.png"
          alt="E-Commerce with Zain Logo"
          style={{
            maxWidth: '220px',
            height: 'auto',
            marginBottom: '20px',
            filter: 'drop-shadow(0 0 15px rgba(255, 193, 7, 0.4))',
            perspective: 1000
          }}
          animate={{
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div style={{
          fontSize: '1.25rem',
          fontWeight: 900,
          color: '#fff',
          letterSpacing: 1.5,
          textTransform: 'uppercase',
          fontFamily: 'Outfit, sans-serif'
        }}>
          E-COMMERCE with <span style={{ color: '#FFC107' }}>ZAIN</span>
        </div>
        <div style={{ color: '#FFC107', fontSize: '1.5rem', letterSpacing: -2, marginTop: -5 }}>⌣⌣⌣⌣</div>
      </motion.div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
        style={{
          marginTop: 30,
          width: 150,
          height: 3,
          background: 'linear-gradient(90deg, #FFC107, #fff)',
          borderRadius: 2,
          transformOrigin: 'left'
        }}
      />
    </div>
  )
}
