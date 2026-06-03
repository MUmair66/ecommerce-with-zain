import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/923054445888?text=Hello!%20I%20want%20to%20know%20more%20about%20your%20e-commerce%20services."
      className="whatsapp-float"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  )
}
