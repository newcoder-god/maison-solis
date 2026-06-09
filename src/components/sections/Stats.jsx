import React from 'react'
import { motion } from 'framer-motion'
import { useCounter } from '../../hooks/useCounter'

function StatItem({ value, suffix, label, delay }) {
  const [count, ref] = useCounter(value, 2000)
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center text-center group"
    >
      <div className="flex items-end gap-0.5">
        <span className="font-display font-light text-5xl md:text-6xl text-[color:var(--text)] leading-none">
          {count}
        </span>
        <span className="font-display font-light text-3xl md:text-4xl text-[color:var(--accent)] leading-none mb-1">
          {suffix}
        </span>
      </div>
      <div className="w-8 h-px bg-[color:var(--accent)]/40 my-4 transition-all duration-500 group-hover:w-16 group-hover:bg-[color:var(--accent)]" />
      <span className="eyebrow text-[color:var(--text)]/50">{label}</span>
    </motion.div>
  )
}

const stats = [
  { value: 15, suffix: '+', label: 'Years Experience', delay: 0 },
  { value: 50, suffix: 'K+', label: 'Happy Guests', delay: 0.15 },
  { value: 5, suffix: '★', label: 'Fine Dining Experience', delay: 0.3 },
]

export default function Stats() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-solis-secondary/30 via-solis-secondary/50 to-solis-secondary/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(84,131,179,0.08)_0%,transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-solis-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-solis-accent/30 to-transparent" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((s, i) => (
            <React.Fragment key={i}>
              <StatItem {...s} />
              {i < stats.length - 1 && (
                <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-solis-accent/20 to-transparent self-stretch" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
