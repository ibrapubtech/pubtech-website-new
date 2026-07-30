import Layout from '../components/Layout.jsx';
import useScrollMotion from '../hooks/useScrollMotion.js';
import usePageMeta from '../hooks/usePageMeta.js';

const CASES = [
  {
    idx: '01',
    tag: 'Audio',
    art: '/assets/illustrations/mobile.png',
    alt: 'ARD Audiothek',
    client: 'ARD Online',
    title: 'ARD Audiothek',
    platforms: ['Web', 'iOS', 'Android', 'Connected Car'],
    body:
      'Audio und Podcasting boomen. Daran arbeiten wir proaktiv im deutschen Markt mit, indem wir die ARD Audiothek, das zentrale öffentlich-rechtliche Audio-Angebot, gemeinsam mit ARD Online, entwickeln. Mobil am Smartphone, im Auto, auf externen Abspielgeräten oder ganz bequem daheim auf dem Smart Speaker. Durch einen Login ist es möglich, direkt an der entsprechenden Stelle geräteübergreifend weiterzuhören. Neben Podcasts gibt es natürlich auch direkt die Livestreams der Radioprogramme.',
  },
  {
    idx: '02',
    tag: 'News',
    art: '/assets/illustrations/document.png',
    alt: 'BR24',
    client: 'Bayerischer Rundfunk',
    title: 'BR24',
    platforms: ['Web', 'iOS', 'Android', 'Connected Car'],
    body:
      'BR24 ist das reichweitenstärkste Digitalprodukt des Bayerischen Rundfunks. Das Team von BR24 arbeitet produktnah an der Weiterentwicklung und Optimierung des digitalen Nachrichtenangebotes und sorgt für die technische Stabilität. Es besteht aus CMS-, Frontend- und Backendentwickler*innen, iOS und Android-Spezialist*innen, Qualitätssicherung, Design, UX und UI. Die Anforderungen der digitalen Player werden dort nach agilen Prinzipien nutzerzentriert und iterativ umgesetzt.',
  },
  {
    idx: '03',
    tag: 'Radio',
    art: '/assets/illustrations/car.png',
    alt: 'BR Radio',
    client: 'Bayerischer Rundfunk',
    title: 'BR Radio',
    platforms: ['Web', 'iOS', 'Android', 'Connected Car'],
    body:
      'Die BR Radio App und Webseite bündelt alle Radioprogramme des Bayerischen Rundfunks in einem zentralen Angebot. Auf einen Blick bekommt man alle Informationen zu den Sendungen und Songs und kann entlang einer Zeitleiste bis zu sieben Tage im Radioprogramm zurückspulen. Neben den Apps und der Website gibt es BR Radio übrigens auch fürs Auto auf Android Auto und Apple CarPlay.',
  },
  {
    idx: '04',
    tag: 'Voting',
    art: '/assets/illustrations/charts.png',
    alt: 'SWR Hitparade',
    client: 'Südwestrundfunk',
    title: 'SWR Hitparade',
    platforms: ['Web'],
    body:
      'Die SWR Hitparaden sind Highlights im Sendegebiet: Zuhörer*innen der SWR-Wellen können für ihre Lieblingssongs abstimmen. Wir haben das bestehende Tool auf eine neue technologische Basis gestellt, neue Features implementiert und die Usability verbessert. Um Abstimmungen organisieren, verwalten und ausspielen zu können, wurden Systeme geschaffen, die den Anforderungen verschiedener Sender gerecht werden. Mit diesem generischen Ansatz ist der Weg für weitere Einsatzzwecke in anderen Landesrundfunkanstalten frei.',
  },
  {
    idx: '05',
    tag: 'Game',
    art: '/assets/illustrations/puzzle.png',
    alt: 'Tatortgame.de',
    client: 'SWR · X Lab',
    title: 'Tatortgame.de',
    platforms: ['Web'],
    body:
      'Das Tatort-Game entstand in enger Zusammenarbeit zwischen dem Innovationslabor X Lab und der Tatort-Redaktion des SWR und basiert auf einem KI-Chatbot des Startup-Unternehmens Respeak. pub.tech übernahm hier die komplette Produktionsleitung, setzte Backend und Frontend um, kümmerte sich um UX und UI und entwickelte die im Spiel enthaltenen Rätsel. Das browserbasierte Spiel kann kostenlos gespielt und im Verlauf jederzeit pausiert werden.',
  },
];

export default function Referenzen() {
  usePageMeta(
    'Referenzen — pub.tech',
    'Eine Auswahl unserer größten und spannendsten Umsetzungen für BR, SWR und ARD online.'
  );
  useScrollMotion('referenzen');

  return (
    <Layout>
      <section className="wrap page-head" data-screen-label="referenzen-head">
        <div className="reveal-lines">
          <div className="eyebrow">Referenzen</div>
          <h1 style={{ marginTop: 18 }}>
            <span className="line"><span>Was wir</span></span>
            <span className="line"><span>gebaut haben.</span></span>
          </h1>
        </div>
        <p className="lede reveal d1">
          Viele unserer Produkte wirken im Hintergrund – dort, wo Daten fließen, Systeme vernetzt werden
          und digitale Prozesse zuverlässig laufen. Genau das ist unsere Stärke: Wir entwickeln viele
          Lösungen, die nicht immer sichtbar sind, aber immer spürbar Wirkung zeigen. Aber einige dieser
          Projekte lassen sich auch sehen, hören oder erleben. Sowie diese kleine Auswahl unserer größten
          und spannendsten Umsetzungen:
        </p>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }} data-screen-label="referenzen-list">
        <div className="wrap">
          <div className="work-list">
            {CASES.map((c) => (
              <article className="case reveal" key={c.idx}>
                <div className="case-media" data-speed="0.03">
                  <span className="ring"></span><span className="ring r2"></span>
                  <span className="case-tag">{c.tag}</span>
                  <img className="case-art" src={c.art} alt={c.alt} />
                  <span className="case-idx">{c.idx}</span>
                </div>
                <div className="case-body">
                  <div className="client">{c.client}</div>
                  <h3>{c.title}</h3>
                  <ul className="ref-platform">
                    {c.platforms.map((p) => (
                      <span key={p}>{p}</span>
                    ))}
                  </ul>
                  <p>{c.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
