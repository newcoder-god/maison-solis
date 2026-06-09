import React from 'react'
import { motion } from 'framer-motion'

export default function ReservationCTA() {
  return (
    <section className="relative py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80"
          alt="Sunset dining at Maison Solis"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.3) saturate(0.7)' }}
        />
      </div>

      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to right, color-mix(in srgb, var(--bg) 90%, transparent), color-mix(in srgb, var(--bg) 50%, transparent), color-mix(in srgb, var(--bg) 90%, transparent))'
      }} />
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, color-mix(in srgb, var(--accent) 15%, transparent) 0%, transparent 70%)' }}
      />

      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, color-mix(in srgb, var(--accent) 30%, transparent), transparent)' }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, color-mix(in srgb, var(--accent) 30%, transparent), transparent)' }}
      />

      <div className="section-container relative z-10 text-center">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="eyebrow mb-6">
          Secure Your Evening
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="display-heading text-4xl md:text-6xl lg:text-7xl mb-8 max-w-3xl mx-auto text-white"
        >
          Reserve Your{' '}
          <em className="font-display italic font-light" style={{ color: 'var(--sky)' }}>Sunset</em>
          {' '}Experience
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
          className="w-16 h-px mx-auto mb-8 origin-center"
          style={{ background: 'var(--terracotta)' }}
        />

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="font-body font-light text-base md:text-lg max-w-xl mx-auto mb-12 text-white/70"
        >
          Secure your table and enjoy an unforgettable evening overlooking the Santorini coastline. Tables are limited each evening.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#reservations" className="btn-primary text-center justify-center">
            Book a Sunset Table
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7H13M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="tel:+302104567821" className="btn-ghost text-center justify-center" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.4)' }}>
            +30 21 0456 7821
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.6 }}
          className="mt-10 font-body text-xs tracking-widest uppercase text-white/30"
        >
          Monday – Sunday · 5:00 PM – 12:00 AM
        </motion.p>
      </div>
    </section>
  )
}
