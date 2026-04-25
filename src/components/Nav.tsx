'use client'
import { m, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 50))

  return (
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
      <a href="#visit" className="nav-cta">Order ahead</a>
    </m.nav>
  )
}
