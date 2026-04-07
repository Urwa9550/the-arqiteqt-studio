import { useState, FormEvent } from 'react'
import './Contact.css'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="contact section">
      <div className="container">
        <div className="contact__layout">
          <div className="contact__info fade-in">
            <span className="label">Get In Touch</span>
            <div className="divider" />
            <h2 className="contact__title">Contact</h2>
            <p className="contact__desc">
              We welcome enquiries from clients with projects of all scales. Please reach out to arrange an initial consultation — the first conversation is always complimentary.
            </p>

            <dl className="contact__details">
              <div className="contact__detail-row">
                <dt className="label">Studio</dt>
                <dd>London, United Kingdom</dd>
              </div>
              <div className="contact__detail-row">
                <dt className="label">Email</dt>
                <dd>
                  <a href="mailto:studio@thearqiteqt.com" className="contact__link">
                    studio@thearqiteqt.com
                  </a>
                </dd>
              </div>
              <div className="contact__detail-row">
                <dt className="label">Instagram</dt>
                <dd>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="contact__link">
                    @thearqiteqt
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="contact__form-wrap fade-in">
            {sent ? (
              <div className="contact__success" role="alert">
                <p className="contact__success-title">Thank you.</p>
                <p className="contact__success-body">We will be in touch shortly.</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input id="name" name="name" type="text" required placeholder="Your name" className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input id="email" name="email" type="email" required placeholder="your@email.com" className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="project" className="form-label">Project Type</label>
                  <select id="project" name="project" className="form-input">
                    <option value="">Select a service</option>
                    <option>Architecture</option>
                    <option>Luxury Interior Design</option>
                    <option>Build & Project Management</option>
                    <option>Concept to Completion</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea id="message" name="message" rows={5} placeholder="Tell us about your project..." className="form-input form-textarea" />
                </div>
                <button type="submit" className="contact__btn">
                  Send Enquiry
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}