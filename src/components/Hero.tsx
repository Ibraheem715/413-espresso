'use client'
import { m } from 'framer-motion'
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.4 },
  },
}

const ease: [number, number, number, number] = [0.2, 0.8, 0.2, 1]

const item = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease },
  },
}

export default function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-bg-video"
        src="/0424.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />

      <m.div
        className="hero-circle"
        aria-hidden="true"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="num">4:13</div>
        <div className="esp">ESPRESSO</div>
        <div className="sub">Coffee Shop</div>
      </m.div>

      <m.div
        className="hero-content"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <m.div className="hero-eyebrow" variants={item}>
          San Antonio · Drive-Thru
        </m.div>

        <m.h1 variants={item}>
          Small truck. <em>Big heart.</em>{' '}
          <strong>Bold espresso.</strong>
        </m.h1>

        <m.p className="hero-tag" variants={item}>
          A family-owned coffee truck pulling shots and pouring kindness on
          Potranco — Mexican mochas, homemade horchata lattes, and whatever else
          the morning calls for.
        </m.p>

        <m.div className="hero-buttons" variants={item}>
          <a href="#menu" className="btn-primary">See the menu →</a>
          <a href="#visit" className="btn-secondary">Get directions</a>
        </m.div>
      </m.div>

      <div className="hero-marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>Samo Mocha</span>
          <span>Mexican Mocha</span>
          <span>Horchata Latte</span>
          <span>Cold Brew</span>
          <span>Matcha</span>
          <span>Seasonal Specials</span>
          <span>Samo Mocha</span>
          <span>Mexican Mocha</span>
          <span>Horchata Latte</span>
          <span>Cold Brew</span>
          <span>Matcha</span>
          <span>Seasonal Specials</span>
        </div>
      </div>
    </section>
  )
}
