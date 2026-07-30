import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Wordmark from './Wordmark.jsx';

const LINKS = [
  { to: '/portfolio',  label: 'Portfolio'  },
  { to: '/referenzen', label: 'Referenzen' },
  { to: '/jobs',       label: 'Jobs'       },
  { to: '/ueber-uns',  label: 'Über uns'   },
];

export default function Nav({ contactEmail = 'anfrage@pub.tech' }) {
  const [open,    setOpen]    = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      {/* ── Top bar ─── */}
      <nav className={[
        'nav-bar',
        scrolled && !open && 'nav-bar--scrolled',
        open && 'nav-bar--open',
      ].filter(Boolean).join(' ')}>

        <NavLink className="nav-bar__logo" to="/" aria-label="pub.tech — Startseite" onClick={close}>
          <Wordmark />
        </NavLink>

        <button
          className="nav-bar__toggle"
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
        >
          <span className="nav-bar__toggle-label">{open ? 'Schließen' : 'Menu'}</span>
          <span className={`nav-bar__toggle-icon${open ? ' is-open' : ''}`} aria-hidden="true">
            <span /><span />
          </span>
        </button>
      </nav>

      {/* ── Fullscreen panel ─── */}
      <div className={`nav-panel${open ? ' nav-panel--open' : ''}`} aria-hidden={!open}>
        <div className="nav-panel__glow" aria-hidden="true" />

        <nav className="nav-panel__links">
          {LINKS.map(({ to, href, label, end }) =>
            href ? (
              <a key={label} href={href} className="nav-panel__link" tabIndex={open ? 0 : -1} onClick={close}>
                {label}
              </a>
            ) : (
              <NavLink key={to} to={to} end={end}
                className={({ isActive }) => `nav-panel__link${isActive ? ' is-active' : ''}`}
                tabIndex={open ? 0 : -1} onClick={close}
              >
                {label}
              </NavLink>
            )
          )}
        </nav>

        <div className="nav-panel__foot">
          <p className="nav-panel__foot-label">Kontakt</p>
          <a className="nav-panel__email" href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </div>
      </div>
    </>
  );
}
