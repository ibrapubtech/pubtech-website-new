export default function StackPanels() {
  return (
    <div className="sp-wrap">

      {/* ── Über uns ───────────────────────────────────────────── */}
      <div className="sp-panel" data-sp-theme="cyan">
        <div className="wrap sp-grid">
          <div className="sp-text">
            <div className="sp-label">
              <span className="sp-num">01</span>
              <span>Über uns</span>
            </div>
            <h2 className="sp-title">Öffentlichen<br />Mehrwert<br />digital.</h2>
            <p className="sp-body">
              pub.tech steht für Public Value Technologies GmbH – und unsere Leidenschaft,
              mit neuesten Technologien Produkte zu gestalten, die wertvoll für die
              Öffentlichkeit sind. Mit BR, SWR und HR als Gesellschafter liegt unser
              Fokus auf der ARD und deren Angeboten.
            </p>
            <a href="/ueber-uns" className="sp-cta">
              Mehr erfahren
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
          <div className="sp-visual">
            <div className="sp-glow sp-glow--cyan" />
            <img src="/assets/illustrations/diamond.png" alt="Über uns" className="sp-img" />
          </div>
        </div>
      </div>

      {/* ── Referenzen ─────────────────────────────────────────── */}
      <div className="sp-panel" data-sp-theme="lime">
        <div className="wrap sp-grid">
          <div className="sp-text">
            <div className="sp-label">
              <span className="sp-num">02</span>
              <span>Referenzen</span>
            </div>
            <h2 className="sp-title">Erfolgs-<br />geschichten.</h2>
            <p className="sp-body">
              Projekte für BR, SWR, ARD und weitere öffentlich-rechtliche
              Partner*innen. Von Streaming-Plattform bis UX-Research — hier
              sehen Sie, wie wir Technologie, Design und Public Value
              zusammenbringen.
            </p>
            <a href="/referenzen" className="sp-cta">
              Projekte ansehen
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
          <div className="sp-visual">
            <div className="sp-glow sp-glow--lime" />
            <img src="/assets/illustrations/trophy.png" alt="Referenzen" className="sp-img" />
          </div>
        </div>
      </div>

    </div>
  );
}
