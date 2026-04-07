import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <a href="#home" className="footer__logo" aria-label="Back to top">
          <svg width="28" height="28" viewBox="0 0 36 36" fill="none" aria-hidden="true">
            <path d="M18 3 L33 33 H3 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <line x1="18" y1="3" x2="18" y2="33" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
            <line x1="3" y1="33" x2="33" y2="33" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          <span>The Arqiteqt</span>
        </a>

        <p className="footer__copy">
          &copy; {new Date().getFullYear()} The Arqiteqt. All rights reserved.
        </p>

        <nav aria-label="Footer navigation">
          <ul className="footer__links" role="list">
            <li><a href="#approach" className="footer__link">Approach</a></li>
            <li><a href="#services" className="footer__link">Services</a></li>
            <li><a href="#work" className="footer__link">Work</a></li>
            <li><a href="#contact" className="footer__link">Contact</a></li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer__link" aria-label="Instagram">
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}