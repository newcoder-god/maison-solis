import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'Do I need a reservation?',
    a: 'While walk-ins are occasionally possible, we strongly recommend reserving your table in advance. Maison Solis is a sought-after dining destination and tables are strictly limited each evening to preserve the intimacy and quality of your experience.',
  },
  {
    q: 'Do you offer vegetarian and dietary-specific dishes?',
    a: 'Absolutely. Our kitchen crafts dedicated vegetarian and vegan options with the same care and precision as our full menu. Please note any dietary requirements or allergies when making your reservation and our team will ensure your experience is seamlessly accommodated.',
  },
  {
    q: 'Do you host private events and exclusive dining?',
    a: 'Yes. Maison Solis offers exclusive use of our private dining room for up to 20 guests, with bespoke menus curated by Chef Alessandro. We host celebrations, corporate evenings, and intimate gatherings. Contact our team at reservations@maisonsolis.com for enquiries.',
  },
  {
    q: 'What are your opening hours?',
    a: 'We are open for dinner service Monday through Sunday, from 5:00 PM to 12:00 AM. Last reservations are accepted at 10:30 PM. We do not offer lunch service, allowing our team to dedicate the full day to preparation for each evening.',
  },
  {
    q: 'Do you offer wine pairing with your tasting menus?',
    a: 'Our Sommelier has curated an exceptional wine pairing programme to complement each course — from rare Santorini Assyrtiko to premier Bordeaux grands crus. Pairings are available on request and can be arranged when making your reservation.',
  },
]

function FAQItem({ faq, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="border-b border-[color:var(--accent)]/10 last:border-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-7 flex items-start justify-between gap-6 text-left group"
      >
        <span className="font-body text-sm md:text-base text-[color:var(--text)]/80 group-hover:text-[color:var(--text)] transition-colors duration-300 leading-snug pr-2">
          {faq.q}
        </span>
        <span className={`flex-shrink-0 w-6 h-6 flex items-center justify-center border border-[color:var(--accent)]/30 text-[color:var(--accent)] text-sm transition-all duration-300 ${isOpen ? 'rotate-45 border-[color:var(--accent)] bg-[color:var(--accent)]/10' : ''}`}>
          +
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="body-text text-sm leading-loose pb-7 max-w-2xl">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="section-padding relative">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="eyebrow mb-5">
              Questions
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="section-heading text-4xl md:text-5xl"
            >
              Frequently Asked{' '}
              <em className="font-display italic font-light text-[color:var(--accent)]">Questions</em>
            </motion.h2>
          </div>

          {/* Accordion */}
          <div>
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>

          {/* More questions */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="body-text text-sm mb-4">Have more questions?</p>
            <a href="mailto:reservations@maisonsolis.com" className="btn-ghost text-[10px]">
              Contact Our Team
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
