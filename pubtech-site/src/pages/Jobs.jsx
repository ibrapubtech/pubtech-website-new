import Layout from '../components/Layout.jsx';
import useScrollMotion from '../hooks/useScrollMotion.js';
import usePageMeta from '../hooks/usePageMeta.js';

export default function Jobs() {
  usePageMeta(
    'Jobs — pub.tech',
    'Dein Herz schlägt für digitale Produkte und Systeme mit gesellschaftlicher Relevanz? Bewirb dich formlos bei pub.tech.'
  );
  useScrollMotion('jobs');

  return (
    <Layout contactEmail="karriere@pub.tech">
      <section className="wrap page-head" data-screen-label="jobs-head">
        <div className="reveal-lines">
          <div className="eyebrow">Jobs</div>
          <h1 style={{ marginTop: 18 }}>
            <span className="line"><span>Arbeite</span></span>
            <span className="line"><span>mit uns.</span></span>
          </h1>
        </div>
        <p className="lede reveal d1">
          Unser Team aus rund 100 Expert*innen arbeitet remote und im Office am Standort München daran,
          digitale Lösungen zu gestalten, die für Millionen Menschen relevant sind – vom Backend bis zur
          User Experience.
        </p>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }} data-screen-label="jobs-values">
        <div className="wrap">
          <div className="cap-grid">
            <article className="cap-card reveal">
              <div className="cap-card-top"><img src="/assets/illustrations/head.png" alt="" /></div>
              <h3>Rund 100 Expert*innen</h3>
              <p>Remote und im Office am Standort München – eng verzahnt, agil, nutzerzentriert.</p>
            </article>
            <article className="cap-card reveal d1">
              <div className="cap-card-top"><img src="/assets/illustrations/eye.png" alt="" /></div>
              <h3>Zusammenarbeit als Methode</h3>
              <p>Wir setzen auf User Research, iterative UX-Prozesse und agile Teams, die eng verzahnt arbeiten.</p>
            </article>
            <article className="cap-card reveal d2">
              <div className="cap-card-top"><img src="/assets/illustrations/heart.png" alt="" /></div>
              <h3>Charta der Vielfalt</h3>
              <p>2024 unterzeichnet – Vielfalt ist für uns nicht Dekoration, sondern verankerter Wert.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }} data-screen-label="jobs-cta">
        <div className="wrap">
          <div className="jobs-cta reveal">
            <div className="eyebrow" style={{ color: 'var(--pub-purple-900)', opacity: 0.7 }}>Work with us</div>
            <h2>Dein Herz schlägt für digitale Produkte mit gesellschaftlicher Relevanz?</h2>
            <p>Dann bewirb dich gerne formlos – wir freuen uns darauf, dich kennenzulernen.</p>
            <a className="btn-big" href="mailto:karriere@pub.tech">
              <span className="dot" style={{ background: '#fff' }}></span>karriere@pub.tech
            </a>
            <div className="contact-person">Deine Ansprechpartnerin: Annette Glück</div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
