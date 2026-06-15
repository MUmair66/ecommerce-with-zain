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
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', width: 280, height: 280, marginBottom: 20 }}>
          {/* Outer rotating ring */}
          <motion.div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: '2px dashed rgba(255, 193, 7, 0.3)',
              borderTop: '2px solid #FFC107',
              borderBottom: '2px solid #FFC107',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
          {/* Inner rotating ring */}
          <motion.div
            style={{
              position: 'absolute',
              width: '85%',
              height: '85%',
              borderRadius: '50%',
              border: '1px solid rgba(255, 193, 7, 0.1)',
              borderLeft: '2px solid rgba(255, 193, 7, 0.8)',
              borderRight: '2px solid rgba(255, 193, 7, 0.8)',
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          />
          {/* Pulsing glow behind logo */}
          <motion.div
            style={{
              position: 'absolute',
              width: '70%',
              height: '70%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,193,7,0.15) 0%, rgba(255,193,7,0) 70%)',
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          
          <motion.img
            src="/ecomerce%20with%20zain%20without%20background.png"
            alt="E-Commerce with Zain Logo"
            style={{
              maxWidth: '180px', /* slightly smaller so it fits inside the rings perfectly */
              height: 'auto',
              filter: 'invert(1) hue-rotate(180deg) brightness(1.2) drop-shadow(0 0 15px rgba(255, 193, 7, 0.4))',
              perspective: 1000,
              zIndex: 2
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
        </div>
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
