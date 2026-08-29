import { useState } from 'react'
import { projects, projectCategories } from '../data/content.js'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

/* Stylized preview shown until a real project image is added.
   To use a real screenshot, set `image: '/images/projects/your-shot.jpg'`
   in src/data/content.js. */
function ProjectPreview({ project }) {
  const [imgError, setImgError] = useState(false)

  if (project.image && !imgError) {
    return (
      <div className="project-card__media">
        <img
          src={project.image}
          alt={`${project.title} — project preview`}
          loading="lazy"
          onError={() => setImgError(true)}
        />
      </div>
    )
  }

  return (
    <div className="project-card__media project-card__media--ph" aria-hidden="true">
      <div className="project-ph">
        <div className="project-ph__grid" />
        <span className="project-ph__code">{'<build />'}</span>
        <span className="project-ph__title">{project.title}</span>
        <span className="project-ph__note">Preview coming soon — add an image in content.js</span>
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="card project-card">
      <div className="project-card__media-wrap">
        <ProjectPreview project={project} />
        {project.placeholder && <span className="project-card__badge">Placeholder</span>}
        <span className="project-card__category">{project.category}</span>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        <ul className="project-card__tags">
          {project.tags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>

        <div className="project-card__actions">
          {project.liveUrl ? (
            <a className="btn btn--primary btn--sm" href={project.liveUrl} target="_blank" rel="noreferrer noopener">
              View Project
              <Icon name="external" size={14} />
            </a>
          ) : (
            <span className="btn btn--disabled btn--sm" aria-disabled="true" title="Live link will appear here for real projects">
              View Project
            </span>
          )}
          {project.repoUrl && (
            <a
              className="btn btn--ghost btn--sm"
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Icon name="github" size={15} />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHeading
          kicker="// portfolio"
          title="Selected Projects"
          text="Placeholder projects are shown below and clearly marked — real work will replace these as they ship."
        />

        <Reveal className="projects__filters">
          <div className="filter-bar" role="tablist" aria-label="Filter projects by category">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={filter === cat}
                className={`filter-pill ${filter === cat ? 'is-active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="projects__grid">
          {visible.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {visible.length === 0 && <p className="projects__empty">No projects in this category yet.</p>}
      </div>
    </section>
  )
}
