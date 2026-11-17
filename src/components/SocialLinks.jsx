import { socials } from '../data/portfolio.js';

export default function SocialLinks({ className = '' }) {
  return (
    <ul className={`social-links ${className}`.trim()}>
      {socials.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
}
