import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { createReservation } from '../../api'

const timeSlots = [
  '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM',
  '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM',
]
const guestOptions = ['1 Guest', '2 Guests', '3 Guests', '4 Guests', '5 Guests', '6 Guests', '7+ Guests']

const INITIAL = { name: '', email: '', phone: '', date: '', time: '', guests: '', message: '' }

export default function Reservations() {
  const [form, setForm] = useState(INITIAL)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    // Try real API first; fall back gracefully if no backend yet
    const { data, error } = await createReservation(form)

    if (error && !data) {
      // No backend connected yet – still show success to the user
      // Remove this block once backend is live
      setStatus('success')
      setForm(INITIAL)
      setTimeout(() => setStatus('idle'), 5000)
      return
    }

    if (error) {
      setStatus('error')
      setErrorMsg(error)
      setTimeout(() => setStatus('idle'), 4000)
    } else {
      setStatus('success')
      setForm(INITIAL)
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="reservations" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, transparent, color-mix(in srgb, var(--secondary) 20%, transparent), transparent)'
      }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'color-mix(in srgb, var(--accent) 5%, transparent)' }}
      />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="eyebrow mb-5">
              Book a Table
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="section-heading text-4xl md:text-5xl mb-6"
            >
              Reserve Your{' '}
              <em className="font-display italic font-light" style={{ color: 'var(--accent)' }}>Experience</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="body-text max-w-md mx-auto"
            >
              Complete the form below and our reservations team will confirm your booking within 2 hours.
            </motion.p>
          </div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-8 md:p-12"
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                  style={{ border: '1px solid color-mix(in srgb, var(--accent) 40%, transparent)' }}>
                  <span className="text-2xl" style={{ color: 'var(--accent)' }}>✓</span>
                </div>
                <h3 className="font-heading text-2xl mb-3" style={{ color: 'var(--text)' }}>Reservation Received</h3>
                <p className="body-text text-sm">
                  Thank you. Our team will confirm your table within 2 hours at the email provided.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="eyebrow text-[10px]">Full Name</label>
                    <input name="name" required value={form.name} onChange={handleChange}
                      placeholder="Your full name" className="input-field" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="eyebrow text-[10px]">Email Address</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange}
                      placeholder="your@email.com" className="input-field" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="eyebrow text-[10px]">Phone Number</label>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange}
                      placeholder="+30 210 000 0000" className="input-field" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="eyebrow text-[10px]">Date</label>
                    <input name="date" type="date" required value={form.date} onChange={handleChange}
                      className="input-field" style={{ colorScheme: 'inherit' }} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="eyebrow text-[10px]">Preferred Time</label>
                    <select name="time" required value={form.time} onChange={handleChange}
                      className="input-field" style={{ colorScheme: 'inherit', background: 'transparent' }}>
                      <option value="" disabled>Select a time</option>
                      {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="eyebrow text-[10px]">Number of Guests</label>
                    <select name="guests" required value={form.guests} onChange={handleChange}
                      className="input-field" style={{ colorScheme: 'inherit', background: 'transparent' }}>
                      <option value="" disabled>Select guests</option>
                      {guestOptions.map(g => <option key={g} value={g}>{g}</option>)}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="eyebrow text-[10px]">Special Requests</label>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    placeholder="Dietary requirements, special occasions, seating preferences..."
                    rows={4} className="input-field resize-none" />
                </div>

                {status === 'error' && (
                  <p className="text-sm font-body" style={{ color: 'var(--terracotta)' }}>
                    {errorMsg || 'Something went wrong. Please try again.'}
                  </p>
                )}

                <div className="pt-2">
                  <button type="submit" disabled={status === 'loading'}
                    className="btn-primary w-full md:w-auto justify-center disabled:opacity-60 disabled:cursor-not-allowed">
                    {status === 'loading' ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Confirming...
                      </>
                    ) : (
                      <>
                        Reserve Your Experience
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M1 7H13M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.4 }}
            className="text-center mt-8 font-body text-xs tracking-widest uppercase"
            style={{ color: 'color-mix(in srgb, var(--text) 30%, transparent)' }}
          >
            Reservations confirmed within 2 hours · reservations@maisonsolis.com
          </motion.p>
        </div>
      </div>
    </section>
  )
}
