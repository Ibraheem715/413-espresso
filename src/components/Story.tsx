'use client'
import { m } from 'framer-motion'

const ease: [number, number, number, number] = [0.2, 0.8, 0.2, 1]

export default function Story() {
  return (
    <section className="story" id="story">
      <div className="story-grid">
        <m.div
          className="verse-card"
          initial={{ opacity: 0, x: -50, rotate: -3 }}
          whileInView={{ opacity: 1, x: 0, rotate: -1.5 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease }}
        >
          <div className="verse-ref">— Philippians</div>
          <p className="verse-text">
            I can do all things through Christ who strengthens me.
          </p>
        </m.div>

        <m.div
          className="story-text"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease }}
        >
          <div className="section-label">Our Story</div>
          <h2>
            It started with a verse and{' '}
            <em>a single espresso machine.</em>
          </h2>
          <p>
            4:13 Espresso is family-owned and family-run. We named it after the
            verse that carried us through the long mornings, the slow weeks, and
            every "let's try one more day."
          </p>
          <p>
            Today we're parked just off Potranco at the HEB lot, serving honest
            espresso, scratch-made horchata, and the kind of warm hello that
            makes a parking lot feel like a porch.
          </p>

          <m.div
            className="story-stats"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
          >
            <div className="stat">
              <div className="num">4.7★</div>
              <div className="lbl">Yelp Rating</div>
            </div>
            <div className="stat">
              <div className="num">1.8K+</div>
              <div className="lbl">Facebook Fans</div>
            </div>
            <div className="stat">
              <div className="num">100%</div>
              <div className="lbl">Family-Run</div>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  )
}
