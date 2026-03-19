import { useState } from 'react'
import styles from './Projects.module.css'

const PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack shopping application with product catalog, cart, authentication, payment integration (Stripe), and an admin dashboard for inventory management.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
    accent: '#6366f1',
    type: 'Full-Stack',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Manager App',
    description: 'A productivity Kanban tool with drag-and-drop boards, real-time collaboration, team workspaces, and deadline reminders.',
    tags: ['React', 'Firebase', 'Tailwind', 'DnD Kit'],
    accent: '#0ea5e9',
    type: 'Frontend',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A responsive weather app using the OpenWeather API with 7-day forecasts, location search, interactive charts, and animated weather conditions.',
    tags: ['JavaScript', 'OpenWeather API', 'Chart.js', 'CSS'],
    accent: '#22c55e',
    type: 'Frontend',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
  {
    id: 4,
    title: 'REST API Service',
    description: 'A scalable RESTful API for a blog platform with JWT auth, rate limiting, pagination, image upload, and comprehensive Swagger docs.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Swagger'],
    accent: '#f59e0b',
    type: 'Backend',
    github: 'https://github.com',
    live: null,
    featured: false,
  },
  {
    id: 5,
    title: 'Dev Portfolio CMS',
    description: 'A headless CMS built for developers to manage their portfolio content via a simple API, with Markdown support and image optimization.',
    tags: ['Next.js', 'MDX', 'Tailwind', 'Vercel'],
    accent: '#a855f7',
    type: 'Full-Stack',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
  {
    id: 6,
    title: 'CLI Dev Tools',
    description: 'A collection of command-line tools that automate repetitive dev tasks — scaffolding, git hooks, and code formatting setup.',
    tags: ['Node.js', 'Commander.js', 'Shell', 'npm'],
    accent: '#ec4899',
    type: 'Backend',
    github: 'https://github.com',
    live: null,
    featured: false,
  },
]

const FILTERS = ['All', 'Frontend', 'Backend', 'Full-Stack']

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.type === active)

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">

        <div className="reveal" style={{ textAlign: 'center' }}>
          <p className="section-label">03. Projects</p>
          <h2 className="section-title">Things I've <span>Built</span></h2>
          <p className={styles.subtitle}>A selection of real-world projects I've worked on</p>
        </div>

        {/* Filter tabs */}
        <div className={`${styles.filters} reveal`} style={{ transitionDelay: '0.1s' }}>
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`${styles.filterBtn} ${active === f ? styles.filterBtnActive : ''}`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className={styles.grid}>
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`${styles.card} ${project.featured ? styles.cardFeatured : ''} reveal`}
      style={{ transitionDelay: `${index * 0.08}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top accent line */}
      <div
        className={styles.accentLine}
        style={{ background: project.accent, opacity: hovered ? 1 : 0.5 }}
      />

      <div className={styles.cardHeader}>
        <div className={styles.cardIcon} style={{ color: project.accent, background: project.accent + '18', border: `1px solid ${project.accent}30` }}>
          <FolderIcon />
        </div>
        <div className={styles.cardLinks}>
          <a href={project.github} target="_blank" rel="noreferrer" className={styles.iconLink} aria-label="GitHub">
            <GitHubIcon />
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className={styles.iconLink} aria-label="Live demo">
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>

      <h3 className={styles.cardTitle}>{project.title}</h3>
      <p className={styles.cardDesc}>{project.description}</p>

      <div className={styles.cardFooter}>
        <div className={styles.tags}>
          {project.tags.slice(0, 4).map(tag => (
            <span key={tag} className={styles.tag} style={{ color: project.accent, background: project.accent + '14', borderColor: project.accent + '25' }}>
              {tag}
            </span>
          ))}
        </div>
        <span className={styles.type}>{project.type}</span>
      </div>
    </div>
  )
}

function FolderIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
    </svg>
  )
}
function GitHubIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}
function ExternalIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
    </svg>
  )
}
