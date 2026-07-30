import { useEffect, useRef, useState } from 'react';

const PANELS = [
  {
    num: '01',
    label: 'Analytics & Data',
    title: 'Insights,\ndie entscheiden.',
    body: 'Daten in Wissen verwandeln — mit KI-gestützten Plattformen, klaren Dashboards und smarter Analyse.',
    accent: '#c084fc',
    img: '/assets/illustrations/trim/charts.png',
  },
  {
    num: '02',
    label: 'Engineering',
    title: 'Systeme,\ndie skalieren.',
    body: 'Wir bauen robuste Cloud-Plattformen und skalierbare Backends — von der Architektur bis zum stabilen Betrieb.',
    accent: '#59D5DC',
    img: '/assets/illustrations/trim/cloud.png',
  },
  {
    num: '03',
    label: 'Mobile Engineering',
    title: 'Apps,\ndie bewegen.',
    body: 'Native und Cross-Platform Apps, die Menschen begeistern — schnell, stabil und nutzerzentriert.',
    accent: '#fb923c',
    img: '/assets/illustrations/trim/mobile.png',
  },
  {
    num: '04',
    label: 'Agile Coaching',
    title: 'Teams,\ndie wirken.',
    body: 'Veränderung begleiten, Projekte steuern und Teams stärken — mit agilen Methoden und klarer Orientierung.',
    accent: '#B5FD42',
    img: '/assets/illustrations/trim/compass.png',
  },
  {
    num: '05',
    label: 'UX Design',
    title: 'Erlebnisse,\ndie begeistern.',
    body: 'Nutzerzentriertes Design, das funktioniert — von der ersten Skizze bis zum fertigen, lebendigen Produkt.',
    accent: '#38bdf8',
    img: '/assets/illustrations/trim/pen.png',
  },
  {
    num: '06',
    label: 'UserLab',
    title: 'Zielgruppen,\nverstehen.',
    body: 'Echte Nutzerperspektiven gewinnen — mit qualitativer Forschung, Tests und verwertbaren Insights.',
    accent: '#e879f9',
    img: '/assets/illustrations/trim/eye.png',
  },
];

// 70 vh per panel keeps it snappy — users feel momentum
const VH_PER_PANEL = 70;

// Deep dark tints — ordered to match PANELS, starting with violet (closest to hero bg)
const BG_TINTS = [
  '#0b0614', // Analytics    — dark violet  ← matches hero purple, smooth entry
  '#050e10', // Engineering  — dark teal
  '#130900', // Mobile       — dark amber
  '#090d03', // Agile        — dark lime
  '#040b14', // UX Design    — dark sky
  '#0e0414', // UserLab      — dark fuchsia
];

// Fast near each panel boundary, lingers mid-panel — a "magnetic" feel
// without ever touching real scroll position. k tunes the effect strength.
function magnetEase(t, k = 0.1) {
  return t + k * Math.sin(2 * Math.PI * t);
}

export default function StickyFeature() {
  const containerRef = useRef(null);
  const topBleedRef    = useRef(null);
  const bottomBleedRef = useRef(null);
  const [active,   setActive]   = useState(0);
  const [progress, setProgress] = useState(0); // 0–1 magnetic-eased, for progress bar

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let lastIdx = 0;
    const bleedSpan = window.innerHeight * 0.6;

    const onScroll = () => {
      const rect    = el.getBoundingClientRect();
      const total   = el.offsetHeight - window.innerHeight;
      if (total <= 0) return;

      const scrolled = Math.max(0, Math.min(total, -rect.top));
      const p        = scrolled / total;                           // 0 → 1 continuous
      const idx      = Math.min(PANELS.length - 1, Math.floor(p * PANELS.length));
      const local    = p * PANELS.length - idx;                     // 0 → 1 within current panel
      const eased    = (idx + magnetEase(local)) / PANELS.length;

      setProgress(eased);
      if (idx !== lastIdx) { lastIdx = idx; setActive(idx); }

      // Color-bleed seams — tint the entry/exit edges as we approach them
      if (topBleedRef.current) {
        topBleedRef.current.style.opacity = Math.max(0, 1 - scrolled / bleedSpan).toFixed(3);
      }
      if (bottomBleedRef.current) {
        bottomBleedRef.current.style.opacity = Math.max(0, 1 - (total - scrolled) / bleedSpan).toFixed(3);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Scroll-hint cursor: expand ring + show bouncing chevron ──
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const el = containerRef.current;
    if (!el) return;
    const add = () => document.body.classList.add('cursor-scroll');
    const rem = () => document.body.classList.remove('cursor-scroll');
    el.addEventListener('mouseenter', add);
    el.addEventListener('mouseleave', rem);
    return () => {
      el.removeEventListener('mouseenter', add);
      el.removeEventListener('mouseleave', rem);
      rem();
    };
  }, []);

  const panel = PANELS[active];

  return (
    <div
      ref={containerRef}
      className="sf-scroll-container"
      style={{ height: `${PANELS.length * VH_PER_PANEL}vh` }}
    >
      <div className="sf-sticky" style={{ backgroundColor: BG_TINTS[active] }}>

        {/* Per-panel accent glow — fades in on panel change */}
        <div
          key={`glow-${active}`}
          className="sf-bg-glow"
          style={{ background: `radial-gradient(ellipse 75% 65% at 68% 50%, ${panel.accent}22 0%, transparent 68%)` }}
        />

        {/* Color-bleed seams — tint entry/exit edges with the active accent */}
        <div ref={topBleedRef}    className="sf-bleed sf-bleed--top"    style={{ '--bleed-accent': panel.accent }} />
        <div ref={bottomBleedRef} className="sf-bleed sf-bleed--bottom" style={{ '--bleed-accent': panel.accent }} />

        {/* Continuous progress bar — gives users constant scroll feedback */}
        <div className="sf-progress-track">
          <div
            className="sf-progress-fill"
            style={{
              width: `${progress * 100}%`,
              background: panel.accent,
            }}
          />
        </div>

        {/* Side dots */}
        <div className="sf-dots">
          {PANELS.map((p, i) => (
            <span
              key={i}
              className={`sf-dot${i === active ? ' sf-dot--active' : ''}`}
              style={{ '--dot-accent': p.accent }}
            />
          ))}
        </div>

        {/* Ghost number */}
        <div className="sf-num" key={`num-${active}`}>{panel.num}</div>

        {/* Main grid */}
        <div className="wrap sf-grid">
          <div className="sf-body" key={`body-${active}`}>
            <div className="eyebrow sf-eyebrow" style={{ color: panel.accent }}>
              {panel.num}
            </div>
            <h2 className="sf-title">{panel.label}</h2>
            <p className="sf-tagline" style={{ color: panel.accent }}>{panel.title.replace('\n', ' ')}</p>
            <p className="lede sf-lede">{panel.body}</p>
          </div>

          {/* Glow stays mounted across panel changes and morphs color —
              only the image itself crossfades — so the visual reads as
              one continuous object rather than 6 separate slides */}
          <div className="sf-visual">
            <div className="sf-visual-glow" style={{ '--visual-accent': panel.accent }} />
            <img key={`visual-${active}`} src={panel.img} alt={panel.label} className="sf-visual-img" />
          </div>
        </div>

        {/* Bottom label strip */}
        <div className="sf-hint">
          {PANELS.map((p, i) => (
            <span key={i} className={`sf-hint-label${i === active ? ' active' : ''}`}
              style={i === active ? { color: panel.accent } : {}}
            >
              {p.label}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}
