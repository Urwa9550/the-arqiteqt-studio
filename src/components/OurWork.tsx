import { useState } from 'react'
import './OurWork.css'
import Project1_01 from '../assets/images/Project1_design01.png'
import Project1_02 from '../assets/images/Project1_design02.png'
import Interior1 from '../assets/images/interior/in_image_1.jpg'
import Interior2 from '../assets/images/interior/in_image_2.png'
import Interior4 from '../assets/images/interior/in_lounge1.jpg'
import Interior5 from '../assets/images/interior/in_toilet1.jpg'
import Exterior1 from '../assets/images/exterior/ext_image_1.jpg'
import Exterior2 from '../assets/images/exterior/ext_image_2.jpg'
import Exterior3 from '../assets/images/exterior/ext_image_3.jpg'
import Exterior4 from '../assets/images/exterior/ext_image_4.jpeg'
import Exterior5 from '../assets/images/exterior/ext_image_5.jpg'
import Concept1 from '../assets/images/concept1.jpg'
import Concept2 from '../assets/images/concept2.jpg'

const PROJECTS = [
  { id: 1, title: 'Belgravia Townhouse', category: 'Concept to Completion', image: Project1_01 },
  { id: 2, title: 'Mayfair Penthouse', category: 'Interior Design', image: Interior1 },
  { id: 3, title: 'Chelsea Residence', category: 'Exterior Design', image: Exterior3 },
  { id: 4, title: 'Kensington Villa', category: 'Concept to Completion', image: Project1_02 },
  { id: 5, title: 'Contemporary Exterior', category: 'Exterior Design', image: Exterior5  },
  { id: 6, title: 'Hampstead Heath Retreat', category: 'Exterior Design', image: Exterior2 },
  { id: 7, title: 'Urban Planning & Design', category: 'Architecture', image: 'https://images.unsplash.com/photo-1608303588026-884930af2559?w=900&q=80' },
  { id: 8, title: 'Modern Architecture Suite', category: 'Architecture', image: 'https://plus.unsplash.com/premium_photo-1664301098953-a2d275d3a18a?w=900&q=80' },
  { id: 9, title: 'Contemporary Lounge Space', category: 'Interior Design', image: Interior2 },
  { id: 10, title: 'Modern Facade Project', category: 'Exterior Design', image: Exterior4  },
  { id: 11, title: 'Luxury Lounge Design', category: 'Interior Design', image: Interior4 },
  { id: 12, title: 'Executive Bathroom Suite', category: 'Interior Design', image: Interior5 },
  { id: 13, title: 'Garden Facade Design', category: 'Exterior Design', image: Exterior1 },
  { id: 14, title: 'Kensington Villa', category: 'Concept to Completion', image: Concept1 },
  { id: 15, title: 'Kensington Villa', category: 'Concept to Completion', image: Concept2 },
]

const CATEGORIES = ['All', 'Architecture', 'Interior Design', 'Exterior Design', 'Concept to Completion']

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
                  alt={project.category}
                  width={900}
                  height={600}
                  loading="lazy"
                  decoding="async"
                />
                <div className="work-card__overlay">
                  <span className="work-card__cat label">{project.category}</span>
                  {/* <h3 className="work-card__title">{project.title}</h3> */}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}