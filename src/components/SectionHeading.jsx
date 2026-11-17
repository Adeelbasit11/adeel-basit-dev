import Reveal from './Reveal.jsx';

export default function SectionHeading({ eyebrow, title, highlight, subtitle }) {
  return (
    <Reveal className="section-heading">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      {subtitle && <p>{subtitle}</p>}
    </Reveal>
  );
}
