import { useEffect } from 'react';
import Layout from '../components/Layout.jsx';
import RocketHeroPlayer from '../components/RocketHeroPlayer.jsx';
import KineticHeadline from '../components/KineticHeadline.jsx';
import StickyFeature from '../components/StickyFeature.jsx';
import StackPanels from '../components/StackPanels.jsx';
import useScrollMotion from '../hooks/useScrollMotion.js';
import usePageMeta from '../hooks/usePageMeta.js';


export default function Home() {
  usePageMeta(
    'pub.tech — Wir gestalten digitale Plattformen.',
    'Wir gestalten digitale Plattformen mit gesellschaftlichem Wert. Als Tochter von BR, SWR und HR entwickeln wir nutzerzentrierte Produkte für öffentlich-rechtliche Angebote.'
  );
  useScrollMotion('home');

  // ── Mouse parallax on hero ──────────────────────────────────
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const hero      = document.querySelector('.hero');
    const headline  = document.querySelector('.hero-headline');
    const artInner  = document.querySelector('.hero-art-inner');

    if (!hero) return;

    let tx = 0, ty = 0;   // targets
    let hx = 0, hy = 0;   // headline current
    let ax = 0, ay = 0;   // art-inner current
    let raf;

    const onMove = (e) => {
      const r = hero.getBoundingClientRect();
      tx = (e.clientX - r.left)  / r.width  - 0.5;
      ty = (e.clientY - r.top)   / r.height - 0.5;
    };

    const tick = () => {
      hx += (tx - hx) * 0.06;
      hy += (ty - hy) * 0.06;
      ax += (tx - ax) * 0.05;
      ay += (ty - ay) * 0.05;

      if (headline) headline.style.transform =
        `translate(${(-hx * 14).toFixed(2)}px, ${(-hy * 9).toFixed(2)}px)`;
      if (artInner)  artInner.style.transform =
        `translate(${(ax * 22).toFixed(2)}px, ${(ay * 14).toFixed(2)}px)`;

      raf = requestAnimationFrame(tick);
    };

    hero.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      hero.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      if (headline) headline.style.transform = '';
      if (artInner)  artInner.style.transform = '';
    };
  }, []);

  // ── Spotlight cursor on capability cards ────────────────────
  useEffect(() => {
    const cards = document.querySelectorAll('.cap-card');
    const handlers = [];
    cards.forEach(card => {
      const fn = (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--sx', `${((e.clientX - r.left) / r.width  * 100).toFixed(1)}%`);
        card.style.setProperty('--sy', `${((e.clientY - r.top)  / r.height * 100).toFixed(1)}%`);
      };
      card.addEventListener('mousemove', fn, { passive: true });
      handlers.push({ card, fn });
    });
    return () => handlers.forEach(({ card, fn }) => card.removeEventListener('mousemove', fn));
  }, []);

  return (
    <Layout showGhostRocket>
      {/* ============ HERO ============ */}
      <section className="hero" id="top" data-screen-label="hero">
        <div className="hero-glow" data-speed="0.04"></div>
        <div className="wrap hero-grid">
          <div className="hero-headline reveal-lines">
            <div className="eyebrow hero-eyebrow">Public Value Technologies · München</div>
            <KineticHeadline />
            <div className="hero-sub reveal d2">
              <p className="lede">
                pub.tech steht für Public Value Technologies GmbH – und unsere Leidenschaft, mit
                neuesten Technologien Produkte zu gestalten, die wertvoll für die Öffentlichkeit sind.
              </p>
              <div className="hero-meta">
                <span className="mono">Eine Tochter von</span>
                <span className="parent-logos">
                  <span className="plogo">BR<sup>®</sup></span>
                  <span className="plogo">SWR<span className="chev">»</span><sup>®</sup></span>
                  <span className="plogo">hr<sup>®</sup></span>
                </span>
              </div>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="hero-art-inner">
              <RocketHeroPlayer />
            </div>
          </div>
        </div>
        <div className="scroll-cue"><span className="bar"></span>Scroll</div>
      </section>

      {/* ============ MARQUEE ============ */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track" data-mq="0.6">
          <span>Engineering<i className="star"> / </i></span>
          <span>Data Platforms<i className="star"> / </i></span>
          <span>Mobile Engineering<i className="star"> / </i></span>
          <span>Agile Coaching<i className="star"> / </i></span>
          <span>UX Design<i className="star"> / </i></span>
          <span>UserLab<i className="star"> / </i></span>
        </div>
      </div>

      {/* ============ STICKY FEATURE ============ */}
      <StickyFeature />


      {/* ============ ÜBER UNS + REFERENZEN ============ */}
      <section id="ueber-uns" data-screen-label="ueber-uns" aria-label="Mehr über uns">
        <StackPanels />
      </section>
    </Layout>
  );
}
