import styles from './Footer.module.css'

const LINKS = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

const SOCIALS = [
  { label: 'GitHub',   href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Twitter',  href: 'https://twitter.com' },
]

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer}>
      <div className="container">

        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <span className={styles.logo}>
              <span className={styles.bracket}>&lt;</span>
              YN
              <span className={styles.bracket}>/&gt;</span>
            </span>
            <p className={styles.tagline}>
              Building things for the web, one commit at a time.
            </p>
          </div>

          {/* Nav */}
          <div className={styles.navGroup}>
            <p className={styles.groupLabel}>Navigation</p>
            <ul className={styles.navList}>
              {LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={styles.footerLink}
                    onClick={(e) => { e.preventDefault(); scrollTo(href) }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className={styles.navGroup}>
            <p className={styles.groupLabel}>Find Me On</p>
            <ul className={styles.navList}>
              {SOCIALS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noreferrer" className={styles.footerLink}>
                    {label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} <span>Your Name</span>. All rights reserved.
          </p>
          <p className={styles.built}>
            Built with <span>React</span> + <span>Vite</span> ⚡
          </p>
        </div>

      </div>
    </footer>
  )
}
