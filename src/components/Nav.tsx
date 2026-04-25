'use client'
import { m, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 50))

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <m.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] }}
        style={{
          background: scrolled
            ? 'rgba(244, 236, 220, 0.97)'
            : 'rgba(244, 236, 220, 0.85)',
        }}
      >
        <a href="#" className="nav-logo">
          4:13<span> espresso</span>
        </a>
        <ul className="nav-links">
          <li><a href="#story">Our Story</a></li>
          <li><a href="#menu">Signatures</a></li>
          <li><a href="#full-menu">Full Menu</a></li>
          <li><a href="#visit">Find Us</a></li>
        </ul>
        <a href="#visit" className="nav-cta nav-cta-desktop">Order ahead</a>

        {/* Hamburger button — mobile only */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
        </button>
      </m.nav>

      {/* Mobile slide-out drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <m.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
            />
            <m.div
              className="mobile-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="mobile-drawer-header">
                <span className="mobile-drawer-logo">4:13 <span>espresso</span></span>
              </div>
              <ul className="mobile-nav-links">
                <li><a href="#story" onClick={closeMenu}>Our Story</a></li>
                <li><a href="#menu" onClick={closeMenu}>Signatures</a></li>
                <li><a href="#full-menu" onClick={closeMenu}>Full Menu</a></li>
                <li><a href="#visit" onClick={closeMenu}>Find Us</a></li>
              </ul>
              <a href="#visit" className="mobile-nav-cta" onClick={closeMenu}>
                Order ahead
              </a>
              <div className="mobile-drawer-footer">
                <p>Philippians 4:13</p>
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
