import { useState } from 'react'
import './OurWork.css'
import Project1_01 from '../assets/images/Project1_design01.png'
import Project1_02 from '../assets/images/Project1_design02.png'
// Interior design images
import Interior1 from '../assets/images/interior/in_image_1.jpg'
import Interior2 from '../assets/images/interior/in_image_2.png'
import Interior4 from '../assets/images/interior/in_lounge1.jpg'
import Interior5 from '../assets/images/interior/in_toilet1.jpg'
import Interior3 from '../assets/images/interior/br01.png'
import Interior7 from '../assets/images/interior/br02.png'
import Interior6 from '../assets/images/interior/kitchen01.jpg'
import Interior8 from '../assets/images/interior/kitchen02.jpg'
import Interior9 from '../assets/images/interior/st01.png'
import Interior10 from '../assets/images/interior/st02.png'
// Exterior design images
import Exterior1 from '../assets/images/exterior/ext_image_1.jpg'
import Exterior2 from '../assets/images/exterior/ext_image_2.jpg'
import Exterior3 from '../assets/images/exterior/ext_image_3.jpg'
import Exterior4 from '../assets/images/exterior/ext_image_4.jpeg'
import Exterior5 from '../assets/images/exterior/ext_image_5.jpg'
import Exterior6 from '../assets/images/exterior/house01.jpg'
import Exterior7 from '../assets/images/exterior/house02.jpg'
import Exterior8 from '../assets/images/exterior/residential.jpg'
import Exterior9 from '../assets/images/exterior/tiny01.jpg'
import Exterior10 from '../assets/images/exterior/tiny03.jpg'
// Concept design images
import Concept1 from '../assets/images/concept1.jpg'
import Concept2 from '../assets/images/concept2.jpg'
// Architecture design images
import Arch01 from '../assets/images/architecture/aviation01.jpg'
import Arch02 from '../assets/images/architecture/aviation03.jpg'
import Arch03 from '../assets/images/architecture/gym01.jpg'
import Arch04 from '../assets/images/architecture/gym02.jpg'
import Arch05 from '../assets/images/architecture/gym03.jpg'
import Arch06 from '../assets/images/architecture/mp01.jpg'
import Arch07 from '../assets/images/architecture/mpfarmhouse.jpg'
import Arch08 from '../assets/images/architecture/farmhouseext.jpg'
import Arch09 from '../assets/images/architecture/farmhouseext01.jpg'
import Arch10 from '../assets/images/architecture/museum01.jpg'
import Arch11 from '../assets/images/architecture/museum02.jpg'
import Arch12 from '../assets/images/architecture/resturant01.jpg'
import Arch13 from '../assets/images/architecture/resturant02.jpg'





const PROJECTS = [
  { id: 1, title: 'Belgravia Townhouse', category: 'Concept to Completion', image: Project1_01 },
  { id: 2, title: 'Mayfair Penthouse', category: 'Interior Design', image: Interior1 },
  { id: 3, title: 'Chelsea Residence', category: 'Exterior Design', image: Exterior3 },
  { id: 4, title: 'Kensington Villa', category: 'Concept to Completion', image: Project1_02 },
  { id: 5, title: 'Contemporary Exterior', category: 'Exterior Design', image: Exterior5  },
  { id: 6, title: 'Hampstead Heath Retreat', category: 'Exterior Design', image: Exterior2 },
  { id: 7, title: 'Urban Planning & Design', category: 'Architecture', image: Arch01 },
  { id: 8, title: 'Modern Architecture Suite', category: 'Architecture', image: Arch02 },
  { id: 9, title: 'Contemporary Lounge Space', category: 'Interior Design', image: Interior2 },
  { id: 10, title: 'Modern Facade Project', category: 'Exterior Design', image: Exterior4  },
  { id: 11, title: 'Luxury Lounge Design', category: 'Interior Design', image: Interior4 },
  { id: 12, title: 'Executive Bathroom Suite', category: 'Interior Design', image: Interior5 },
  { id: 13, title: 'Garden Facade Design', category: 'Exterior Design', image: Exterior1 },
  { id: 14, title: 'Kensington Villa', category: 'Concept to Completion', image: Concept1 },
  { id: 15, title: 'Kensington Villa', category: 'Concept to Completion', image: Concept2 },
  { id: 16, title: 'Modern Architecture Suite', category: 'Architecture', image: Arch03 },
  { id: 17, title: 'Modern Architecture Suite', category: 'Architecture', image: Arch04 },
  { id: 18, title: 'Modern Architecture Suite', category: 'Architecture', image: Arch05 },
  { id: 19, title: 'Modern Architecture Suite', category: 'Architecture', image: Arch06 },
  { id: 20, title: 'Modern Architecture Suite', category: 'Architecture', image: Arch07 },
  { id: 21, title: 'Modern Architecture Suite', category: 'Architecture', image: Arch08 },
  { id: 22, title: 'Modern Architecture Suite', category: 'Architecture', image: Arch09 },
  { id: 23, title: 'Modern Architecture Suite', category: 'Architecture', image: Arch10 },
  { id: 24, title: 'Modern Architecture Suite', category: 'Architecture', image: Arch11 },
  { id: 25, title: 'Modern Architecture Suite', category: 'Architecture', image: Arch12 },
  { id: 26, title: 'Modern Architecture Suite', category: 'Architecture', image: Arch13 },
  { id: 27, title: 'Hampstead Heath Retreat', category: 'Exterior Design', image: Exterior6 },
  { id: 28, title: 'Hampstead Heath Retreat', category: 'Exterior Design', image: Exterior7 },
  { id: 29, title: 'Hampstead Heath Retreat', category: 'Exterior Design', image: Exterior8 },
  { id: 30, title: 'Hampstead Heath Retreat', category: 'Exterior Design', image: Exterior9 },
  { id: 31, title: 'Hampstead Heath Retreat', category: 'Exterior Design', image: Exterior10 },
  { id: 32, title: 'Mayfair Penthouse', category: 'Interior Design', image: Interior3 },
  { id: 33, title: 'Mayfair Penthouse', category: 'Interior Design', image: Interior6 },
  { id: 34, title: 'Mayfair Penthouse', category: 'Interior Design', image: Interior7 },
  { id: 35, title: 'Mayfair Penthouse', category: 'Interior Design', image: Interior8 },
  { id: 36, title: 'Mayfair Penthouse', category: 'Interior Design', image: Interior9 },
  { id: 37, title: 'Mayfair Penthouse', category: 'Interior Design', image: Interior10 },
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