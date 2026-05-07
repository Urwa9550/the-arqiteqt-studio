import { Link } from 'react-router-dom'
import './Footer.css'
import Logo from '../assets/images/logo1.png'


export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <Link to="/" className="footer__logo" aria-label="Back to home">
          <img src={Logo} alt="The Arqiteqt Logo" />
          <span>The Arqiteqt</span>
        </Link>

        <p className="footer__copy">
          &copy; {new Date().getFullYear()} The Arqiteqt. All rights reserved.
        </p>

        <nav aria-label="Footer navigation">
          <ul className="footer__links" role="list">
            <li><Link to="/" className="footer__link">Home</Link></li>
            <li><Link to="/work" className="footer__link">Work</Link></li>
            <li><Link to="/contact" className="footer__link">Contact</Link></li>
            <li>
              <a href="https://www.instagram.com/the.arqiteqt.pk" target="_blank" rel="noopener noreferrer" className="footer__link" aria-label="Instagram">
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}