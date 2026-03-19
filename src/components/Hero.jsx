import { useState, useEffect } from 'react'
import styles from './Hero.module.css'

const ROLES = ['Software Developer', 'React Engineer', 'Full-Stack Builder', 'CS Graduate']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = ROLES[roleIndex]
    let timeout
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.gridBg}>
        <div className={styles.gridLines} />
      </div>
      <div className={styles.orb1} />
      <div className={styles.orb2} />

      <div className={styles.inner}>
        <div className={styles.content}>

          <p className={styles.greeting}>
            <span className={styles.dot} />
            Available for work
          </p>

          <h1 className={styles.heading}>
            Hi, I'm <span className={styles.name}>Your Name</span>
          </h1>

          <p className={styles.roleRow}>
            <span className={styles.prefix}>&gt; </span>
            {displayed}
            <span className={styles.cursor}>|</span>
          </p>

          <p className={styles.bio}>
            I build fast, accessible, and beautiful web applications.
            Passionate about clean code, scalable architecture, and turning
            complex problems into elegant digital solutions.
          </p>

          <div className={styles.buttons}>
            <button className={styles.btnPrimary}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View My Work →
            </button>
            <button className={styles.btnSecondary}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Me
            </button>
          </div>

          <div className={styles.links}>
            <a href="https://github.com" target="_blank" rel="noreferrer" className={styles.link}>GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={styles.link}>LinkedIn</a>
            <a href="mailto:you@email.com" className={styles.link}>you@email.com</a>
          </div>

        </div>

        <div className={styles.photoSide}>
          <div className={styles.frame}>
            <div className={styles.frameBorder} />
            <div className={styles.photoBox}>
              <svg viewBox="0 0 200 220" className={styles.avatar} xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="220" fill="#1a1a20" rx="4"/>
                <ellipse cx="100" cy="85" rx="40" ry="44" fill="#b0b0c8"/>
                <ellipse cx="100" cy="75" rx="40" ry="16" fill="#2a2a3a"/>
                <rect x="88" y="126" width="24" height="20" rx="6" fill="#a0a0b8"/>
                <path d="M55 165 Q100 148 145 165 L152 220 H48 Z" fill="#6366f150"/>
                <ellipse cx="86" cy="90" rx="6" ry="7" fill="#1a1a2e"/>
                <ellipse cx="114" cy="90" rx="6" ry="7" fill="#1a1a2e"/>
                <circle cx="88" cy="88" r="2" fill="white"/>
                <circle cx="116" cy="88" r="2" fill="white"/>
                <path d="M86 108 Q100 118 114 108" stroke="#555" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                <text x="12" y="44" fontFamily="monospace" fontSize="16" fill="#6366f1">&lt;/&gt;</text>
                <text x="155" y="195" fontFamily="monospace" fontSize="13" fill="#6366f1">{}</text>
              </svg>
              <p className={styles.photoHint}>📸 Add your photo here</p>
            </div>
          </div>

          <div className={styles.badgeA}>
            <span className={styles.dot} /> Open to Work
          </div>
          <div className={styles.badgeB}>
            ⚡ 3+ Years Exp.
          </div>
        </div>
      </div>

      <button className={styles.scrollBtn}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
        ↓
      </button>
    </section>
  )
}
