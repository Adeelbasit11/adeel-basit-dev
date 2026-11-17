import { FiMail } from 'react-icons/fi';
import { about, profile } from '../data/portfolio.js';
import Reveal from './Reveal.jsx';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-inner">
        <Reveal className="about-img" direction="right">
          <div className="about-img-frame">
            <img src={profile.photo} alt={`Portrait of ${profile.name}`} loading="lazy" width="853" height="860" />
          </div>
        </Reveal>

        <Reveal className="about-content" direction="left" delay={100}>
          <span className="eyebrow">Get to know me</span>
          <h2>
            About <span className="gradient-text">Me</span>
          </h2>
          <h3>{about.title}!</h3>
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <ul className="about-details">
            {about.details.map((d) => (
              <li key={d.label}>
                <span>{d.label}</span>
                <strong>{d.value}</strong>
              </li>
            ))}
          </ul>

          <div className="about-actions">
            <a href="#contact" className="btn btn-primary">
              <FiMail /> Let&apos;s Talk
            </a>
            <a href="#documents" className="btn btn-outline">
              My Certificates
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
