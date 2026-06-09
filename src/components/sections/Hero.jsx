import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const HERO_VIDEO = 'https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-road-through-a-mountain-range-41576-large.mp4'
const HERO_FALLBACK = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80'

export default function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6
    }
  }, [])

  return (
    <section id="home" className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Video / Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_FALLBACK}
          alt="Luxury Mediterranean dining"
          className="w-full h-full object-cover scale-105"
          style={{ filter: 'brightness(0.6) saturate(0.8)' }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 hero-overlay" />

      {/* Side accent lines */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.4, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-8 md:left-16 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-solis-accent/40 to-transparent z-20 origin-top"
      />

      {/* Hero Content */}
      <div className="relative z-20 section-container w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-8 h-px bg-solis-accent" />
            <span className="eyebrow">Santorini, Greece</span>
            <div className="w-8 h-px bg-solis-accent" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="display-heading text-5xl md:text-7xl lg:text-8xl mb-6 text-white"
            style={{ textShadow: '0 2px 40px rgba(0,0,0,0.4)' }}
          >
            Mediterranean
            <br />
            <em className="not-italic text-gradient-gold">Dining</em>{' '}
            Reimagined
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="w-16 h-px bg-solis-accent mb-8 origin-left"
          />

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="font-body font-light text-base md:text-lg text-white/70 max-w-xl leading-relaxed mb-12"
          >
            Experience handcrafted Mediterranean cuisine, world-class hospitality,
            premium wines, and unforgettable sunset dining overlooking the
            Santorini coastline.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#reservations" className="btn-primary">
              Reserve Your Experience
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M1 7H13M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#menu" className="btn-ghost">
              Explore The Menu
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="eyebrow text-[10px] text-white/40">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-solis-accent/60 to-transparent"
        />
      </motion.div>

      {/* Bottom location badge */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-10 right-8 md:right-16 z-20 hidden md:flex flex-col items-end gap-1"
      >
        <span className="font-body text-xs text-white/40 tracking-widest uppercase">Open Daily</span>
        <span className="font-display text-sm text-white/70">5:00 PM – 12:00 AM</span>
      </motion.div>
    </section>
  )
}
