import { useMemo, useState } from 'react';
import { FiExternalLink, FiFileText } from 'react-icons/fi';
import { projectFilters, projects } from '../data/portfolio.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import ProjectThumbnail from './ProjectThumbnail.jsx';

const categoryLabel = { wordpress: 'WordPress', webapp: 'Web App' };
const INITIAL_COUNT = 9;

function ProjectCard({ project }) {
  const { title, category, description, tags = [], link, caseStudy } = project;
  const href = link || caseStudy;
  const Icon = link ? FiExternalLink : FiFileText;

  return (
    <article className="project-card">
      <div className="project-media">
        <ProjectThumbnail {...project} />
        {href && (
          <a
            className="project-overlay"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title}`}
            tabIndex={-1}
          >
            <span className="overlay-icon">
              <Icon />
            </span>
            <span>{link ? 'Visit Website' : 'View Case Study'}</span>
          </a>
        )}
      </div>
      <div className="project-info">
        <span className="tag">{categoryLabel[category]}</span>
        <h3>{title}</h3>
        {description && <p className="project-desc">{description}</p>}
        {tags.length > 0 && (
          <ul className="project-tags">
            {tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="project-link">
            {link ? 'Live Preview' : 'Case Study (PDF)'} <Icon />
          </a>
        ) : (
          <span className="project-link muted">Client project</span>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHeading
          eyebrow="Portfolio"
          title="My"
          highlight="Projects"
          subtitle="A selection of websites and web applications I have designed and developed."
        />

        <Reveal className="filters" role="tablist" aria-label="Filter projects">
          {projectFilters.map((f) => {
            const count = f.id === 'all' ? projects.length : projects.filter((p) => p.category === f.id).length;
            return (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={filter === f.id}
                className={`filter-btn ${filter === f.id ? 'active' : ''}`}
                onClick={() => {
                  setFilter(f.id);
                  setShowAll(false);
                }}
              >
                {f.label} <span>{count}</span>
              </button>
            );
          })}
        </Reveal>

        <div className="projects-grid" key={filter}>
          {visible.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        {filtered.length > INITIAL_COUNT && (
          <div className="center">
            <button type="button" className="btn btn-outline" onClick={() => setShowAll((s) => !s)}>
              {showAll ? 'Show Less' : `Show All Projects (${filtered.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
