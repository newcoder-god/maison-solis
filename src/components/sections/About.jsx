import React from 'react'
import { motion } from 'framer-motion'

const features = [
  { label: 'Award-Winning Chefs', icon: '◈' },
  { label: 'Premium Ingredients', icon: '◈' },
  { label: 'Luxury Sunset Atmosphere', icon: '◈' },
  { label: 'Curated Wine Experiences', icon: '◈' },
]

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[color:var(--accent)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80"
                alt="Maison Solis interior"
                className="w-full h-full object-cover image-luxury"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-solis-bg/30 to-transparent" />
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 glass-card p-6 max-w-[200px]"
            >
              <div className="font-display text-4xl font-light text-[color:var(--text)] leading-none mb-1">15</div>
              <div className="font-body text-xs text-[color:var(--accent)] tracking-widest uppercase">Years of</div>
              <div className="font-body text-xs text-[color:var(--text)]/60 tracking-widest uppercase">Culinary Excellence</div>
            </motion.div>

            {/* Decorative corner */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t border-l border-[color:var(--accent)]/40" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="eyebrow mb-5">Our Story</p>

            <h2 className="section-heading text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.05]">
              The Maison Solis{' '}
              <em className="font-display italic font-light text-[color:var(--accent)]">Experience</em>
            </h2>

            <div className="divider-line" />

            <p className="body-text text-base md:text-lg mb-8 leading-loose">
              Maison Solis is a luxury Mediterranean dining destination overlooking
              the Santorini coastline. Combining culinary artistry, elegant interiors,
              handcrafted ingredients, and unforgettable sunset views, we create
              experiences that transcend dining.
            </p>

            <p className="body-text text-sm md:text-base mb-12 leading-loose">
              Every evening, our award-winning team transforms exceptional local produce
              into a culinary narrative — rooted in Aegean tradition yet guided by a
              restless global curiosity. A table at Maison Solis is not merely a meal.
              It is a memory.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.6 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-[color:var(--accent)] text-lg">{f.icon}</span>
                  <span className="font-body text-sm text-[color:var(--text)]/70 tracking-wide">{f.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
