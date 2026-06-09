import React from 'react'
import { motion } from 'framer-motion'

const palette = [
  { name: 'Aegean Olive', hex: '#979265', role: 'Earth & Herb', usage: 'Accents, tags, earthy elements' },
  { name: 'Warm Sand', hex: '#e8dcc2', role: 'Neutral Ground', usage: 'Backgrounds, light surfaces' },
  { name: 'Mediterranean Sky', hex: '#b4cfe4', role: 'Coastal Air', usage: 'Cards, borders, soft highlights' },
  { name: 'Terracotta Sunset', hex: '#c26243', role: 'Warmth & Passion', usage: 'CTAs, alerts, warm accents' },
  { name: 'Deep Navy', hex: '#305c7d', role: 'Depth & Luxury', usage: 'Text, primary elements' },
]

function luminance(hex) {
  const r = parseInt(hex.slice(1,3),16)/255
  const g = parseInt(hex.slice(3,5),16)/255
  const b = parseInt(hex.slice(5,7),16)/255
  return 0.299*r + 0.587*g + 0.114*b
}

export default function MedPalette() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, color-mix(in srgb, var(--secondary) 8%, transparent), transparent)' }}
      />
      <div className="section-container relative z-10">
        <div className="text-center mb-14">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="eyebrow mb-5">
            Colour Story
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="section-heading text-4xl md:text-5xl mb-6"
          >
            Mediterranean{' '}
            <em className="font-display italic font-light" style={{ color: 'var(--accent)' }}>Modern Palette</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="body-text max-w-xl mx-auto"
          >
            Five hues distilled from the Santorini landscape — sun-bleached stone, olive groves, coastal water, terracotta rooftops, and the deep Aegean sea.
          </motion.p>
        </div>

        {/* Palette strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          {palette.map((swatch, i) => {
            const dark = luminance(swatch.hex) < 0.5
            return (
              <motion.div
                key={swatch.hex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex-1 group cursor-default"
              >
                <div
                  className="h-32 md:h-48 flex flex-col justify-end p-4 transition-transform duration-500 group-hover:-translate-y-2"
                  style={{ background: swatch.hex }}
                >
                  <span
                    className="font-body text-xs tracking-widest uppercase font-medium opacity-80"
                    style={{ color: dark ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.7)' }}
                  >
                    {swatch.hex}
                  </span>
                </div>
                <div className="pt-4 pb-2 glass-card-light px-4 py-3 mt-1">
                  <p className="font-heading text-sm mb-0.5" style={{ color: 'var(--text)' }}>{swatch.name}</p>
                  <p className="font-body text-[10px] tracking-widest uppercase mb-1" style={{ color: 'var(--accent)' }}>{swatch.role}</p>
                  <p className="font-body text-[11px]" style={{ color: 'color-mix(in srgb, var(--text) 50%, transparent)' }}>{swatch.usage}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Gradient band showing all colors together */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="h-2 w-full origin-left"
          style={{ background: 'linear-gradient(to right, #979265, #e8dcc2, #b4cfe4, #c26243, #305c7d)' }}
        />
      </div>
    </section>
  )
}
