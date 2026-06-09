import React from 'react'
import { motion } from 'framer-motion'

const awards = [
  { year: '2023', title: 'Best Mediterranean Restaurant', body: 'Athens Culinary Awards' },
  { year: '2022', title: 'Chef of the Year', body: 'Hellenic Gastronomy Guide' },
  { year: '2021', title: 'Excellence in Fine Dining', body: 'European Restaurant Awards' },
]

export default function Chef() {
  return (
    <section id="chef" className="section-padding relative overflow-hidden">
      {/* BG accent */}
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-[color:var(--secondary)]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Right: Image (order swapped on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 lg:order-2"
          >
            <div className="relative overflow-hidden aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=900&q=80"
                alt="Chef Alessandro Marino"
                className="w-full h-full object-cover image-luxury"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-solis-bg/40 to-transparent" />
            </div>

            {/* Name plate */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 -left-4 glass-card p-5"
            >
              <p className="font-heading text-lg text-[color:var(--text)]">Alessandro Marino</p>
              <p className="font-body text-xs text-[color:var(--accent)]/80 tracking-widest uppercase mt-1">Executive Chef</p>
            </motion.div>

            {/* Decorative corner */}
            <div className="absolute -top-3 -right-3 w-12 h-12 border-t border-r border-[color:var(--accent)]/40" />
          </motion.div>

          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-1"
          >
            <p className="eyebrow mb-5">The Culinary Mind</p>

            <h2 className="section-heading text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.05]">
              Chef{' '}
              <em className="font-display italic font-light text-[color:var(--accent)]">Alessandro</em>
              <br />
              Marino
            </h2>

            <div className="divider-line" />

            <p className="body-text text-base md:text-lg mb-6 leading-loose">
              Award-winning Mediterranean chef with over 15 years of fine dining
              experience across the kitchens of Italy, Greece, and France. Trained
              under Michelin-starred masters in Lyon and Florence, Chef Alessandro
              brings a relentless pursuit of perfection to every plate.
            </p>

            <p className="body-text text-sm md:text-base mb-12 leading-loose">
              His philosophy is simple: honour the ingredient. Maison Solis's menu
              reflects a deep reverence for Santorini's volcanic terroir and Aegean
              waters — interpreted through a lens of classical French technique and
              Mediterranean soul.
            </p>

            {/* Awards */}
            <div className="space-y-4">
              <p className="eyebrow text-[color:var(--text)]/40 mb-6">Recognition</p>
              {awards.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                  className="flex items-start gap-5 pb-4 border-b border-[color:var(--accent)]/10 last:border-0"
                >
                  <span className="font-body text-xs text-[color:var(--accent)]/50 tracking-wider mt-0.5 w-10 flex-shrink-0">
                    {a.year}
                  </span>
                  <div>
                    <p className="font-body text-sm text-[color:var(--text)]/80 font-medium">{a.title}</p>
                    <p className="font-body text-xs text-[color:var(--text)]/40 mt-0.5">{a.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
