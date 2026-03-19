import styles from './About.module.css'

const FACTS = [
  { label: 'Name',      value: 'Your Name' },
  { label: 'Role',      value: 'Software Developer' },
  { label: 'Location',  value: 'Your City, Country' },
  { label: 'Education', value: 'BSc Computer Science' },
  { label: 'Email',     value: 'you@email.com' },
  { label: 'Status',    value: 'Open to Work ✓' },
]

const STATS = [
  { number: '3+',  label: 'Years Experience' },
  { number: '20+', label: 'Projects Built' },
  { number: '10+', label: 'Technologies' },
  { number: '5+',  label: 'Happy Clients' },
]

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">

        <div className="reveal">
          <p className="section-label">01. About Me</p>
          <h2 className="section-title">Who I <span>am</span></h2>
        </div>

        <div className={styles.grid}>
          {/* Left — text */}
          <div className={`${styles.textCol} reveal`} style={{ transitionDelay: '0.1s' }}>
            <p className={styles.para}>
              Hey there! I'm a <strong>Software Developer</strong> with a passion for
              crafting clean, efficient, and user-centered web applications. I thrive at
              the intersection of logic and creativity — turning complex requirements into
              elegant, performant solutions.
            </p>
            <p className={styles.para}>
              My journey in Computer Science has given me a strong foundation in
              algorithms, data structures, and software engineering principles. I love
              learning new technologies and applying them to real-world problems that
              make a difference.
            </p>
            <p className={styles.para}>
              When I'm not coding, you'll find me contributing to open source,
              reading tech blogs, or building side projects that challenge my skills.
            </p>

            <div className={styles.factsGrid}>
              {FACTS.map(({ label, value }) => (
                <div key={label} className={styles.fact}>
                  <span className={styles.factLabel}>{label}</span>
                  <span className={styles.factValue}>{value}</span>
                </div>
              ))}
            </div>

            <a href="/resume.pdf" download className={styles.resumeBtn}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              Download Resume
            </a>
          </div>

          {/* Right — stats */}
          <div className={`${styles.statsCol} reveal`} style={{ transitionDelay: '0.2s' }}>
            <div className={styles.statsGrid}>
              {STATS.map(({ number, label }) => (
                <div key={label} className={styles.statCard}>
                  <span className={styles.statNumber}>{number}</span>
                  <span className={styles.statLabel}>{label}</span>
                </div>
              ))}
            </div>

            {/* Terminal card */}
            <div className={styles.terminal}>
              <div className={styles.terminalBar}>
                <span className={styles.dot} style={{ background: '#ef4444' }} />
                <span className={styles.dot} style={{ background: '#f59e0b' }} />
                <span className={styles.dot} style={{ background: '#22c55e' }} />
                <span className={styles.terminalTitle}>about.js</span>
              </div>
              <div className={styles.terminalBody}>
                <p><span className={styles.kw}>const</span> <span className={styles.var}>developer</span> = {'{'}</p>
                <p>&nbsp;&nbsp;<span className={styles.key}>name</span>: <span className={styles.str}>"Your Name"</span>,</p>
                <p>&nbsp;&nbsp;<span className={styles.key}>role</span>: <span className={styles.str}>"Software Developer"</span>,</p>
                <p>&nbsp;&nbsp;<span className={styles.key}>loves</span>: [<span className={styles.str}>"coding"</span>, <span className={styles.str}>"coffee"</span>],</p>
                <p>&nbsp;&nbsp;<span className={styles.key}>available</span>: <span className={styles.bool}>true</span>,</p>
                <p>{'}'}</p>
                <p className={styles.comment}>// Let's build something great!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
