import { FiArrowRight } from 'react-icons/fi';
import { profile, projects, documents } from '../data/portfolio.js';
import useTypewriter from '../hooks/useTypewriter.js';
import SocialLinks from './SocialLinks.jsx';

export default function Hero() {
  const typed = useTypewriter(profile.typedRoles);

  return (
    <section id="home" className="hero">
      <div className="hero-glow hero-glow-1" aria-hidden="true" />
      <div className="hero-glow hero-glow-2" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-content">
          <span className="hero-badge anim anim-1">
            <span className="dot" /> Available for freelance work
          </span>
          <h3 className="anim anim-2">Hello, It&apos;s Me</h3>
          <h1 className="anim anim-3">{profile.name}</h1>
          <h3 className="hero-typed anim anim-4">
            And I&apos;m a <span className="gradient-text">{typed}</span>
            <span className="cursor" aria-hidden="true">
              |
            </span>
          </h3>
          <p className="anim anim-5">{profile.intro}</p>

          <div className="hero-actions anim anim-6">
            <a href="#projects" className="btn btn-primary">
              View My Work <FiArrowRight />
            </a>
            <a href="#about" className="btn btn-outline">
              More About Me
            </a>
          </div>

          <SocialLinks className="anim anim-7" />
        </div>

        <div className="hero-visual anim anim-img">
          <div className="hero-photo">
            <img src={profile.photo} alt={profile.name} width="853" height="860" fetchpriority="high" />
          </div>
          <div className="floating-card card-1">
            <strong>{projects.length}+</strong>
            <span>Projects</span>
          </div>
          <div className="floating-card card-2">
            <strong>{documents.length}</strong>
            <span>Certificates</span>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-indicator" aria-label="Scroll to About section">
        <span />
      </a>
    </section>
  );
}
