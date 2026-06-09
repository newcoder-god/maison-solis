import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const testimonials = [
  {
    quote: 'The most beautiful dining experience in Santorini. Every detail was considered — the lighting, the service, and above all, the extraordinary food.',
    author: 'Olivia Carter',
    role: 'Travel Writer, London',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
  },
  {
    quote: 'A luxury atmosphere with world-class food and impeccable service. The truffle pasta alone was worth the flight to Santorini.',
    author: 'Daniel Moore',
    role: 'Michelin Guide Contributor',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
  },
  {
    quote: "The seafood platter was simply unforgettable. Chef Alessandro's grilled octopus is the finest I have had anywhere in the Mediterranean.",
    author: 'Sophia Williams',
    role: 'Food Critic, New York Times',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80',
  },
  {
    quote: 'Maison Solis is the rare place that lives up to every superlative thrown at it. We returned three nights in a row.',
    author: 'James Elliot',
    role: 'Hospitality Consultant',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-1 mb-6">
      {[...Array(count)].map((_, i) => (
        <span key={i} className="text-[color:var(--accent)] text-sm">★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-solis-secondary/15 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-solis-accent/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-solis-accent/20 to-transparent" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="eyebrow mb-5">
            Guest Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-heading text-4xl md:text-5xl"
          >
            Words from Our{' '}
            <em className="font-display italic font-light text-[color:var(--accent)]">Guests</em>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640:  { slidesPerView: 1 },
              768:  { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
            className="pb-14"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="glass-card p-8 md:p-10 h-full">
                  {/* Quote mark */}
                  <div className="font-display text-6xl text-[color:var(--accent)]/20 leading-none mb-2 select-none">
                    "
                  </div>

                  <Stars count={t.stars} />

                  <p className="font-display italic font-light text-lg text-[color:var(--text)]/85 leading-relaxed mb-8">
                    {t.quote}
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-[color:var(--accent)]/10">
                    <img
                      src={t.image}
                      alt={t.author}
                      className="w-12 h-12 rounded-full object-cover grayscale opacity-70"
                    />
                    <div>
                      <p className="font-body text-sm text-[color:var(--text)] font-medium">{t.author}</p>
                      <p className="font-body text-xs text-[color:var(--text)]/40 mt-0.5">{t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
