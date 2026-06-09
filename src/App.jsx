import React, { createContext, useContext } from 'react'

import useTheme from './hooks/useTheme'
import Navbar         from './components/Navbar'
import Hero           from './components/sections/Hero'
import Stats          from './components/sections/Stats'
import About          from './components/sections/About'
import MedPalette     from './components/sections/MedPalette'
import Menu           from './components/sections/Menu'
import FeaturedDishes from './components/sections/FeaturedDishes'
import Chef           from './components/sections/Chef'
import Gallery        from './components/sections/Gallery'
import Testimonials   from './components/sections/Testimonials'
import ReservationCTA from './components/sections/ReservationCTA'
import Reservations   from './components/sections/Reservations'
import FAQ            from './components/sections/FAQ'
import Contact        from './components/sections/Contact'
import Footer         from './components/Footer'

export const ThemeContext = createContext({ theme: 'dark', toggle: () => {} })
export const useThemeCtx = () => useContext(ThemeContext)

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <div className="relative min-h-screen" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <About />
          <MedPalette />
          <Menu />
          <FeaturedDishes />
          <Chef />
          <Gallery />
          <Testimonials />
          <ReservationCTA />
          <Reservations />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}
