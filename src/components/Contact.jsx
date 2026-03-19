import { useState } from 'react'
import styles from './Contact.module.css'

const SOCIALS = [
  { label: 'GitHub',   href: 'https://github.com',   handle: '@yourhandle' },
  { label: 'LinkedIn', href: 'https://linkedin.com',  handle: 'Your Name' },
  { label: 'Twitter',  href: 'https://twitter.com',   handle: '@yourhandle' },
  { label: 'Email',    href: 'mailto:you@email.com',  handle: 'you@email.com' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate send
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    }, 1200)
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">

        <div className="reveal" style={{ textAlign: 'center' }}>
          <p className="section-label">04. Contact</p>
          <h2 className="section-title">Get in <span>Touch</span></h2>
          <p className={styles.subtitle}>
            I'm currently open to new opportunities — let's build something together.
          </p>
        </div>

        <div className={styles.grid}>

          {/* Left — info */}
          <div className={`${styles.infoCol} reveal`} style={{ transitionDelay: '0.1s' }}>
            <p className={styles.infoText}>
              Whether you have a project in mind, a job opportunity, or just want to
              say hello — my inbox is always open. I'll get back to you as soon as possible!
            </p>

            <div className={styles.socialCards}>
              {SOCIALS.map(({ label, href, handle }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className={styles.socialCard}>
                  <div className={styles.socialCardLeft}>
                    <span className={styles.socialLabel}>{label}</span>
                    <span className={styles.socialHandle}>{handle}</span>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.socialArrow}>
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className={`${styles.formCol} reveal`} style={{ transitionDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label}>Name</label>
                  <input
                    type="text" name="name"
                    value={form.name} onChange={handleChange}
                    placeholder="John Doe" required
                    className={styles.input}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Email</label>
                  <input
                    type="email" name="email"
                    value={form.email} onChange={handleChange}
                    placeholder="john@example.com" required
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Subject</label>
                <input
                  type="text" name="subject"
                  value={form.subject} onChange={handleChange}
                  placeholder="Project inquiry / Job opportunity..."
                  className={styles.input}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Message</label>
                <textarea
                  name="message"
                  value={form.message} onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  rows={6} required
                  className={styles.textarea}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className={`${styles.submitBtn} ${status === 'sent' ? styles.submitSent : ''}`}
              >
                {status === 'idle'    && 'Send Message →'}
                {status === 'sending' && 'Sending...'}
                {status === 'sent'    && '✓ Message Sent!'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
