import { useState, useEffect, useCallback } from 'react'
import './HeroSlider.css'

const SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1800&q=85',
    caption: 'Architecture',
    headline: 'Spaces Built\nto Last',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=1800&q=85',
    caption: 'Luxury Interiors',
    headline: 'Detail Is\nDesign',
  },
  {
    id: 3,
    image: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/0945b05693f13a795b7c7d40144352e7508a6da0.jpg?w=1800&q=85',
    caption: 'Project Management',
    headline: 'Concept to\nCompletion',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1800&q=85',
    caption: 'Our Work',
    headline: 'Crafted with\nPrecision',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((index: number) => {
    if (animating) return
    setAnimating(true)
    setCurrent(index)
    setTimeout(() => setAnimating(false), 800)
  }, [animating])

  const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo])

  useEffect(() => {
    const id = setInterval(next, 5500)
    return () => clearInterval(id)
  }, [next])

  return (
    <div className="hero" role="region" aria-label="Featured projects">
      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.id}
          className={`hero__slide${i === current ? ' active' : ''}`}
          aria-hidden={i !== current}
        >
          <img
            src={slide.image}
            alt={slide.caption}
            width={1800}
            height={1000}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
          <div className="hero__overlay" />
        </div>
      ))}

      {/* Content */}
      <div className="hero__content container">
        <span className="label hero__label">{SLIDES[current].caption}</span>
        <h1 className="hero__headline">
          {SLIDES[current].headline.split('\n').map((line, i) => (
            <span key={i} className="hero__line">{line}</span>
          ))}
        </h1>
        <div className="divider" style={{ background: '#ffffff' }} />
        <p className="hero__sub">The Architectural Studio</p>
      </div>

      {/* Dots */}
      <div className="hero__dots" role="tablist" aria-label="Slide navigation">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.id}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}: ${slide.caption}`}
            className={`hero__dot${i === current ? ' active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="hero__counter" aria-live="polite" aria-atomic="true">
        <span>{String(current + 1).padStart(2, '0')}</span>
        <span className="hero__counter-sep" />
        <span>{String(SLIDES.length).padStart(2, '0')}</span>
      </div>
    </div>
  )
}