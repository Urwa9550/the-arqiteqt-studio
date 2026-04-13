import { useState, FormEvent, ChangeEvent } from 'react'
import './Contact.css'

interface FormData {
  name: string
  email: string
  project: string
  message: string
}

interface Errors {
  name?: string
  email?: string
  message?: string
}

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    project: '',
    message: '',
  })

  const validateForm = (): boolean => {
    const newErrors: Errors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (errors[name as keyof Errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call - replace with your actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData)

      setSent(true)
      setFormData({ name: '', email: '', project: '', message: '' })

      // Reset after 5 seconds
      setTimeout(() => setSent(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrors({ message: 'Failed to send message. Please try again.' })
    } finally {
      setIsLoading(false)
    }
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
                <dt className="label">Phone</dt>
                <dd>
                  <a href="tel:+441234567890" className="contact__link">
                    +44 (0) 123 456 7890
                  </a>
                </dd>
              </div>
              <div className="contact__detail-row">
                <dt className="label">Instagram</dt>
                <dd>
                  <a href="https://www.instagram.com/the.arqiteqt.pk" target="_blank" rel="noopener noreferrer" className="contact__link">
                    @The.Arqiteqt
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="contact__form-wrap fade-in">
            {sent ? (
              <div className="contact__success" role="alert">
                <svg className="contact__success-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <p className="contact__success-title">Thank you.</p>
                <p className="contact__success-body">We will be in touch shortly.</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="project" className="form-label">Project Type</label>
                  <select
                    id="project"
                    name="project"
                    className="form-input"
                    value={formData.project}
                    onChange={handleChange}
                    disabled={isLoading}
                  >
                    <option value="">Select a service</option>
                    <option value="architecture">Architecture</option>
                    <option value="interior-design">Luxury Interior Design</option>
                    <option value="exterior-design">Exterior Design</option>
                    <option value="concept-completion">Concept to Completion</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project..."
                    className={`form-input form-textarea ${errors.message ? 'form-input--error' : ''}`}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className={`contact__btn ${isLoading ? 'contact__btn--loading' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="contact__btn-spinner" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Enquiry
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}