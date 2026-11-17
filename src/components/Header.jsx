import { useEffect, useState } from 'react';
import { navLinks, profile } from '../data/portfolio.js';
import useActiveSection from '../hooks/useActiveSection.js';

const sectionIds = navLinks.map((l) => l.id);

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock page scroll while the mobile menu is open; close on Escape / desktop resize.
  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth > 991 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''} ${open ? 'menu-open' : ''}`}>
      <div className="container header-inner">
        <a href="#home" className="logo" onClick={close}>
          {profile.shortName}
          <span>.</span>
        </a>

        <nav id="main-nav" className={`navbar ${open ? 'open' : ''}`} aria-label="Main navigation">
          {navLinks.map((link, i) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? 'active' : ''}
              style={{ '--i': i }}
              onClick={close}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary btn-sm nav-cta" style={{ '--i': navLinks.length }} onClick={close}>
            Hire Me
          </a>
        </nav>

        <button
          type="button"
          className={`menu-btn ${open ? 'open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`nav-backdrop ${open ? 'show' : ''}`} onClick={close} aria-hidden="true" />
    </header>
  );
}
