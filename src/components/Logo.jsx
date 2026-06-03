import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Logo({ light = false }) {
  const loc = useLocation()
  return (
    <Link to="/" className="logo-wrap" aria-label="E-Commerce with Zain Home">
      <img 
        src="/ecomerce%20with%20zain%20without%20background.png" 
        alt="E-Commerce with Zain" 
        className={`logo-img${light ? ' light-logo' : ''}`} 
      />
    </Link>
  )
}
