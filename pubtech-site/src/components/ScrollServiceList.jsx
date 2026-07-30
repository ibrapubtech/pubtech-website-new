import { useState } from 'react';

const SERVICES = [
  {
    num: '01', label: 'Engineering',
    title: 'Systeme, die skalieren.',
    body: 'Wir bauen robuste Cloud-Plattformen und skalierbare Backends — von der Architektur bis zum stabilen Betrieb.',
    accent: '#59D5DC', img: '/assets/illustrations/trim/cloud.png',
  },
  {
    num: '02', label: 'Analytics & Data',
    title: 'Insights, die entscheiden.',
    body: 'Daten in Wissen verwandeln — mit KI-gestützten Plattformen, klaren Dashboards und smarter Analyse.',
    accent: '#c084fc', img: '/assets/illustrations/trim/charts.png',
  },
  {
    num: '03', label: 'Mobile Engineering',
    title: 'Apps, die bewegen.',
    body: 'Native und Cross-Platform Apps, die Menschen begeistern — schnell, stabil und nutzerzentriert.',
    accent: '#fb923c', img: '/assets/illustrations/trim/mobile.png',
  },
  {
    num: '04', label: 'Agile Coaching',
    title: 'Teams, die wirken.',
    body: 'Veränderung begleiten, Projekte steuern und Teams stärken — mit agilen Methoden und klarer Orientierung.',
    accent: '#B5FD42', img: '/assets/illustrations/trim/compass.png',
  },
  {
    num: '05', label: 'UX Design',
    title: 'Erlebnisse, die begeistern.',
    body: 'Nutzerzentriertes Design, das funktioniert — von der ersten Skizze bis zum fertigen, lebendigen Produkt.',
    accent: '#38bdf8', img: '/assets/illustrations/trim/pen.png',
  },
  {
    num: '06', label: 'UserLab',
    title: 'Zielgruppen, verstehen.',
    body: 'Echte Nutzerperspektiven gewinnen — mit qualitativer Forschung, Tests und verwertbaren Insights.',
    accent: '#e879f9', img: '/assets/illustrations/trim/eye.png',
  },
];

export default function ScrollServiceList({ items, heading, eyebrow }) {
  const list = items || SERVICES;
  const [active, setActive] = useState(0);
  const svc = list[active];

  return (
    <div className="ssl-root">
      {/* ── Left: heading + typographic cascade list ────────── */}
      <div className="ssl-left">
      {heading && (
        <div className="ssl-heading-block">
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          <h2 className="ssl-heading">{heading}</h2>
        </div>
      )}
      <div className="ssl-list" role="list">
        {list.map((s, i) => {
          const dist = Math.abs(i - active);
          const isOn = i === active;
          return (
            <div
              key={i}
              role="listitem"
              className={`ssl-item${isOn ? ' ssl-item--on' : ''}`}
              style={{ '--dist': dist, '--accent': s.accent }}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              tabIndex={0}
              aria-current={isOn ? 'true' : undefined}
            >
              <span className="ssl-num">{s.num}</span>
              <span className="ssl-name">{s.label}</span>
              <span className="ssl-arrow" aria-hidden="true">→</span>
            </div>
          );
        })}
      </div>
      </div>{/* end .ssl-left */}

      {/* ── Right: detail reveal panel ──────────────────────── */}
      <div className="ssl-panel" aria-live="polite" aria-atomic="true">
        <div key={active} className="ssl-panel-inner">
          <div className="ssl-panel-visual">
            <div
              className="ssl-panel-glow"
              style={{ background: `radial-gradient(circle, ${svc.accent}42 0%, transparent 68%)` }}
            />
            <img src={svc.img} alt="" className="ssl-panel-img" />
          </div>
          <div className="ssl-panel-copy">
            <div className="eyebrow ssl-panel-eyebrow" style={{ color: svc.accent }}>
              {svc.num} / {svc.label}
            </div>
            <h3 className="ssl-panel-title">{svc.title}</h3>
            <p className="lede ssl-panel-body">{svc.body}</p>
            {svc.cta && (
              <a className="btn-line ssl-panel-cta" href={svc.cta.href}>
                {svc.cta.text}
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
