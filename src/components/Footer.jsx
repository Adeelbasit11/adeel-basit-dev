import { navLinks, profile } from '../data/portfolio.js';
import SocialLinks from './SocialLinks.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#home" className="logo">
          {profile.shortName}
          <span>.</span>
        </a>
        <nav className="footer-nav" aria-label="Footer navigation">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`}>
              {l.label}
            </a>
          ))}
        </nav>
        <SocialLinks />
      </div>
      <p className="copyright">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
