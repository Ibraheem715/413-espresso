'use client'
import { m } from 'framer-motion'

const cards = [
  {
    num: 'No. 01',
    name: '4:13 Rocanilla',
    desc: 'Our namesake. Lightning rock vanilla latte — smooth, signature, and the drink that started it all. Available hot or iced.',
    badge: 'Our Signature',
  },
  {
    num: 'No. 02',
    name: 'Horchata Latte',
    desc: 'Espresso poured over our homemade horchata. Cinnamon-forward, lighter than dairy, sits easy on the morning stomach.',
    badge: 'House-Made',
  },
  {
    num: 'No. 03',
    name: 'Churro Latte',
    desc: 'Cinnamon, sugar, espresso, and steamed milk — like a warm churro you can sip. Comfort in a cup, every season.',
    badge: 'Local Favorite',
  },
]

const ease: [number, number, number, number] = [0.2, 0.8, 0.2, 1]

export default function SignatureMenu() {
  return (
    <section className="menu" id="menu">
      <m.div
        className="menu-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease }}
      >
        <div className="section-label">Signature Drinks</div>
        <h2>
          What we're <em>known for.</em>
        </h2>
        <p>
          The full menu lives at the window — but these three are the ones folks
          drive across town for.
        </p>
      </m.div>

      <div className="menu-grid">
        {cards.map((card, i) => (
          <m.div
            key={card.num}
            className="menu-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: i * 0.15, ease }}
            whileHover={{
              y: -8,
              boxShadow: '0 30px 60px rgba(0,0,0,0.25)',
              transition: { type: 'spring', stiffness: 300, damping: 22 },
            }}
          >
            <div className="card-num">{card.num}</div>
            <h3>{card.name}</h3>
            <p className="ingredients">{card.desc}</p>
            <span className="badge">{card.badge}</span>
          </m.div>
        ))}
      </div>

      <m.div
        className="menu-footer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4, ease }}
      >
        <p>
          Plus matcha, cold brew, energy drinks, lemonades, and Italian sodas —
          see the full board with pricing below.
        </p>
        <a
          href="#full-menu"
          className="btn-primary"
          style={{ marginTop: '8px' }}
        >
          See full menu & prices →
        </a>
      </m.div>
    </section>
  )
}
