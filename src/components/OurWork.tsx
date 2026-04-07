import { useState } from 'react'
import './OurWork.css'

const PROJECTS = [
  { id: 1, title: 'Belgravia Townhouse', category: 'Architecture', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80' },
  { id: 2, title: 'Mayfair Penthouse', category: 'Interior Design', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80' },
  { id: 3, title: 'Chelsea Residence', category: 'Concept to Completion', image: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/0945b05693f13a795b7c7d40144352e7508a6da0.jpg?w=900&q=80' },
  { id: 4, title: 'Kensington Villa', category: 'Architecture', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80' },
  { id: 5, title: 'Notting Hill Mews', category: 'Interior Design', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=900&q=80' },
  { id: 6, title: 'Hampstead Heath Retreat', category: 'Build & Project Management', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80' },
]

const CATEGORIES = ['All', 'Architecture', 'Interior Design', 'Build & Project Management', 'Concept to Completion']

export default function OurWork() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === active)

  return (
    <div className="work section">
      <div className="container">
        <header className="work__header fade-in">
          <span className="label">Portfolio</span>
          <div className="divider" />
          <h2 className="work__title">Our Work</h2>
        </header>

        {/* Filter */}
        <div className="work__filters fade-in" role="tablist" aria-label="Filter projects">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              className={`work__filter${active === cat ? ' active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="work__grid">
          {filtered.map(project => (
            <article key={project.id} className="work-card fade-in">
              <div className="work-card__img-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  width={900}
                  height={600}
                  loading="lazy"
                  decoding="async"
                />
                <div className="work-card__overlay">
                  <span className="work-card__cat label">{project.category}</span>
                  <h3 className="work-card__title">{project.title}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}