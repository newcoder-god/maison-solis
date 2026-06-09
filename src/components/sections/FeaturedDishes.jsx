import React from 'react'
import { motion } from 'framer-motion'

const featured = [
  {
    id: 1,
    name: 'Flame-Grilled Octopus',
    category: 'Signature Seafood',
    price: '€52',
    description: 'Santorini octopus, smoked paprika oil, roasted peppers, Kalamata olives',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=900&q=80',
  },
  {
    id: 2,
    name: 'Truffle Cream Tagliatelle',
    category: 'Handmade Pasta',
    price: '€48',
    description: 'Hand-rolled egg pasta, black truffle, aged Parmesan, 24-hour cream sauce',
    image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=900&q=80',
  },
  {
    id: 3,
    name: 'Mediterranean Lamb Rack',
    category: 'Grilled Specials',
    price: '€72',
    description: 'Slow-roasted Greek lamb, pomegranate jus, minted yoghurt, ras el hanout',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=900&q=80',
  },
]

function FeaturedCard({ item, index, large }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden cursor-pointer ${large ? 'row-span-2' : ''}`}
      style={{ minHeight: large ? '560px' : '260px' }}
    >
      {/* Image */}
      <img
        src={item.image}
        alt={item.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 image-luxury"
        loading="lazy"
      />

      {/* Base overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-solis-bg/90 via-solis-bg/30 to-transparent" />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-[color:var(--secondary)]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Glass card info */}
      <div className="absolute bottom-0 left-0 right-0 p-7 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <div className="glass-card p-5">
          <p className="eyebrow text-[color:var(--accent)]/80 text-[10px] mb-2">{item.category}</p>
          <div className="flex items-end justify-between gap-4">
            <h3 className="font-heading text-lg md:text-xl text-[color:var(--text)] leading-tight">
              {item.name}
            </h3>
            <span className="font-display text-2xl text-[color:var(--accent)] flex-shrink-0">
              {item.price}
            </span>
          </div>
          <p className="font-body text-xs text-[color:var(--text)]/50 mt-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function FeaturedDishes() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[color:var(--accent)]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
          <div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="eyebrow mb-4">
              Signatures
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="section-heading text-4xl md:text-5xl"
            >
              Featured <em className="font-display italic font-light text-[color:var(--accent)]">Dishes</em>
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="#menu"
            className="btn-ghost text-[10px] self-start md:self-auto"
          >
            View Full Menu
          </motion.a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large first card */}
          <div className="lg:col-span-1 lg:row-span-2">
            <FeaturedCard item={featured[0]} index={0} large />
          </div>
          {/* Two smaller cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeaturedCard item={featured[1]} index={1} />
            <FeaturedCard item={featured[2]} index={2} />
          </div>
        </div>
      </div>
    </section>
  )
}
