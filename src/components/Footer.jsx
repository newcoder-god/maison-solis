import React from 'react'
import { motion } from 'framer-motion'

const footerLinks = {
  Explore: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Menu', href: '#menu' },
    { label: 'Meet the Chef', href: '#chef' },
    { label: 'Gallery', href: '#gallery' },
  ],
  Reservations: [
    { label: 'Book a Table', href: '#reservations' },
    { label: 'Private Events', href: '#contact' },
    { label: 'Wine Pairing', href: '#menu' },
    { label: 'Contact Us', href: '#contact' },
  ],
}

const socials = [
  { name: 'Instagram', href: '#', icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>) },
  { name: 'Facebook', href: '#', icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>) },
  { name: 'Pinterest', href: '#', icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.76 1.22-5.17 1.22-5.17s-.31-.62-.31-1.54c0-1.45.84-2.53 1.88-2.53.89 0 1.32.67 1.32 1.47 0 .9-.57 2.24-.87 3.48-.25 1.04.52 1.89 1.54 1.89 1.84 0 3.26-1.95 3.26-4.76 0-2.49-1.79-4.22-4.35-4.22-2.96 0-4.7 2.22-4.7 4.52 0 .9.35 1.86.78 2.38.09.1.1.2.07.3-.08.33-.26 1.04-.29 1.18-.05.19-.16.23-.37.14-1.39-.65-2.26-2.68-2.26-4.32 0-3.51 2.55-6.73 7.35-6.73 3.86 0 6.86 2.75 6.86 6.42 0 3.83-2.41 6.9-5.76 6.9-1.13 0-2.19-.59-2.55-1.28l-.69 2.6c-.25.97-.93 2.18-1.39 2.92.52.16 1.08.25 1.65.25 5.52 0 10-4.48 10-10S17.52 2 12 2z" fill="currentColor"/></svg>) },
]

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, color-mix(in srgb, var(--accent) 20%, transparent), transparent)' }}
      />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, color-mix(in srgb, var(--secondary) 10%, transparent), transparent)' }}
      />

      <div className="section-container relative z-10">
        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="glass-card p-10 md:p-14 text-center mb-20"
        >
          <p className="eyebrow mb-5" style={{ color: 'color-mix(in srgb, var(--accent) 70%, transparent)' }}>Reserve Tonight</p>
          <h3 className="font-display font-light text-3xl md:text-5xl mb-8" style={{ color: 'var(--text)' }}>
            Book Your Table <em className="italic" style={{ color: 'var(--accent)' }}>Today</em>
          </h3>
          <a href="#reservations" className="btn-primary">
            Make a Reservation
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7H13M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>

        {/* Footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-5">
              <p className="font-display tracking-[0.3em] text-lg" style={{ color: 'var(--text)' }}>MAISON</p>
              <p className="font-display tracking-[0.3em] text-lg" style={{ color: 'var(--accent)' }}>SOLIS</p>
            </div>
            <p className="font-body font-light text-xs leading-loose mb-6" style={{ color: 'color-mix(in srgb, var(--text) 50%, transparent)' }}>
              Where Elegance Meets Flavor.<br/>Santorini, Greece.
            </p>
            <div className="flex gap-4">
              {socials.map((s) => (
                <a key={s.name} href={s.href} aria-label={s.name}
                  className="transition-colors duration-300"
                  style={{ color: 'color-mix(in srgb, var(--text) 40%, transparent)' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'color-mix(in srgb, var(--text) 40%, transparent)'}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="eyebrow text-[11px] mb-6" style={{ color: 'color-mix(in srgb, var(--text) 40%, transparent)' }}>{group}</p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}
                      className="font-body text-sm transition-colors duration-300"
                      style={{ color: 'color-mix(in srgb, var(--text) 50%, transparent)' }}
                      onMouseEnter={e => e.target.style.color = 'var(--text)'}
                      onMouseLeave={e => e.target.style.color = 'color-mix(in srgb, var(--text) 50%, transparent)'}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="eyebrow text-[11px] mb-6" style={{ color: 'color-mix(in srgb, var(--text) 40%, transparent)' }}>Contact</p>
            <div className="space-y-3">
              <p className="font-body text-sm" style={{ color: 'color-mix(in srgb, var(--text) 50%, transparent)' }}>Santorini, Greece</p>
              <a href="tel:+302104567821" className="block font-body text-sm transition-colors"
                style={{ color: 'color-mix(in srgb, var(--text) 50%, transparent)' }}
                onMouseEnter={e => e.target.style.color = 'var(--text)'}
                onMouseLeave={e => e.target.style.color = 'color-mix(in srgb, var(--text) 50%, transparent)'}
              >+30 21 0456 7821</a>
              <a href="mailto:reservations@maisonsolis.com" className="block font-body text-sm transition-colors break-all"
                style={{ color: 'color-mix(in srgb, var(--text) 50%, transparent)' }}
                onMouseEnter={e => e.target.style.color = 'var(--text)'}
                onMouseLeave={e => e.target.style.color = 'color-mix(in srgb, var(--text) 50%, transparent)'}
              >reservations@maisonsolis.com</a>
              <p className="font-body text-sm" style={{ color: 'color-mix(in srgb, var(--text) 50%, transparent)' }}>Mon – Sun, 5 PM – 12 AM</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid color-mix(in srgb, var(--accent) 10%, transparent)' }}>
          <p className="font-body text-xs" style={{ color: 'color-mix(in srgb, var(--text) 25%, transparent)' }}>
            © {new Date().getFullYear()} Maison Solis. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map(l => (
              <a key={l} href="#"
                className="font-body text-xs transition-colors"
                style={{ color: 'color-mix(in srgb, var(--text) 25%, transparent)' }}
                onMouseEnter={e => e.target.style.color = 'color-mix(in srgb, var(--text) 50%, transparent)'}
                onMouseLeave={e => e.target.style.color = 'color-mix(in srgb, var(--text) 25%, transparent)'}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
