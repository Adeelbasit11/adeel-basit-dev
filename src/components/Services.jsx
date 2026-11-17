import { services } from '../data/portfolio.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <SectionHeading
          eyebrow="What I offer"
          title="My"
          highlight="Services"
          subtitle="End-to-end web development — design, development, launch and support."
        />
        <div className="services-grid">
          {services.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} className="card service-card" delay={(i % 3) * 100}>
              <div className="service-icon">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
