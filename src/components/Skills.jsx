import { professionalSkills, technicalSkills, tools } from '../data/portfolio.js';
import useInView from '../hooks/useInView.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

const RADIUS = 52;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function SkillBar({ name, level, icon: Icon, color, animate }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar-head">
        <span className="skill-name">
          <Icon style={{ color }} aria-hidden="true" /> {name}
        </span>
        <span className="skill-level">{level}%</span>
      </div>
      <div
        className="skill-track"
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={name}
      >
        <div className="skill-fill" style={{ width: animate ? `${level}%` : 0 }} />
      </div>
    </div>
  );
}

function RadialSkill({ name, level, animate }) {
  const offset = animate ? CIRCUMFERENCE * (1 - level / 100) : CIRCUMFERENCE;
  return (
    <div className="radial-skill">
      <div className="radial-chart">
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <circle className="radial-track" cx="60" cy="60" r={RADIUS} />
          <circle
            className="radial-progress"
            cx="60"
            cy="60"
            r={RADIUS}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          />
        </svg>
        <span className="radial-value">{level}%</span>
      </div>
      <span className="radial-name">{name}</span>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section id="skills" className="section skills">
      {/* Shared gradient for all radial charts */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="radialGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00eeff" />
            <stop offset="100%" stopColor="#7b5cff" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container">
        <SectionHeading eyebrow="My expertise" title="My" highlight="Skills" />

        <div className="skills-grid" ref={ref}>
          <Reveal className="card skills-card" direction="right">
            <h3 className="card-title">Technical Skills</h3>
            {technicalSkills.map((s) => (
              <SkillBar key={s.name} {...s} animate={inView} />
            ))}
          </Reveal>

          <Reveal className="card skills-card" direction="left" delay={100}>
            <h3 className="card-title">Professional Skills</h3>
            <div className="radial-grid">
              {professionalSkills.map((s) => (
                <RadialSkill key={s.name} {...s} animate={inView} />
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="tools" delay={100}>
          <h3 className="tools-title">Technologies I Work With</h3>
          {/* Infinite marquee: the list is rendered twice and the track slides by -50% */}
          <div className="marquee">
            <div className="marquee-track">
              {[0, 1].map((copy) => (
                <ul className="tools-list" key={copy} aria-hidden={copy === 1 ? 'true' : undefined}>
                  {tools.map(({ name, icon: Icon, color }) => (
                    <li key={name}>
                      <Icon aria-hidden="true" style={{ color }} /> {name}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
