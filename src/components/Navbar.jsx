import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const LINKS = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = ['about', 'skills', 'projects', 'contact']
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>

        {/* Logo */}
        <a href="#" className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className={styles.logoBracket}>&lt;</span>
          YN
          <span className={styles.logoBracket}>/&gt;</span>
        </a>

        {/* Desktop nav */}
        <nav className={styles.desktopNav}>
          {LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`${styles.navLink} ${active === href.slice(1) ? styles.navLinkActive : ''}`}
              onClick={(e) => { e.preventDefault(); handleNav(href) }}
            >
              <span className={styles.navIndex}>{'0' + (LINKS.indexOf({ label, href }) + 1)}.</span>
              {label}
            </a>
          ))}
          <a href="#contact" className={styles.ctaBtn} onClick={(e) => { e.preventDefault(); handleNav('#contact') }}>
            Hire Me
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        {LINKS.map(({ label, href }, i) => (
          <a
            key={label}
            href={href}
            className={styles.mobileLink}
            style={{ animationDelay: `${i * 0.07}s` }}
            onClick={(e) => { e.preventDefault(); handleNav(href) }}
          >
            <span className={styles.mobileIndex}>0{i + 1}.</span> {label}
          </a>
        ))}
        <a href="#contact" className={styles.mobileCta} onClick={(e) => { e.preventDefault(); handleNav('#contact') }}>
          Hire Me
        </a>
      </div>
    </header>
  )
}
