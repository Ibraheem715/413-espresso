'use client'
import { m } from 'framer-motion'

const ease: [number, number, number, number] = [0.2, 0.8, 0.2, 1]

export default function Visit() {
  return (
    <section className="visit" id="visit">
      <div className="visit-grid">
        <m.div
          className="visit-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease }}
        >
          <div className="section-label">Come See Us</div>
          <h2>
            The truck is <em>parked & pouring.</em>
          </h2>

          <div className="info-block">
            <h4>Address</h4>
            <p>
              14325 Potranco Rd
              <br />
              San Antonio, TX 78245
            </p>
            <p className="small">
              In the HEB lot, near Potranco & 211. Drive-thru only — pull up,
              place your order, head out.
            </p>
          </div>

          <div className="info-block">
            <h4>Hours</h4>
            <ul className="hours-list">
              <li>
                <span className="day">Mon — Wed</span>
                <span className="time">6:00 AM — 3:00 PM</span>
              </li>
              <li>
                <span className="day">Thu — Fri</span>
                <span className="time">6:00 AM — 7:00 PM</span>
              </li>
              <li>
                <span className="day">Sat — Sun</span>
                <span className="time">7:00 AM — 7:00 PM</span>
              </li>
            </ul>
            <p className="small">
              Open seven days a week. Late-night caffeine on Thursdays, Fridays,
              and weekends.
            </p>
          </div>

          <div className="info-block">
            <h4>Catering & Events</h4>
            <p>
              Birthdays, church events, office mornings — we bring the truck.
              Reach out and let's talk.
            </p>
          </div>
        </m.div>

        <m.a
          className="map-card"
          href="https://maps.google.com/?q=14325+Potranco+Rd+San+Antonio+TX"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          whileHover={{
            scale: 1.02,
            transition: { type: 'spring', stiffness: 300, damping: 24 },
          }}
        >
          <div className="map-pin">4:13</div>
          <div className="map-card-content">
            <div className="label">Find the truck</div>
            <h3>
              Potranco
              <br />& 211
            </h3>
            <p>Drive-thru window. Pull up, order, smile, leave caffeinated.</p>
            <span>Open in Google Maps →</span>
          </div>
        </m.a>
      </div>
    </section>
  )
}
