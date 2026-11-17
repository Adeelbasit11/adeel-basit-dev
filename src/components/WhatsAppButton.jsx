import { FaWhatsapp } from 'react-icons/fa';
import { profile } from '../data/portfolio.js';

const message = "Hi Adeel! I visited your portfolio and I'd like to discuss a project.";

export default function WhatsAppButton() {
  const number = profile.phone.replace(/\D/g, '');
  return (
    <a
      href={`https://wa.me/${number}?text=${encodeURIComponent(message)}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      {/* Sound-wave rings that pulse out every few seconds */}
      <span className="wa-wave" aria-hidden="true" />
      <span className="wa-wave" aria-hidden="true" />
      <span className="wa-icon">
        <FaWhatsapp aria-hidden="true" />
      </span>
      <span className="wa-tooltip">Chat on WhatsApp</span>
    </a>
  );
}
