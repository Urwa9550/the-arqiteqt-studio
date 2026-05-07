import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import Logo from '../assets/images/logo1.png'

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
        {/* Logo */}
        <Link to="/" className="header__logo" aria-label="The Arqiteqt – Home">
          <img src={Logo} alt="The Arqiteqt Logo" className="header__logo-img" />
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