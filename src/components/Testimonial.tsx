'use client'
import { m } from 'framer-motion'

export default function Testimonial() {
  return (
    <section className="testimonial">
      <m.div
        className="test-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] }}
      >
        <div className="section-label">— from a regular</div>
        <blockquote>
          "Without a doubt, this is the{' '}
          <em>best coffee truck</em> I've ever experienced — no comparison,
          whether in Texas, Vegas, or California."
        </blockquote>
        <div className="test-author">Yelp · 5 stars</div>
      </m.div>
    </section>
  )
}
