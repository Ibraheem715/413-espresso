'use client'
import { m } from 'framer-motion'

export default function Footer() {
  return (
    <m.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="footer-grid">
        <div className="footer-brand">
          <h3>4:13 Espresso</h3>
          <p>
            Family-owned drive-thru coffee truck on Potranco Rd. Pulling shots,
            pouring kindness — one cup at a time.
          </p>
        </div>
        <div className="footer-col">
          <h4>Visit</h4>
          <ul>
            <li><a href="#visit">14325 Potranco Rd</a></li>
            <li><a href="#visit">Hours</a></li>
            <li><a href="#visit">Get directions</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Follow</h4>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/413coffeeshop/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/p/413-Espresso-Coffee-Shop-100078933736837/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.yelp.com/biz/4-13-espresso-coffee-shop-no-title"
                target="_blank"
                rel="noopener noreferrer"
              >
                Yelp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 4:13 Espresso Coffee Shop LLC. All rights reserved.</span>
        <span
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: '18px',
            color: 'var(--gold)',
          }}
        >
          Philippians 4:13
        </span>
      </div>
    </m.footer>
  )
}
