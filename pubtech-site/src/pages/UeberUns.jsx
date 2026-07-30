import Layout from '../components/Layout.jsx';
import useScrollMotion from '../hooks/useScrollMotion.js';
import usePageMeta from '../hooks/usePageMeta.js';

export default function UeberUns() {
  usePageMeta(
    'Über uns — pub.tech',
    'pub.tech steht für Public Value Technologies GmbH. Unsere Mission: öffentlichen Mehrwert digital übersetzen.'
  );
  useScrollMotion('ueber-uns');

  return (
    <Layout>
      <section className="wrap page-head" data-screen-label="about-head">
        <div className="reveal-lines">
          <div className="eyebrow">Über uns</div>
          <h1 style={{ marginTop: 18 }}>
            <span className="line"><span>Über uns.</span></span>
          </h1>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }} data-screen-label="about-body">
        <div className="wrap">
          <div className="prose">
            <p className="reveal">
              Was als freie „Digitale Garage&ldquo; in der großen öffentlich-rechtlichen Welt begann, wurde zur
              internen Entwicklungsabteilung für Software und Plattformen – und schließlich, Ende 2022,
              zur eigenständigen GmbH. Seitdem stehen der Bayerische Rundfunk (BR), der Südwestrundfunk
              (SWR) und mittlerweile auch der Hessische Rundfunk (HR) als Gesellschafter hinter uns.
            </p>
            <p className="reveal">
              Unser Ziel ist klar: Wir entwickeln digitale Infrastrukturen und Produkte, die den
              öffentlich-rechtlichen Auftrag im digitalen Raum stärken.
            </p>
            <p className="reveal">
              Seit Anfang 2025 treten wir unter dem Namen pub.tech auf – mit noch stärkerem Fokus auf
              Technologie, Produktentwicklung und gesellschaftlichem Mehrwert.
            </p>
            <p className="reveal">
              Unser Team aus rund 100 Expert*innen arbeitet remote und im Office am Standort München
              daran, digitale Lösungen zu gestalten, die für Millionen Menschen relevant sind – vom
              Backend bis zur User Experience.
            </p>

            <p className="mission reveal">Unsere Mission: öffentlichen Mehrwert digital übersetzen.</p>

            <p className="reveal">
              Das heißt für uns: Produkte entwickeln, die zuverlässig, zugänglich und nutzerfreundlich
              sind – für alle. Gute Technologie entsteht für uns nicht im stillen Kämmerlein, sondern
              durch Zusammenarbeit. Deshalb setzen wir auf User Research, iterative UX-Prozesse und agile
              Teams, die eng verzahnt arbeiten.
            </p>
            <p className="reveal">
              Wir sind mehr als ein Tech-Anbieter: Wir sind Partner*innen für alle, die öffentliche
              Inhalte digital denken – strategisch, technologisch und gestalterisch.
            </p>
            <p className="reveal">
              Was wir nach außen leben, ist auch für unsere eigene Firmenkultur zentral. Deshalb haben wir
              uns 2024 dazu entschieden, unsere Werte durch die Unterzeichnung der Charta der Vielfalt
              sichtbar zu verankern.
            </p>

            <a className="charta reveal" href="https://www.charta-der-vielfalt.de/" target="_blank" rel="noopener">
              <b>Charta der Vielfalt</b>
              <span className="mono" style={{ color: 'rgba(255,255,255,0.6)' }}>Unterzeichnet 2024 →</span>
            </a>
          </div>

          <h2 className="about-manifesto reveal-lines">
            <span className="line"><span><span className="acc">Public Value</span> ist unsere DNA.</span></span>
            <span className="line"><span>Technik ist unser Werkzeug.</span></span>
            <span className="line"><span>Die digitale Gesellschaft ist unser Ziel.</span></span>
          </h2>
        </div>
      </section>
    </Layout>
  );
}
