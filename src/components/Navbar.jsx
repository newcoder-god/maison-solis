import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useThemeCtx } from '../App'

const navLinks = [
  { href: '#about',        label: 'About' },
  { href: '#menu',         label: 'Menu' },
  { href: '#chef',         label: 'Chef' },
  { href: '#gallery',      label: 'Gallery' },
  { href: '#reservations', label: 'Reservations' },
  { href: '#contact',      label: 'Contact' },
]

function ThemeToggle({ theme, toggle }) {
  return (
    <button
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      className="relative w-12 h-6 rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-offset-1 flex-shrink-0"
      style={{
        background: theme === 'dark'
          ? 'linear-gradient(135deg, #052659 0%, #5483B3 100%)'
          : 'linear-gradient(135deg, #b4cfe4 0%, #305c7d 100%)',
        boxShadow: theme === 'dark'
          ? '0 0 12px rgba(84,131,179,0.4)'
          : '0 0 12px rgba(48,92,125,0.3)',
      }}
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
        className="absolute top-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px]"
        style={{
          left: theme === 'dark' ? '2px' : 'calc(100% - 22px)',
          background: theme === 'dark' ? '#C1E8FF' : '#f5f0e8',
        }}
      >
        {theme === 'dark' ? '🌙' : '☀️'}
      </motion.span>
    </button>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggle } = useThemeCtx()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'backdrop-blur-xl border-b py-4'
            : 'bg-transparent py-7'
        }`}
        style={scrolled ? {
          backgroundColor: 'color-mix(in srgb, var(--bg) 90%, transparent)',
          borderColor: 'color-mix(in srgb, var(--accent) 10%, transparent)',
        } : {}}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex flex-col items-start group">
            <span
              className="font-display font-light tracking-[0.3em] text-lg md:text-xl leading-none transition-all duration-300 group-hover:tracking-[0.35em]"
              style={{ color: 'var(--text)' }}
            >
              MAISON
            </span>
            <span
              className="font-display font-light tracking-[0.3em] text-lg md:text-xl leading-none transition-colors duration-300"
              style={{ color: 'var(--accent)' }}
            >
              SOLIS
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-xs tracking-widest uppercase transition-colors duration-300 relative group"
                  style={{ color: 'color-mix(in srgb, var(--text) 60%, transparent)' }}
                  onMouseEnter={e => e.target.style.color = 'var(--text)'}
                  onMouseLeave={e => e.target.style.color = 'color-mix(in srgb, var(--text) 60%, transparent)'}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-0.5 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                    style={{ background: 'var(--accent)' }}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop right: toggle + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle theme={theme} toggle={toggle} />
            <a href="#reservations" className="btn-primary text-[10px]">
              Reserve a Table
            </a>
          </div>

          {/* Mobile: toggle + hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle theme={theme} toggle={toggle} />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.5 p-2 z-50"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px transition-all"
                style={{ background: 'var(--text)' }}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-px"
                style={{ background: 'var(--text)' }}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px transition-all"
                style={{ background: 'var(--text)' }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
            style={{ backgroundColor: 'color-mix(in srgb, var(--bg) 98%, transparent)' }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 + 0.1 }}
                className="font-display text-3xl font-light tracking-widest uppercase transition-colors"
                style={{ color: 'color-mix(in srgb, var(--text) 80%, transparent)' }}
                onMouseEnter={e => e.target.style.color = 'var(--text)'}
                onMouseLeave={e => e.target.style.color = 'color-mix(in srgb, var(--text) 80%, transparent)'}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#reservations"
              onClick={handleLinkClick}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="btn-primary mt-4"
            >
              Reserve a Table
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
