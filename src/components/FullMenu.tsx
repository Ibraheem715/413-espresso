'use client'
import { m } from 'framer-motion'

const hotCoffee = [
  { name: 'Americano', prices: ['$2.50', '$2.75', '$3.00'] },
  { name: 'Latte', prices: ['$3.50', '$3.80', '$4.10'] },
  { name: 'Mocha', prices: ['$3.60', '$3.80', '$4.10'] },
  { name: 'Breve', prices: ['$3.80', '$4.10', null] },
  { name: 'White Chocolate Mocha', prices: ['$3.50', '$3.80', '$4.10'] },
  {
    name: '4:13 Rocanilla',
    desc: 'our signature — lightning rock vanilla latte',
    prices: ['$3.50', null, null],
  },
]

const specialtyIced = [
  {
    name: '4:13 Iced Nutty Latte',
    desc: 'made with Mazapán',
    prices: ['$4.50', '$5.50', '$5.50'],
  },
  {
    name: 'Horchata Latte',
    desc: 'homemade horchata + espresso',
    prices: ['$3.80', '$4.10', '$4.50'],
  },
  {
    name: 'Churro Latte',
    desc: 'cinnamon, sugar, espresso, milk',
    prices: ['$3.80', '$4.10', '$4.50'],
  },
  { name: '4:13 Iced Rocanilla', prices: ['$4.50', '$4.50', '$5.00'] },
  { name: 'Vanilla Matcha', prices: ['$4.95', '$5.95', '$6.95'] },
  {
    name: 'Mangonizer',
    desc: 'energy drink',
    prices: ['$4.95', '$5.95', '$6.95'],
  },
  {
    name: '4:13 Energizer',
    desc: 'energy drink — kiwi, strawberry, pineapple',
    prices: ['$4.95', '$5.95', '$6.95'],
  },
]

const blended = [
  {
    name: '4:13 Nutty Latte',
    desc: 'Mazapán',
    prices: ['$4.00', '$4.50', '$5.50'],
  },
  { name: 'Horchata Latte', prices: ['$4.50', '$4.95', '$5.50'] },
  { name: 'Churro Latte', prices: ['$4.50', '$4.95', '$5.50'] },
  { name: '4:13 Rocanilla', prices: ['$4.50', '$4.95', '$5.50'] },
  { name: 'Vanilla Matcha', prices: ['$4.95', '$5.50', '$5.95'] },
]

const coldBrew = [
  { name: 'Cold Brew', prices: ['$3.45', '$3.95', '$4.25'] },
  {
    name: 'Teas, Lemonades & Italian Sodas',
    prices: ['$2.25', '$2.50', '$3.25'],
  },
  {
    name: 'Sparkle Lades',
    desc: 'sparkling water + fresh lemonade — lime, strawberry, peach',
    prices: ['$3.50', '$4.00', '$4.50'],
  },
  {
    name: 'Energy Drinks',
    desc: 'iced or blended',
    prices: ['$4.95', '$5.95', '$6.95'],
  },
]

type MenuItem = { name: string; desc?: string; prices: (string | null)[] }

function MenuSection({
  title,
  sizes,
  items,
  delay = 0,
}: {
  title: React.ReactNode
  sizes: string[]
  items: MenuItem[]
  delay?: number
}) {
  return (
    <m.div
      className="menu-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] }}
    >
      <div className="menu-section-head">
        <h3>{title}</h3>
        <div className="sizes">
          {sizes.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>
      {items.map((item) => (
        <div className="menu-row" key={item.name}>
          <div className="item">
            {item.name}
            {item.desc && <span className="desc">{item.desc}</span>}
          </div>
          <div className="prices">
            {item.prices.map((p, i) =>
              p ? (
                <span key={i}>{p}</span>
              ) : (
                <span key={i} className="dash">
                  —
                </span>
              )
            )}
          </div>
        </div>
      ))}
    </m.div>
  )
}

export default function FullMenu() {
  return (
    <section className="full-menu" id="full-menu">
      <div className="full-menu-inner">
        <m.div
          className="full-menu-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] }}
        >
          <div className="section-label">The Whole Board</div>
          <h2>
            Full <em>menu</em> & pricing.
          </h2>
          <p>
            Straight off the truck's chalkboard. Sizes and prices below — pull
            up to the window and we'll handle the rest.
          </p>
        </m.div>

        <MenuSection
          title="Hot Coffee"
          sizes={['12 oz', '16 oz', '20 oz']}
          items={hotCoffee}
          delay={0}
        />
        <MenuSection
          title={
            <>
              4:13 Specialty Drinks{' '}
              <span
                style={{
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: '0.7em',
                  color: 'var(--ink-soft)',
                }}
              >
                — iced
              </span>
            </>
          }
          sizes={['16 oz', '24 oz', '32 oz']}
          items={specialtyIced}
          delay={0.1}
        />
        <MenuSection
          title="Blended"
          sizes={['16 oz', '24 oz', '32 oz']}
          items={blended}
          delay={0.15}
        />
        <MenuSection
          title="Cold Brew · Teas · Lemonades · Italian Sodas"
          sizes={['16 oz', '24 oz', '32 oz']}
          items={coldBrew}
          delay={0.2}
        />

        <m.div
          className="menu-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          Menu items, sizes, and pricing transcribed from the truck's
          chalkboard. Seasonal specials rotate — keep an eye on our Instagram
          for what's pouring this week.
        </m.div>
      </div>
    </section>
  )
}
