import './HowWeDoIt.css'

const PILLARS = [
  {
    number: '01',
    title: 'Teamwork & Trust',
    subtitle: 'A safe pair of hands',
    body: 'We believe great architecture is born from great relationships. Every project begins with listening — understanding your vision, your lifestyle, and your aspirations. You will always have direct access to the principals leading your project.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80',
  },
  {
    number: '02',
    title: 'Size Doesn\'t Matter',
    subtitle: 'From la grande maison to a pied à terre',
    body: 'Whether your project is a grand country estate or a compact city apartment, we apply the same rigour, creativity, and attention to craft. Every project, regardless of scale, deserves exceptional design.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80',
  },
  {
    number: '03',
    title: 'Style & Convention',
    subtitle: 'A diverse approach to design',
    body: 'We do not subscribe to a single aesthetic. Our portfolio spans classical Georgian townhouses, minimalist contemporary retreats, and everything between. We design for you — not for our portfolio.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80',
  },
  {
    number: '04',
    title: 'Attention to Detail',
    subtitle: 'Detail is design',
    body: 'The difference between good and exceptional lies in the details — the precise reveal of a shadow gap, the weight of a door handle, the way light falls across a surface. We obsess over every millimetre so that you don\'t have to.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80',
  },
]

export default function HowWeDoIt() {
  return (
    <div className="approach section">
      <div className="container">
        <header className="approach__header fade-in">
          <span className="label">How We Do It</span>
          <div className="divider" />
          <h2 className="approach__title">Our Approach</h2>
        </header>

        <div className="approach__pillars">
          {PILLARS.map((pillar, i) => (
            <article
              key={pillar.number}
              className={`pillar fade-in${i % 2 === 1 ? ' pillar--reverse' : ''}`}
            >
              <div className="pillar__image-wrap">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  width={900}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="pillar__image"
                />
              </div>
              <div className="pillar__content">
                <span className="pillar__number">{pillar.number}</span>
                <h3 className="pillar__title">{pillar.title}</h3>
                <p className="pillar__subtitle label">{pillar.subtitle}</p>
                <div className="divider" />
                <p className="pillar__body">{pillar.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}