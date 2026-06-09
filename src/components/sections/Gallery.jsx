import React from 'react'
import { motion } from 'framer-motion'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80',
    alt: 'Elegant dining room interior',
    label: 'Interior',
    size: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=700&q=80',
    alt: 'Grilled octopus dish',
    label: 'Cuisine',
    size: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=700&q=80',
    alt: 'Wine selection and service',
    label: 'Wine Service',
    size: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=700&q=80',
    alt: 'Sunset terrace dining',
    label: 'Sunset Terrace',
    size: 'wide',
  },
  {
    src: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=700&q=80',
    alt: 'Chef preparing dishes',
    label: 'Kitchen',
    size: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=700&q=80',
    alt: 'Table setting elegance',
    label: 'Table Settings',
    size: 'normal',
  },
]

function GalleryItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden cursor-pointer ${
        item.size === 'tall'  ? 'row-span-2' :
        item.size === 'wide'  ? 'col-span-2' : ''
      }`}
      style={{ minHeight: item.size === 'tall' ? '520px' : '240px' }}
    >
      <img
        src={item.src}
        alt={item.alt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-108 image-luxury"
        style={{ transition: 'transform 1s ease, filter 0.6s ease' }}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-solis-bg/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

      {/* Label */}
      <div className="absolute bottom-5 left-5 flex items-center gap-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
        <div className="w-5 h-px bg-[color:var(--accent)]" />
        <span className="font-body text-xs text-white/70 tracking-widest uppercase">
          {item.label}
        </span>
      </div>
    </motion.div>
  )
}

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding relative overflow-hidden">
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="eyebrow mb-5">
            Visual Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-heading text-4xl md:text-5xl"
          >
            Moments at{' '}
            <em className="font-display italic font-light text-[color:var(--accent)]">Maison Solis</em>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((item, i) => (
            <GalleryItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
