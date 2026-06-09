import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { menuData, menuCategories } from '../../data/menuData'

function MenuCard({ item, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden glass-card-light transition-all duration-500"
      style={{ '--hover-border': 'color-mix(in srgb, var(--accent) 25%, transparent)' }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--accent) 25%, transparent)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = ''}
    >
      <div className="relative h-52 overflow-hidden">
        <img src={item.image} alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 image-luxury"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, color-mix(in srgb, var(--bg) 70%, transparent), transparent)' }} />
        {item.tag && (
          <div className="absolute top-4 left-4 px-3 py-1 backdrop-blur-sm" style={{ background: 'color-mix(in srgb, var(--accent) 90%, transparent)' }}>
            <span className="font-body text-[10px] tracking-widest uppercase font-medium" style={{ color: 'var(--bg)' }}>
              {item.tag}
            </span>
          </div>
        )}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="font-display text-2xl text-white font-light">{item.price}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-heading text-lg leading-tight transition-colors duration-300"
            style={{ color: 'var(--text)' }}>
            {item.name}
          </h3>
          <span className="font-display text-lg whitespace-nowrap flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }}>
            {item.price}
          </span>
        </div>
        <p className="font-body text-sm leading-relaxed line-clamp-2"
          style={{ color: 'color-mix(in srgb, var(--text) 50%, transparent)' }}>
          {item.description}
        </p>
        <div className="mt-5 w-0 h-px group-hover:w-full transition-all duration-500"
          style={{ background: 'color-mix(in srgb, var(--accent) 60%, transparent)' }}
        />
      </div>
    </motion.div>
  )
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('starters')
  const items = menuData[activeCategory] || []

  return (
    <section id="menu" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, color-mix(in srgb, var(--secondary) 10%, transparent), transparent)' }}
      />
      <div className="section-container relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="eyebrow mb-5">
            Our Offerings
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="section-heading text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            A Journey Through{' '}
            <em className="font-display italic font-light" style={{ color: 'var(--accent)' }}>Flavour</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="body-text max-w-xl mx-auto"
          >
            Each dish is a composition — seasonal, precise, and deeply considered. Our menu changes with the rhythm of the Aegean.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex overflow-x-auto gap-0 mb-14 pb-0"
          style={{ borderBottom: '1px solid color-mix(in srgb, var(--accent) 10%, transparent)', scrollbarWidth: 'none' }}
        >
          {menuCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`menu-tab whitespace-nowrap flex-shrink-0 ${activeCategory === cat.key ? 'menu-tab-active' : 'menu-tab-inactive'}`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {items.map((item, i) => <MenuCard key={item.id} item={item} index={i} />)}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="body-text text-sm mb-6">All dishes crafted from seasonal, locally sourced ingredients.</p>
          <a href="#reservations" className="btn-ghost">Reserve Your Table Tonight</a>
        </motion.div>
      </div>
    </section>
  )
}
