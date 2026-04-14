import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Work', path: '/work' },
  { label: 'Contact', path: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDarkBg, setIsDarkBg] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const detectDarkBackground = () => {
      const bgColor = window.getComputedStyle(document.documentElement).backgroundColor
      const rgb = bgColor.match(/\d+/g)
      if (rgb) {
        const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000
        setIsDarkBg(brightness < 128)
      }
    }
    detectDarkBackground()
    window.addEventListener('resize', detectDarkBackground)
    return () => window.removeEventListener('resize', detectDarkBackground)
  }, [])

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}${isDarkBg ? ' header--dark-bg' : ''}`} role="banner">
      <div className="header__inner container">
        {/* SVG Logo Mark */}
        <Link to="/" className="header__logo" aria-label="The Arqiteqt – Home">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
            <path d="M18 3 L33 33 H3 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <line x1="18" y1="3" x2="18" y2="33" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
            <line x1="3" y1="33" x2="33" y2="33" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          <span className="header__brand">
            <span className="header__name">The Arqiteqt</span>
            <span className="header__caption">The Architectural Studio</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="header__nav" role="navigation" aria-label="Main navigation">
          <ul role="list">
            {NAV_LINKS.map(link => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`header__link ${location.pathname === link.path ? 'header__link--active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className={`header__burger${menuOpen ? ' open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`header__drawer${menuOpen ? ' open' : ''}`} role="dialog" aria-label="Mobile navigation">
        <nav>
          <ul role="list">
            {NAV_LINKS.map(link => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`header__drawer-link ${location.pathname === link.path ? 'header__drawer-link--active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}