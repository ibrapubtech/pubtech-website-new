import Layout from '../components/Layout.jsx';
import useScrollMotion from '../hooks/useScrollMotion.js';
import usePageMeta from '../hooks/usePageMeta.js';

const CASES = [
  {
    idx: '01',
    art: '/assets/illustrations/cloud.png',
    alt: 'Engineering',
    client: 'Engineering',
    title: 'Systeme, die tragen.',
    lines: ['Skalierbare Systeme.', 'Stabile Plattformen.', 'Verlässliche Lösungen.'],
  },
  {
    idx: '02',
    art: '/assets/illustrations/charts.png',
    alt: 'Analytics und Data Platforms',
    client: 'Analytics & Data Platforms',
    title: 'Aus Daten wird Wissen.',
    lines: ['Daten, die Wissen schaffen.', 'KI, die sinnvoll unterstützt.'],
  },
  {
    idx: '03',
    art: '/assets/illustrations/mobile.png',
    alt: 'Mobile Engineering',
    client: 'Mobile Engineering',
    title: 'Apps, die ankommen.',
    lines: ['Apps, die bewegen.', 'Technologien, die verbinden.'],
  },
  {
    idx: '04',
    art: '/assets/illustrations/compass.png',
    alt: 'Agile Coaching und Projektmanagement',
    client: 'Agile Coaching & Projektmanagement',
    title: 'Wirksam zusammenarbeiten.',
    lines: ['Veränderung begleiten.', 'Teams stärken.', 'Projekte wirksam steuern.'],
  },
  {
    idx: '05',
    art: '/assets/illustrations/pen.png',
    alt: 'UX Design',
    client: 'UX Design',
    title: 'Erlebbare Produkte.',
    lines: ['Interfaces gestalten.', 'Marken erfahrbar machen.', 'Produkte zum Leben erwecken.'],
  },
  {
    idx: '06',
    art: '/assets/illustrations/eye.png',
    alt: 'UserLab',
    client: 'UserLab',
    title: 'Menschen verstehen.',
    lines: ['Zielgruppen verstehen.', 'Konzepte evaluieren.', 'Insights nutzbar machen.'],
  },
];

export default function Portfolio() {
  usePageMeta(
    'Portfolio — pub.tech',
    'Von Datenstrategie über agile Produktentwicklung bis zu intuitivem UX-Design: Unser Portfolio vereint technologische Exzellenz mit nutzerzentriertem Denken.'
  );
  useScrollMotion('portfolio');

  return (
    <Layout>
      <section className="wrap page-head" data-screen-label="portfolio-head">
        <div className="reveal-lines">
          <div className="eyebrow">Portfolio</div>
          <h1 style={{ marginTop: 18 }}>
            <span className="line"><span>Plattformen,</span></span>
            <span className="line"><span>die wirken.</span></span>
          </h1>
        </div>
        <p className="lede reveal d1">
          Von Datenstrategie über agile Produktentwicklung bis zu intuitivem UX-Design: Unser Portfolio
          vereint technologische Exzellenz mit nutzerzentriertem Denken. Wir entwickeln, betreiben und
          optimieren digitale Systeme, die stabil laufen, skalieren – und Menschen begeistern.
        </p>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }} data-screen-label="portfolio-list">
        <div className="wrap">
          <div className="work-list">
            {CASES.map((c) => (
              <article className="case reveal" key={c.idx}>
                <div className="case-media" data-speed="0.03">
                  <span className="ring"></span><span className="ring r2"></span>
                  <span className="case-tag">Leistung</span>
                  <img className="case-art" src={c.art} alt={c.alt} />
                  <span className="case-idx">{c.idx}</span>
                </div>
                <div className="case-body">
                  <div className="client">{c.client}</div>
                  <h3>{c.title}</h3>
                  <div className="case-lines">
                    {c.lines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
