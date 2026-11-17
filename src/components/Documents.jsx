import { FiEye } from 'react-icons/fi';
import { FaFilePdf } from 'react-icons/fa';
import { documents } from '../data/portfolio.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function Documents() {
  return (
    <section id="documents" className="section documents">
      <div className="container">
        <SectionHeading
          eyebrow="Credentials"
          title="My"
          highlight="Documents"
          subtitle="Certificates and experience letters."
        />
        <div className="documents-grid">
          {documents.map((doc, i) => (
            <Reveal key={doc.title} className="card document-card" delay={i * 80}>
              <div className="document-icon">
                <FaFilePdf />
              </div>
              <h3>{doc.title}</h3>
              <p>{doc.text}</p>
              <a href={doc.href} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                <FiEye /> View Document
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
