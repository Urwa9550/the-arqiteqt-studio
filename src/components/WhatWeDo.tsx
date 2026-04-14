import './WhatWeDo.css'
import ConceptImg1 from '../assets/images/Project1_design01.png'
import ConceptImg2 from '../assets/images/Project1_design02.png'

const SERVICES = [
  {
    number: '01',
    title: 'Architecture',
    body: 'From initial feasibility studies and planning applications through to detailed construction drawings, we manage the full architectural process with precision and creative rigour.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
  },
  {
    number: '02',
    title: 'Luxury Interior Design',
    body: 'We create interiors of extraordinary quality — every material, every finish, every proportion considered to create spaces that are beautiful, liveable, and uniquely yours.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
  },
  {
    number: '03',
    title: 'Exterior Design',
    body: 'We design exceptional outdoor spaces — gardens, terraces, and landscapes that extend your home into nature. Thoughtful integration of architecture and environment, crafted for beauty and functionality.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
  {
    number: '04',
    title: 'Concept to Completion',
    body: 'Our end-to-end service removes the complexity of building or renovating. One studio, one point of responsibility, from the first sketch to the final snag list.',
    images: [ConceptImg1, ConceptImg2],
  },
]

export default function Services() {
  return (
    <div className="services section section--alt">
      <div className="container">
        <header className="services__header fade-in">
          <span className="label">What We Do</span>
          <div className="divider" />
          <h2 className="services__title">Our Services</h2>
        </header>

        <div className="services__grid">
          {SERVICES.map(svc => (
            <article key={svc.number} className="svc-card fade-in">
              <div className="svc-card__img-wrap">
                {svc.images ? (
                  <div className="svc-card__img-gallery" style={{ display: 'flex', gap: '8px' }}>
                    {svc.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${svc.title} ${idx + 1}`}
                        width={390}
                        height={500}
                        loading="lazy"
                        decoding="async"
                        className="svc-card__img"
                        style={{ flex: 1, objectFit: 'cover' }}
                      />
                    ))}
                  </div>
                ) : (
                  <img
                    src={svc.image}
                    alt={svc.title}
                    width={800}
                    height={500}
                    loading="lazy"
                    decoding="async"
                    className="svc-card__img"
                  />
                )}
              </div>
              <div className="svc-card__body">
                <span className="svc-card__num">{svc.number}</span>
                <h3 className="svc-card__title">{svc.title}</h3>
                <p className="svc-card__text">{svc.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}