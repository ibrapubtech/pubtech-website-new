import { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: 3,    suffix: '',  label: 'Gesellschafter',      note: 'BR · SWR · hr' },
  { value: 50,   suffix: '+', label: 'Kolleg·innen',        note: 'und wachsend' },
  { value: 100,  suffix: '+', label: 'Projekte & Produkte', note: 'seit 2022' },
  { value: 2022, suffix: '',  label: 'Gegründet',           note: 'München' },
];

function useCountUp(target, duration = 1400, active = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min(1, (ts - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(step);
      else setVal(target);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return val;
}

function StatItem({ value, suffix, label, note, delay }) {
  const ref   = useRef(null);
  const [on, setOn] = useState(false);
  const count = useCountUp(value, 1200 + delay * 200, on);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } },
      { threshold: 0.3 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="stat-item" style={{ '--delay': `${delay * 0.1}s` }}>
      <div className="stat-num">
        {count.toLocaleString('de-DE')}
        <span className="stat-suffix">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
      <div className="stat-note">{note}</div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="stats-section section-pad">
      <div className="wrap">
        <div className="stats-intro reveal-lines">
          <div className="eyebrow">Zahlen & Fakten</div>
          <h2 className="section-title" style={{ marginTop: 16 }}>
            <span className="line"><span>pub.tech</span></span>
            <span className="line"><span>in Zahlen.</span></span>
          </h2>
        </div>
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <StatItem key={s.label} {...s} delay={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
