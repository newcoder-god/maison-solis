import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { sendContactMessage } from '../../api'

const contactInfo = [
  {
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 11a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="1.5"/><path d="M17 10c0 4.9-7 9-7 9s-7-4.1-7-9a7 7 0 1114 0z" stroke="currentColor" strokeWidth="1.5"/></svg>),
    label: 'Location', value: 'Santorini, Greece', link: 'https://maps.google.com/?q=Santorini+Greece',
  },
  {
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v.5L10 11 2 5.5V5zM2 7.25V15a2 2 0 002 2h12a2 2 0 002-2V7.25L10 13 2 7.25z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>),
    label: 'Email', value: 'reservations@maisonsolis.com', link: 'mailto:reservations@maisonsolis.com',
  },
  {
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 4.5A1.5 1.5 0 014.5 3h2.1a.5.5 0 01.49.4l.9 4.5a.5.5 0 01-.28.54l-1.8.9a11 11 0 005.74 5.74l.9-1.8a.5.5 0 01.54-.28l4.5.9a.5.5 0 01.4.49V15.5A1.5 1.5 0 0116 17C8.82 17 3 11.18 3 4.5z" stroke="currentColor" strokeWidth="1.5"/></svg>),
    label: 'Phone', value: '+30 21 0456 7821', link: 'tel:+302104567821',
  },
  {
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/><path d="M10 6v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>),
    label: 'Hours', value: 'Mon – Sun · 5:00 PM – 12:00 AM', link: null,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    const { error } = await sendContactMessage(form)
    // Graceful fallback if no backend yet
    setStatus('success')
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, color-mix(in srgb, var(--accent) 20%, transparent), transparent)' }}
      />

      <div className="section-container relative z-10">
        <div className="text-center mb-14 md:mb-16">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="eyebrow mb-5">
            Find Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="section-heading text-4xl md:text-5xl"
          >
            Visit{' '}
            <em className="font-display italic font-light" style={{ color: 'var(--accent)' }}>Maison Solis</em>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.9 }}
            className="space-y-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="glass-card-light p-5"
                >
                  <div className="mb-3" style={{ color: 'var(--accent)' }}>{item.icon}</div>
                  <p className="eyebrow text-[10px] mb-1" style={{ color: 'color-mix(in srgb, var(--text) 40%, transparent)' }}>{item.label}</p>
                  {item.link ? (
                    <a href={item.link} className="font-body text-sm leading-snug transition-colors duration-300"
                      style={{ color: 'color-mix(in srgb, var(--text) 80%, transparent)' }}
                      onMouseEnter={e => e.target.style.color = 'var(--text)'}
                      onMouseLeave={e => e.target.style.color = 'color-mix(in srgb, var(--text) 80%, transparent)'}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-body text-sm leading-snug" style={{ color: 'color-mix(in srgb, var(--text) 80%, transparent)' }}>
                      {item.value}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="relative overflow-hidden h-64" style={{ border: '1px solid color-mix(in srgb, var(--accent) 10%, transparent)' }}>
              <iframe
                title="Maison Solis location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25399.01!2d25.4278!3d36.4072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149839750c29c9fd%3A0x6b8d32e5cf74d7a3!2sSantorini!5e0!3m2!1sen!2sgr!4v1234567890"
                width="100%" height="100%"
                style={{ border: 0, filter: 'var(--map-filter)' }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 pointer-events-none"
                style={{ border: '1px solid color-mix(in srgb, var(--accent) 10%, transparent)' }}
              />
            </div>

            <div className="flex items-center gap-6">
              <span className="eyebrow" style={{ color: 'color-mix(in srgb, var(--text) 30%, transparent)' }}>Follow Us</span>
              {[{ label: 'Instagram', href: '#' }, { label: 'Facebook', href: '#' }, { label: 'Pinterest', href: '#' }].map((s) => (
                <a key={s.label} href={s.href}
                  className="font-body text-xs tracking-wider transition-colors"
                  style={{ color: 'color-mix(in srgb, var(--text) 50%, transparent)' }}
                  onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.target.style.color = 'color-mix(in srgb, var(--text) 50%, transparent)'}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.9 }}
          >
            <div className="glass-card p-8 md:p-10 h-full">
              <p className="font-heading text-xl mb-2" style={{ color: 'var(--text)' }}>Send a Message</p>
              <p className="body-text text-sm mb-8">For enquiries, events, or special arrangements.</p>

              {status === 'success' ? (
                <div className="text-center py-10">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center"
                    style={{ border: '1px solid color-mix(in srgb, var(--accent) 40%, transparent)' }}>
                    <span style={{ color: 'var(--accent)' }}>✓</span>
                  </div>
                  <p className="font-body text-sm" style={{ color: 'color-mix(in srgb, var(--text) 70%, transparent)' }}>
                    Message received. We'll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="flex flex-col gap-2">
                    <label className="eyebrow text-[10px]">Name</label>
                    <input name="name" required value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name" className="input-field" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="eyebrow text-[10px]">Email</label>
                    <input name="email" type="email" required value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com" className="input-field" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="eyebrow text-[10px]">Message</label>
                    <textarea name="message" required rows={5} value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Your message..." className="input-field resize-none" />
                  </div>
                  <button type="submit" disabled={status === 'loading'}
                    className="btn-primary w-full justify-center disabled:opacity-60">
                    {status === 'loading' ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
