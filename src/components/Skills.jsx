import { useEffect, useRef, useState } from 'react'
import styles from './Skills.module.css'

const SKILLS = [
  { name: 'React',       level: 90, category: 'Frontend' },
  { name: 'JavaScript',  level: 88, category: 'Frontend' },
  { name: 'TypeScript',  level: 75, category: 'Frontend' },
  { name: 'CSS / Tailwind', level: 85, category: 'Frontend' },
  { name: 'Node.js',     level: 80, category: 'Backend' },
  { name: 'Express',     level: 76, category: 'Backend' },
  { name: 'Python',      level: 72, category: 'Backend' },
  { name: 'SQL / NoSQL', level: 70, category: 'Backend' },
  { name: 'Git & GitHub', level: 88, category: 'Tools' },
  { name: 'REST APIs',   level: 82, category: 'Tools' },
  { name: 'Docker',      level: 60, category: 'Tools' },
  { name: 'Linux / CLI', level: 74, category: 'Tools' },
]

const TECH_BADGES = [
  'React', 'Node.js', 'TypeScript', 'Python', 'Git',
  'MongoDB', 'PostgreSQL', 'Docker', 'Linux', 'REST API',
  'Tailwind', 'Express', 'Vite', 'VS Code', 'GitHub',
]

function SkillBar({ name, level, delay }) {
  const [animated, setAnimated] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimated(true) },
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className={styles.skillRow}>
      <div className={styles.skillInfo}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillLevel}>{level}%</span>
      </div>
      <div className={styles.barTrack}>
        <div
          className={styles.barFill}
          style={{
            width: animated ? `${level}%` : '0%',
            transitionDelay: `${delay}s`,
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const categories = [...new Set(SKILLS.map(s => s.category))]

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">

        <div className="reveal" style={{ textAlign: 'center' }}>
          <p className="section-label">02. Skills</p>
          <h2 className="section-title">My <span>Tech Stack</span></h2>
          <p className={styles.subtitle}>
            Technologies and tools I work with every day
          </p>
        </div>

        {/* Category tabs with skill bars */}
        <div className={styles.categoriesGrid}>
          {categories.map((cat, ci) => (
            <div key={cat} className={`${styles.categoryCard} reveal`} style={{ transitionDelay: `${ci * 0.1}s` }}>
              <h3 className={styles.catTitle}>
                <span className={styles.catDot} />
                {cat}
              </h3>
              {SKILLS.filter(s => s.category === cat).map((skill, i) => (
                <SkillBar key={skill.name} {...skill} delay={ci * 0.1 + i * 0.08} />
              ))}
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className={`${styles.badgesSection} reveal`} style={{ transitionDelay: '0.3s' }}>
          <p className={styles.badgesLabel}>Also familiar with</p>
          <div className={styles.badges}>
            {TECH_BADGES.map((tech) => (
              <span key={tech} className={styles.badge}>{tech}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
