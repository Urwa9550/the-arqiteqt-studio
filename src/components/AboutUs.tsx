import './AboutUs.css'

export default function AboutUs() {
  return (
    <div className="about section section--alt">
      <div className="container">
        <div className="about__layout">
          {/* Left column */}
          <div className="about__left fade-in">
            <span className="label">Who We Are</span>
            <div className="divider" />
            <h2 className="about__title">About Us</h2>
            <p className="about__lead">
              The Arqiteqt is a studio of architects, interior designers, and project managers united by a singular belief: that great design enriches every aspect of life.
            </p>
            <p className="about__body">
              Founded with an ambition to create work of enduring quality, we bring together expertise across architecture, luxury interiors, and construction to offer a seamless, full-service experience. Our projects range from intricate refurbishments of listed buildings to ground-up contemporary residences, each approached with the same exacting standards.
            </p>
            <p className="about__body">
              We are a studio that listens first. No project begins with a predetermined style — each commission is shaped entirely around your vision, your way of living, and the particular character of the place.
            </p>

            {/* Instagram link */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="about__instagram"
              aria-label="Follow The Arqiteqt on Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="5"/>
                <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/>
              </svg>
              <span>@thearqiteqt</span>
            </a>
          </div>

          {/* Right column — image grid */}
          <div className="about__right fade-in">
            <div className="about__img-grid">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80"
                alt="Studio at work"
                width={700}
                height={900}
                loading="lazy"
                decoding="async"
                className="about__img about__img--tall"
              />
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=700&q=80"
                alt="Design process"
                width={700}
                height={460}
                loading="lazy"
                decoding="async"
                className="about__img"
              />
              <img
                src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=700&q=80"
                alt="Completed project"
                width={700}
                height={460}
                loading="lazy"
                decoding="async"
                className="about__img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}