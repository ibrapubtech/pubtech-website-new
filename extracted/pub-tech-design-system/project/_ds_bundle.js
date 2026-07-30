/* @ds-bundle: {"format":3,"namespace":"PubTechDesignSystem_892d46","components":[],"sourceHashes":{"agency/brand.js":"60093b25ff61","agency/footer.js":"ed545b39ce85","agency/motion.js":"906a627893fa","agency/tweaks-panel.jsx":"7f64c6909a8b","agency/tweaks.jsx":"9e1397ea72d1","assets/logos/brand-logos.js":"f2302f638762"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PubTechDesignSystem_892d46 = window.PubTechDesignSystem_892d46 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// agency/brand.js
try { (() => {
/* pub.tech — inject the recolorable wordmark sprite once per page.
   Use anywhere with: <svg class="pub-wordmark"><use href="#pub-wordmark"></use></svg>
   (<use> resolves live once the sprite is appended, so order doesn't matter.) */
(function () {
  const SPRITE = `
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="pub-wordmark" viewBox="0 0 370 90.570">
    <path fill="currentColor" d="M 0 90.57 L 0 20.661 L 14.69 20.661 L 14.69 23.993 C 16.872 20.991 20.137 19.486 24.484 19.486 C 28.831 19.486 32.493 20.534 35.597 22.64 C 38.701 24.746 41.077 27.757 42.743 31.673 C 44.409 35.588 45.238 40.274 45.238 45.72 C 45.238 51.167 44.359 55.463 42.6 59.379 C 40.84 63.295 38.379 66.356 35.233 68.555 C 32.087 70.754 28.434 71.862 24.289 71.862 C 22.201 71.862 20.348 71.498 18.733 70.763 C 17.118 70.027 15.773 68.961 14.69 67.557 L 14.69 84.007 L 0 90.57 Z M 21.93 57.671 C 24.67 57.671 26.793 56.622 28.298 54.516 C 29.795 52.41 30.548 49.484 30.548 45.729 C 30.548 41.974 29.812 38.828 28.349 36.772 C 26.886 34.717 24.746 33.686 21.938 33.686 C 20.34 33.686 18.978 33.897 17.853 34.32 C 16.729 34.743 15.671 35.445 14.699 36.426 L 14.699 54.736 C 14.995 55.548 15.832 56.25 17.219 56.816 C 18.606 57.391 20.179 57.671 21.947 57.671 L 21.93 57.671 Z"></path>
    <path fill="currentColor" d="M 70.204 71.87 C 65.012 71.87 60.859 70.196 57.747 66.855 C 54.626 63.506 53.07 59.049 53.07 53.467 L 53.07 20.661 L 67.76 20.661 L 67.76 46.219 C 67.76 50.431 68.335 53.391 69.494 55.108 C 70.653 56.825 72.649 57.679 75.49 57.679 C 78.493 57.679 80.666 56.783 82.002 54.99 C 83.339 53.197 84.007 50.338 84.007 46.422 L 84.007 20.67 L 98.697 20.67 L 98.697 70.703 L 84.007 70.703 L 84.007 66.103 C 82.535 67.963 80.607 69.392 78.205 70.39 C 75.803 71.388 73.139 71.887 70.204 71.887 L 70.204 71.87 Z"></path>
    <path fill="currentColor" d="M 133.059 71.87 C 130.903 71.87 129.127 71.481 127.723 70.695 C 126.319 69.908 125.126 68.64 124.145 66.881 L 124.145 70.695 L 109.455 70.695 L 109.455 6.563 L 124.145 0 L 124.145 24.281 C 125.219 22.716 126.581 21.524 128.23 20.704 C 129.879 19.892 131.782 19.477 133.93 19.477 C 137.981 19.477 141.559 20.594 144.68 22.826 C 147.792 25.059 150.245 28.146 152.021 32.079 C 153.797 36.011 154.685 40.519 154.685 45.619 C 154.685 53.839 152.765 60.275 148.934 64.91 C 145.094 69.545 139.8 71.862 133.051 71.862 L 133.059 71.87 Z M 131.393 57.671 C 134.133 57.671 136.256 56.63 137.762 54.541 C 139.258 52.452 140.011 49.484 140.011 45.627 C 140.011 41.771 139.258 38.861 137.762 36.789 C 136.256 34.717 134.142 33.677 131.393 33.677 C 129.829 33.677 128.416 33.931 127.156 34.438 C 125.896 34.946 124.898 35.673 124.145 36.62 L 124.145 54.829 C 124.991 55.844 125.947 56.563 127.012 57.011 C 128.069 57.451 129.533 57.671 131.393 57.671 Z"></path>
    <path fill="currentColor" d="M 167.717 71.87 C 165.172 71.87 163.049 71.05 161.349 69.426 C 159.649 67.794 158.803 65.705 158.803 63.159 C 158.803 60.614 159.649 58.635 161.349 56.918 C 163.049 55.201 165.163 54.347 167.717 54.347 C 170.272 54.347 172.403 55.201 174.128 56.918 C 175.853 58.635 176.725 60.715 176.725 63.159 C 176.725 65.604 175.862 67.794 174.128 69.426 C 172.394 71.059 170.263 71.87 167.717 71.87 Z"></path>
    <path fill="currentColor" d="M 198.654 71.87 C 194.316 71.87 191.094 70.729 188.988 68.445 C 186.882 66.162 185.833 62.703 185.833 58.068 L 185.833 33.593 L 179.076 33.593 L 179.076 20.67 L 185.833 20.67 L 185.833 6.952 L 200.422 0 L 200.422 20.661 L 211.095 20.661 L 211.095 33.584 L 200.422 33.584 L 200.422 56.3 C 200.422 57.282 200.676 58.034 201.183 58.55 C 201.691 59.074 202.46 59.337 203.509 59.337 C 206.021 59.337 208.778 58.685 211.78 57.375 L 210.114 69.612 C 208.549 70.331 206.824 70.881 204.947 71.278 C 203.069 71.667 200.972 71.87 198.654 71.87 Z"></path>
    <path fill="currentColor" d="M 240.366 71.87 C 235.401 71.87 231.139 70.822 227.562 68.733 C 223.984 66.644 221.244 63.641 219.341 59.726 C 217.438 55.81 216.474 51.108 216.474 45.627 C 216.474 40.147 217.447 35.69 219.383 31.774 C 221.32 27.858 224.086 24.831 227.655 22.691 C 231.232 20.551 235.461 19.486 240.358 19.486 C 244.603 19.486 248.426 20.34 251.834 22.057 C 255.242 23.774 257.957 26.378 259.962 29.888 C 261.966 33.398 262.972 37.83 262.972 43.183 C 262.972 44.097 262.956 45.23 262.922 46.583 C 262.888 47.936 262.778 49.281 262.575 50.626 L 230.75 50.626 C 230.75 52.419 231.139 53.975 231.926 55.303 C 232.712 56.622 233.82 57.645 235.258 58.364 C 236.695 59.083 238.387 59.438 240.349 59.438 C 242.895 59.438 245.026 59.032 246.734 58.212 C 248.451 57.4 250.1 56.038 251.707 54.152 L 260.131 62.576 C 257.78 65.417 254.989 67.676 251.758 69.359 C 248.527 71.042 244.721 71.879 240.349 71.879 L 240.366 71.87 Z M 230.97 39.656 L 248.984 39.656 C 248.722 37.931 248.214 36.493 247.47 35.352 C 246.717 34.21 245.728 33.356 244.485 32.781 C 243.241 32.214 241.745 31.926 239.977 31.926 C 237.592 31.926 235.588 32.611 233.955 33.982 C 232.323 35.352 231.325 37.246 230.97 39.656 Z"></path>
    <path fill="currentColor" d="M 293.723 71.87 C 288.894 71.87 284.716 70.813 281.19 68.69 C 277.663 66.568 274.94 63.548 273.011 59.633 C 271.083 55.717 270.119 51.082 270.119 45.729 C 270.119 40.375 271.091 35.783 273.028 31.85 C 274.973 27.918 277.714 24.873 281.249 22.716 C 284.792 20.56 288.945 19.486 293.706 19.486 C 299.449 19.486 304.193 20.822 307.932 23.503 C 311.67 26.175 314.368 30.159 316.034 35.445 L 302.028 40.045 C 301.242 37.99 300.151 36.4 298.747 35.276 C 297.343 34.151 295.728 33.584 293.901 33.584 C 291.321 33.584 289.19 34.726 287.516 37.009 C 285.833 39.293 284.995 42.202 284.995 45.72 C 284.995 49.239 285.807 52.131 287.439 54.389 C 289.072 56.639 291.161 57.764 293.706 57.764 C 295.66 57.764 297.343 57.172 298.747 55.979 C 300.151 54.787 301.242 53.002 302.028 50.617 L 316.034 54.634 C 314.368 60.411 311.678 64.724 307.957 67.583 C 304.236 70.441 299.491 71.87 293.715 71.87 L 293.723 71.87 Z"></path>
    <path fill="currentColor" d="M 324.373 70.695 L 324.373 6.757 L 339.063 0 L 339.063 25.262 C 340.695 23.334 342.657 21.896 344.941 20.932 C 347.224 19.968 349.838 19.486 352.772 19.486 C 356.299 19.486 359.352 20.23 361.923 21.71 C 364.503 23.198 366.49 25.313 367.894 28.07 C 369.298 30.827 370 34.1 370 37.889 L 370 70.686 L 355.31 70.686 L 355.31 45.128 C 355.31 40.917 354.726 37.957 353.576 36.24 C 352.417 34.523 350.421 33.669 347.58 33.669 C 344.738 33.669 342.446 34.565 341.093 36.358 C 339.74 38.151 339.063 41.01 339.063 44.925 L 339.063 70.678 L 324.373 70.678 L 324.373 70.695 Z"></path>
  </symbol>
</svg>`;
  function inject() {
    if (document.getElementById('pub-wordmark')) return;
    const holder = document.createElement('div');
    holder.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
    holder.setAttribute('aria-hidden', 'true');
    holder.innerHTML = SPRITE;
    document.body.insertBefore(holder, document.body.firstChild);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);else inject();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "agency/brand.js", error: String((e && e.message) || e) }); }

// agency/footer.js
try { (() => {
/* pub.tech — shared footer (bands + base). Injected into any
   <div data-include-footer></div> so every page stays in sync.
   Runs before motion.js boot so reveals are registered. */
(function () {
  const HTML = `
  <section class="bands" id="kontakt" data-screen-label="kontakt">
    <div class="band band-contact">
      <div>
        <div class="eyebrow">Email us</div>
        <h3>Schreib uns.</h3>
      </div>
      <div class="band-links">
        <span class="band-note">Für allgemeine Informationen:</span>
        <a class="line-link" href="mailto:info@pub.tech">info@pub.tech</a>
        <span class="band-note">Für Projektanfragen:</span>
        <a class="line-link" href="mailto:anfrage@pub.tech">anfrage@pub.tech</a>
      </div>
    </div>
    <div class="band band-social">
      <div>
        <div class="eyebrow">Social Media</div>
        <h3>Folge pub.</h3>
      </div>
      <div class="socials">
        <a href="https://www.linkedin.com/company/pub-public-value-technologies" target="_blank" rel="noopener" aria-label="LinkedIn"><svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.65 4.76 6.1V23h-4v-6.6c0-1.57-.03-3.6-2.19-3.6-2.2 0-2.53 1.71-2.53 3.48V23h-4V8z"/></svg></a>
        <a href="https://github.com/public-value-tech" target="_blank" rel="noopener" aria-label="GitHub"><svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0024 12.5C24 5.87 18.63.5 12 .5z"/></svg></a>
        <a href="https://instagram.com/publicvaluetech" target="_blank" rel="noopener" aria-label="Instagram"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.6" cy="6.4" r="1.3" fill="currentColor" stroke="none"/></svg></a>
        <a href="https://www.youtube.com/channel/UCEA3pDE1MY9-bObNXYsm7yg" target="_blank" rel="noopener" aria-label="YouTube"><svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.5a3 3 0 00-2.1-2.12C19.5 3.85 12 3.85 12 3.85s-7.5 0-9.4.53A3 3 0 00.5 6.5 31.3 31.3 0 000 12a31.3 31.3 0 00.5 5.5 3 3 0 002.1 2.12c1.9.53 9.4.53 9.4.53s7.5 0 9.4-.53a3 3 0 002.1-2.12A31.3 31.3 0 0024 12a31.3 31.3 0 00-.5-5.5zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"/></svg></a>
      </div>
    </div>
    <div class="band band-work">
      <div>
        <div class="eyebrow">Work with us</div>
        <h3>Arbeite mit uns.</h3>
      </div>
      <div class="band-links">
        <p class="band-p">Dein Herz schlägt für digitale Produkte und Systeme mit gesellschaftlicher Relevanz? Dann bewirb dich gerne formlos unter <a class="line-link" href="mailto:karriere@pub.tech">karriere@pub.tech</a>.</p>
        <span class="band-note">Deine Ansprechpartnerin: Annette Glück</span>
      </div>
    </div>
  </section>

  <footer class="foot" data-screen-label="footer">
    <div class="foot-top">
      <div class="foot-brand">
        <a href="index.html" aria-label="pub.tech Startseite"><svg class="pub-wordmark"><use href="#pub-wordmark"></use></svg></a>
        <p>Public Value Technologies GmbH<br>Marsstraße 46<br>80335 München</p>
        <div class="foot-parents"><span class="mono">Eine Tochter von</span><span class="parent-logos"><span class="plogo">BR<sup>®</sup></span><span class="plogo">SWR<span class="chev">»</span><sup>®</sup></span><span class="plogo">hr<sup>®</sup></span></span></div>
      </div>
      <div class="foot-col">
        <h4>Seiten</h4>
        <ul>
          <li><a href="portfolio.html">Portfolio</a></li>
          <li><a href="referenzen.html">Referenzen</a></li>
          <li><a href="jobs.html">Jobs</a></li>
          <li><a href="ueber-uns.html">Über uns</a></li>
        </ul>
      </div>
      <div class="foot-col">
        <h4>Rechtliches</h4>
        <ul>
          <li><a href="https://pub.tech/privacy" target="_blank" rel="noopener">Datenschutz</a></li>
          <li><a href="https://pub.tech/imprint" target="_blank" rel="noopener">Impressum</a></li>
          <li><a href="https://pub.tech/whistleblow" target="_blank" rel="noopener">Hinweis geben</a></li>
          <li><a href="https://pub.tech/" target="_blank" rel="noopener">Barrierefreiheit</a></li>
        </ul>
      </div>
      <div class="foot-col">
        <h4>Kontakt</h4>
        <ul>
          <li><a href="mailto:info@pub.tech">info@pub.tech</a></li>
          <li><a href="mailto:anfrage@pub.tech">anfrage@pub.tech</a></li>
          <li><a href="mailto:karriere@pub.tech">karriere@pub.tech</a></li>
        </ul>
      </div>
    </div>
    <div class="foot-claim reveal-lines">
      <h2>
        <span class="line"><span>Public Value ist unsere DNA.</span></span>
        <span class="line"><span>Technik ist unser <span class="dot-acc">Werkzeug.</span></span></span>
      </h2>
      <p class="reveal d2">Die digitale Gesellschaft ist unser Ziel.</p>
    </div>
    <div class="foot-bottom">
      <span>© 2026 Public Value Technologies GmbH · Marsstraße 46, 80335 München</span>
      <span class="links">
        <a href="https://pub.tech/imprint" target="_blank" rel="noopener">Impressum</a>
        <a href="https://pub.tech/privacy" target="_blank" rel="noopener">Datenschutz</a>
        <a href="https://pub.tech/whistleblow" target="_blank" rel="noopener">Hinweis geben</a>
      </span>
    </div>
  </footer>`;
  function inject() {
    document.querySelectorAll('[data-include-footer]').forEach(slot => {
      slot.outerHTML = HTML;
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);else inject();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "agency/footer.js", error: String((e && e.message) || e) }); }

// agency/motion.js
try { (() => {
/* ============================================================
   pub.tech Studio — motion engine (vanilla)
   Native scroll + lerped depth parallax (inertial float) +
   rect-based reveals, counters, sticky nav, marquee.
   No page-transform hijack — keeps CSS transitions reliable.
   Exposes window.PubMotion.setLevel(level)
   ============================================================ */
(function () {
  const root = document.documentElement;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // off | restrained | cinematic | maximal
  let LEVEL = root.getAttribute('data-motion') || 'cinematic';
  const cfg = {
    off: {
      lerp: false,
      ease: 1,
      pf: 0,
      marquee: 0
    },
    restrained: {
      lerp: false,
      ease: 1,
      pf: 0.45,
      marquee: 0.45
    },
    cinematic: {
      lerp: true,
      ease: 0.09,
      pf: 1,
      marquee: 1
    },
    maximal: {
      lerp: true,
      ease: 0.07,
      pf: 1.6,
      marquee: 1.6
    }
  };
  let currentScroll = window.scrollY || 0;
  let parallaxEls = [];
  let revealEls = [];
  let counterEls = [];

  // ---- hero rocket launch-on-scroll ----
  let rocketEl = null; // .hero-art container
  let rocketBase = ''; // variant-dependent centering transform
  let rocketSpan = 1; // px of scroll over which the launch completes
  const clamp01 = v => v < 0 ? 0 : v > 1 ? 1 : v;
  function initRocket() {
    rocketEl = document.querySelector('.hero-art');
    if (!rocketEl) return;
    const variant = root.getAttribute('data-hero') || 'a';
    rocketBase = variant === 'b' ? 'translate(-50%, -50%)' : variant === 'c' ? '' : 'translateY(-50%)';
    const hero = document.querySelector('.hero');
    rocketSpan = Math.max(1, (hero ? hero.offsetHeight : window.innerHeight) * 0.9);
  }
  let rocketAtRest = false;
  function restRocket() {
    // Clear inline styles so the CSS centering transform + entrance animation
    // take over. Only touch the DOM when transitioning into rest (avoids
    // hammering the element every frame, which restarts the child animation).
    if (rocketAtRest) return;
    rocketEl.style.transform = '';
    rocketEl.style.opacity = '';
    rocketAtRest = true;
  }
  function updateRocket(sy) {
    if (!rocketEl) return;
    const c = cfg[LEVEL] || cfg.cinematic;
    if (reduced || c.pf === 0) {
      restRocket();
      return;
    }
    const p = clamp01(sy / rocketSpan);
    if (p <= 0) {
      restRocket();
      return;
    }
    rocketAtRest = false;
    const accel = p * p; // ease-in so it builds speed
    const dy = accel * window.innerHeight * 0.95; // whoosh downward, off-screen
    const dx = -accel * 90; // drift slightly toward the copy
    const rot = p * 175; // turn to nose downward / tumble
    const sc = 1 - p * 0.45; // shrink as it dives away
    const op = clamp01(1 - (p - 0.45) / 0.5); // fade out over the back half
    const launch = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0) rotate(${rot.toFixed(1)}deg) scale(${sc.toFixed(3)})`;
    rocketEl.style.transform = rocketBase ? `${rocketBase} ${launch}` : launch;
    rocketEl.style.opacity = op.toFixed(3);
  }
  const lerp = (a, b, t) => a + (b - a) * t;

  // ---- cursor-following ghost rocket (behind the lower sections) ----
  let ghostEl = null,
    ghostImg = null;
  let mouseX = 0,
    mouseY = 0;
  let ghostX = 0,
    ghostY = 0,
    ghostPX = 0;
  let ghostZone = Infinity; // scrollY past which the ghost wakes up
  let ghostPrimed = false; // becomes true on first pointer move
  let ghostOp = 0; // current opacity, lerped toward target
  function initGhost() {
    ghostEl = document.querySelector('.rocket-ghost');
    if (!ghostEl) return;
    ghostImg = ghostEl.querySelector('img');
    // Wake as the portfolio header arrives — stays hidden through the hero and
    // the horizontal marquee band that sits directly above the portfolio.
    const portfolio = document.querySelector('#portfolio') || document.querySelector('.section-pad');
    ghostZone = portfolio ? docTop(portfolio) - window.innerHeight * 0.35 : window.innerHeight * 1.1;
    if (!initGhost._bound) {
      window.addEventListener('pointermove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (!ghostPrimed) {
          ghostX = mouseX;
          ghostY = mouseY;
          ghostPX = mouseX;
          ghostPrimed = true;
        }
      }, {
        passive: true
      });
      initGhost._bound = true;
    }
  }
  function updateGhost(sy) {
    if (!ghostEl) return;
    const c = cfg[LEVEL] || cfg.cinematic;
    const active = !reduced && c.pf > 0 && ghostPrimed && sy > ghostZone;
    const target = active ? 0.42 : 0;
    ghostOp = lerp(ghostOp, target, 0.06);
    if (ghostOp < 0.003) ghostOp = target === 0 ? 0 : ghostOp;
    ghostEl.style.opacity = ghostOp.toFixed(3);
    if (!active && ghostOp < 0.004) return;
    // slow, inertial trail so it drifts behind the cursor like deep parallax
    const ease = c.lerp ? 0.045 : 0.12;
    ghostX = lerp(ghostX, mouseX, ease);
    ghostY = lerp(ghostY, mouseY, ease);
    const w = ghostEl.offsetWidth,
      h = ghostEl.offsetHeight;
    ghostEl.style.transform = `translate3d(${(ghostX - w / 2).toFixed(1)}px, ${(ghostY - h / 2).toFixed(1)}px, 0)`;
    // bank toward travel direction so it reads as flight, not a sticker
    const vx = ghostX - ghostPX;
    ghostPX = ghostX;
    const rot = 180 + Math.max(-26, Math.min(26, vx * 0.6));
    if (ghostImg) ghostImg.style.transform = `rotate(${rot.toFixed(1)}deg)`;
  }
  function docTop(el) {
    let y = 0,
      n = el;
    while (n) {
      y += n.offsetTop;
      n = n.offsetParent;
    }
    return y;
  }
  function collectParallax() {
    parallaxEls = Array.from(document.querySelectorAll('[data-speed]')).map(el => ({
      el,
      speed: parseFloat(el.getAttribute('data-speed')) || 0,
      base: docTop(el) + el.offsetHeight / 2
    }));
  }

  // ---- reveals (rect-based) ----
  function initReveals() {
    revealEls = Array.from(document.querySelectorAll('.reveal, .reveal-lines'));
  }
  function checkReveals() {
    if (!revealEls.length) return;
    const trigger = window.innerHeight * 0.86;
    for (let i = revealEls.length - 1; i >= 0; i--) {
      const el = revealEls[i];
      const r = el.getBoundingClientRect();
      if (r.top < trigger && r.bottom > 0) {
        el.classList.add('in');
        revealEls.splice(i, 1);
      }
    }
  }

  // ---- counters ----
  function animateCount(el) {
    const to = parseFloat(el.getAttribute('data-count'));
    const dur = 1400;
    const start = performance.now();
    const valEl = el.querySelector('.val') || el;
    const step = now => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      valEl.textContent = Math.round(to * eased).toString();
      if (p < 1) requestAnimationFrame(step);else valEl.textContent = to.toString();
    };
    requestAnimationFrame(step);
  }
  function initCounters() {
    counterEls = Array.from(document.querySelectorAll('[data-count]'));
  }
  function checkCounters() {
    if (!counterEls.length) return;
    const vh = window.innerHeight;
    for (let i = counterEls.length - 1; i >= 0; i--) {
      const el = counterEls[i];
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.92 && r.bottom > 0) {
        animateCount(el);
        counterEls.splice(i, 1);
      }
    }
  }

  // ---- main RAF loop ----
  function frame() {
    const c = cfg[LEVEL] || cfg.cinematic;
    const sy = window.scrollY || window.pageYOffset || 0;
    if (c.lerp && !reduced) {
      currentScroll = lerp(currentScroll, sy, c.ease);
      if (Math.abs(sy - currentScroll) < 0.05) currentScroll = sy;
    } else {
      currentScroll = sy;
    }
    if (c.pf > 0 && !reduced) {
      const vh = window.innerHeight;
      for (let i = 0; i < parallaxEls.length; i++) {
        const p = parallaxEls[i];
        const viewPos = p.base - currentScroll;
        const dist = viewPos - vh / 2;
        const y = -dist * p.speed * c.pf;
        p.el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
      }
    }
    checkReveals();
    checkCounters();
    updateRocket(currentScroll);
    updateGhost(currentScroll);
    requestAnimationFrame(frame);
  }

  // ---- sticky nav ----
  function initNav() {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    const update = () => nav.classList.toggle('solid', (window.scrollY || 0) > 40);
    window.addEventListener('scroll', update, {
      passive: true
    });
    update();
  }

  // ---- marquee ----
  function initMarquee() {
    document.querySelectorAll('.marquee-track').forEach(track => {
      track.innerHTML += track.innerHTML;
      let x = 0;
      const speedBase = parseFloat(track.getAttribute('data-mq')) || 0.5;
      const half = () => track.scrollWidth / 2;
      const tick = () => {
        const c = cfg[LEVEL] || cfg.cinematic;
        if (c.marquee > 0 && !reduced) {
          x -= speedBase * c.marquee;
          if (-x >= half()) x = 0;
          track.style.transform = `translate3d(${x}px,0,0)`;
        }
        requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }

  // ---- anchor jumps ----
  function initAnchors() {
    document.querySelectorAll('a[data-jump]').forEach(a => {
      a.addEventListener('click', e => {
        const id = a.getAttribute('href');
        if (!id || !id.startsWith('#')) return;
        const tgt = id === '#top' ? document.body : document.querySelector(id);
        if (!tgt) return;
        e.preventDefault();
        const y = id === '#top' ? 0 : docTop(tgt) - 72;
        window.scrollTo({
          top: y,
          behavior: reduced ? 'auto' : 'smooth'
        });
      });
    });
  }

  // ---- public API ----
  window.PubMotion = {
    setLevel(level) {
      if (!cfg[level]) return;
      LEVEL = level;
      root.setAttribute('data-motion', level);
      if (!cfg[level].pf || cfg[level].pf === 0) {
        parallaxEls.forEach(p => {
          p.el.style.transform = '';
        });
      }
    },
    refresh() {
      collectParallax();
    }
  };
  function boot() {
    initNav();
    initReveals();
    initCounters();
    initMarquee();
    initAnchors();
    initRocket();
    initGhost();
    collectParallax();
    requestAnimationFrame(frame);
    window.addEventListener('resize', () => {
      collectParallax();
      initRocket();
      initGhost();
    });
    window.addEventListener('load', () => {
      collectParallax();
      checkReveals();
    });
    // imgs can shift layout once loaded
    document.querySelectorAll('img').forEach(img => {
      if (!img.complete) img.addEventListener('load', collectParallax, {
        once: true
      });
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "agency/motion.js", error: String((e && e.message) || e) }); }

// agency/tweaks-panel.jsx
try { (() => {
/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "agency/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// agency/tweaks.jsx
try { (() => {
/* pub.tech Studio — Tweaks island.
   Applies live tweaks to the vanilla page via <html> attributes,
   CSS custom properties, and the PubMotion API. */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "hero": "a",
  "accent": "lime",
  "motion": "maximal",
  "grain": true
} /*EDITMODE-END*/;
const ACCENTS = {
  lime: {
    head: 'var(--pub-lime-500)',
    acc: 'var(--pub-lime-500)',
    acc2: 'var(--pub-aqua-500)'
  },
  aqua: {
    head: 'var(--pub-aqua-500)',
    acc: 'var(--pub-aqua-500)',
    acc2: 'var(--pub-lime-500)'
  },
  balanced: {
    head: 'var(--pub-lime-500)',
    acc: 'var(--pub-aqua-500)',
    acc2: 'var(--pub-aqua-500)'
  }
};
function StudioTweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const root = document.documentElement;
  React.useEffect(() => {
    root.setAttribute('data-hero', t.hero);
  }, [t.hero]);
  React.useEffect(() => {
    const a = ACCENTS[t.accent] || ACCENTS.lime;
    root.style.setProperty('--head', a.head);
    root.style.setProperty('--acc', a.acc);
    root.style.setProperty('--acc-2', a.acc2);
  }, [t.accent]);
  React.useEffect(() => {
    if (window.PubMotion) window.PubMotion.setLevel(t.motion);else root.setAttribute('data-motion', t.motion);
  }, [t.motion]);
  React.useEffect(() => {
    const g = document.querySelector('.bg-grain');
    if (g) g.style.display = t.grain ? '' : 'none';
  }, [t.grain]);
  return /*#__PURE__*/React.createElement(TweaksPanel, {
    title: "Tweaks"
  }, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Hero direction"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Layout",
    value: t.hero,
    options: [{
      value: 'a',
      label: 'Split'
    }, {
      value: 'b',
      label: 'Centered'
    }, {
      value: 'c',
      label: 'Editorial'
    }],
    onChange: v => setTweak('hero', v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Color"
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Color"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Accent",
    value: t.accent,
    options: [{
      value: 'lime',
      label: 'Lime'
    }, {
      value: 'aqua',
      label: 'Aqua'
    }, {
      value: 'balanced',
      label: 'Balanced'
    }],
    onChange: v => setTweak('accent', v)
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Film grain",
    value: t.grain,
    onChange: v => setTweak('grain', v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Motion"
  }), /*#__PURE__*/React.createElement(TweakSelect, {
    label: "Intensity",
    value: t.motion,
    options: [{
      value: 'off',
      label: 'Off'
    }, {
      value: 'restrained',
      label: 'Restrained'
    }, {
      value: 'cinematic',
      label: 'Cinematic'
    }, {
      value: 'maximal',
      label: 'Maximal'
    }],
    onChange: v => setTweak('motion', v)
  }));
}
(function mountTweaks() {
  const el = document.getElementById('tweaks-root');
  if (!el) return;
  ReactDOM.createRoot(el).render(/*#__PURE__*/React.createElement(StudioTweaks, null));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "agency/tweaks.jsx", error: String((e && e.message) || e) }); }

// assets/logos/brand-logos.js
try { (() => {
// pub.tech inline SVG logos — call pubLogos.wordmark() / pubLogos.logomark()
// to inject HTML strings, or use the constants directly.
window.pubLogos = {
  wordmark: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 370 90.57\" class=\"pub-wordmark-svg\" aria-label=\"pub.tech\"> <path d=\"M 0 90.57 L 0 20.661 L 14.69 20.661 L 14.69 23.993 C 16.872 20.991 20.137 19.486 24.484 19.486 C 28.831 19.486 32.493 20.534 35.597 22.64 C 38.701 24.746 41.077 27.757 42.743 31.673 C 44.409 35.588 45.238 40.274 45.238 45.72 C 45.238 51.167 44.359 55.463 42.6 59.379 C 40.84 63.295 38.379 66.356 35.233 68.555 C 32.087 70.754 28.434 71.862 24.289 71.862 C 22.201 71.862 20.348 71.498 18.733 70.763 C 17.118 70.027 15.773 68.961 14.69 67.557 L 14.69 84.007 L 0 90.57 Z M 21.93 57.671 C 24.67 57.671 26.793 56.622 28.298 54.516 C 29.795 52.41 30.548 49.484 30.548 45.729 C 30.548 41.974 29.812 38.828 28.349 36.772 C 26.886 34.717 24.746 33.686 21.938 33.686 C 20.34 33.686 18.978 33.897 17.853 34.32 C 16.729 34.743 15.671 35.445 14.699 36.426 L 14.699 54.736 C 14.995 55.548 15.832 56.25 17.219 56.816 C 18.606 57.391 20.179 57.671 21.947 57.671 L 21.93 57.671 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path> <path d=\"M 70.204 71.87 C 65.012 71.87 60.859 70.196 57.747 66.855 C 54.626 63.506 53.07 59.049 53.07 53.467 L 53.07 20.661 L 67.76 20.661 L 67.76 46.219 C 67.76 50.431 68.335 53.391 69.494 55.108 C 70.653 56.825 72.649 57.679 75.49 57.679 C 78.493 57.679 80.666 56.783 82.002 54.99 C 83.339 53.197 84.007 50.338 84.007 46.422 L 84.007 20.67 L 98.697 20.67 L 98.697 70.703 L 84.007 70.703 L 84.007 66.103 C 82.535 67.963 80.607 69.392 78.205 70.39 C 75.803 71.388 73.139 71.887 70.204 71.887 L 70.204 71.87 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path> <path d=\"M 133.059 71.87 C 130.903 71.87 129.127 71.481 127.723 70.695 C 126.319 69.908 125.126 68.64 124.145 66.881 L 124.145 70.695 L 109.455 70.695 L 109.455 6.563 L 124.145 0 L 124.145 24.281 C 125.219 22.716 126.581 21.524 128.23 20.704 C 129.879 19.892 131.782 19.477 133.93 19.477 C 137.981 19.477 141.559 20.594 144.68 22.826 C 147.792 25.059 150.245 28.146 152.021 32.079 C 153.797 36.011 154.685 40.519 154.685 45.619 C 154.685 53.839 152.765 60.275 148.934 64.91 C 145.094 69.545 139.8 71.862 133.051 71.862 L 133.059 71.87 Z M 131.393 57.671 C 134.133 57.671 136.256 56.63 137.762 54.541 C 139.258 52.452 140.011 49.484 140.011 45.627 C 140.011 41.771 139.258 38.861 137.762 36.789 C 136.256 34.717 134.142 33.677 131.393 33.677 C 129.829 33.677 128.416 33.931 127.156 34.438 C 125.896 34.946 124.898 35.673 124.145 36.62 L 124.145 54.829 C 124.991 55.844 125.947 56.563 127.012 57.011 C 128.069 57.451 129.533 57.671 131.393 57.671 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path> <path d=\"M 167.717 71.87 C 165.172 71.87 163.049 71.05 161.349 69.426 C 159.649 67.794 158.803 65.705 158.803 63.159 C 158.803 60.614 159.649 58.635 161.349 56.918 C 163.049 55.201 165.163 54.347 167.717 54.347 C 170.272 54.347 172.403 55.201 174.128 56.918 C 175.853 58.635 176.725 60.715 176.725 63.159 C 176.725 65.604 175.862 67.794 174.128 69.426 C 172.394 71.059 170.263 71.87 167.717 71.87 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path> <path d=\"M 198.654 71.87 C 194.316 71.87 191.094 70.729 188.988 68.445 C 186.882 66.162 185.833 62.703 185.833 58.068 L 185.833 33.593 L 179.076 33.593 L 179.076 20.67 L 185.833 20.67 L 185.833 6.952 L 200.422 0 L 200.422 20.661 L 211.095 20.661 L 211.095 33.584 L 200.422 33.584 L 200.422 56.3 C 200.422 57.282 200.676 58.034 201.183 58.55 C 201.691 59.074 202.46 59.337 203.509 59.337 C 206.021 59.337 208.778 58.685 211.78 57.375 L 210.114 69.612 C 208.549 70.331 206.824 70.881 204.947 71.278 C 203.069 71.667 200.972 71.87 198.654 71.87 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path> <path d=\"M 240.366 71.87 C 235.401 71.87 231.139 70.822 227.562 68.733 C 223.984 66.644 221.244 63.641 219.341 59.726 C 217.438 55.81 216.474 51.108 216.474 45.627 C 216.474 40.147 217.447 35.69 219.383 31.774 C 221.32 27.858 224.086 24.831 227.655 22.691 C 231.232 20.551 235.461 19.486 240.358 19.486 C 244.603 19.486 248.426 20.34 251.834 22.057 C 255.242 23.774 257.957 26.378 259.962 29.888 C 261.966 33.398 262.972 37.83 262.972 43.183 C 262.972 44.097 262.956 45.23 262.922 46.583 C 262.888 47.936 262.778 49.281 262.575 50.626 L 230.75 50.626 C 230.75 52.419 231.139 53.975 231.926 55.303 C 232.712 56.622 233.82 57.645 235.258 58.364 C 236.695 59.083 238.387 59.438 240.349 59.438 C 242.895 59.438 245.026 59.032 246.734 58.212 C 248.451 57.4 250.1 56.038 251.707 54.152 L 260.131 62.576 C 257.78 65.417 254.989 67.676 251.758 69.359 C 248.527 71.042 244.721 71.879 240.349 71.879 L 240.366 71.87 Z M 230.97 39.656 L 248.984 39.656 C 248.722 37.931 248.214 36.493 247.47 35.352 C 246.717 34.21 245.728 33.356 244.485 32.781 C 243.241 32.214 241.745 31.926 239.977 31.926 C 237.592 31.926 235.588 32.611 233.955 33.982 C 232.323 35.352 231.325 37.246 230.97 39.656 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path> <path d=\"M 293.723 71.87 C 288.894 71.87 284.716 70.813 281.19 68.69 C 277.663 66.568 274.94 63.548 273.011 59.633 C 271.083 55.717 270.119 51.082 270.119 45.729 C 270.119 40.375 271.091 35.783 273.028 31.85 C 274.973 27.918 277.714 24.873 281.249 22.716 C 284.792 20.56 288.945 19.486 293.706 19.486 C 299.449 19.486 304.193 20.822 307.932 23.503 C 311.67 26.175 314.368 30.159 316.034 35.445 L 302.028 40.045 C 301.242 37.99 300.151 36.4 298.747 35.276 C 297.343 34.151 295.728 33.584 293.901 33.584 C 291.321 33.584 289.19 34.726 287.516 37.009 C 285.833 39.293 284.995 42.202 284.995 45.72 C 284.995 49.239 285.807 52.131 287.439 54.389 C 289.072 56.639 291.161 57.764 293.706 57.764 C 295.66 57.764 297.343 57.172 298.747 55.979 C 300.151 54.787 301.242 53.002 302.028 50.617 L 316.034 54.634 C 314.368 60.411 311.678 64.724 307.957 67.583 C 304.236 70.441 299.491 71.87 293.715 71.87 L 293.723 71.87 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path> <path d=\"M 324.373 70.695 L 324.373 6.757 L 339.063 0 L 339.063 25.262 C 340.695 23.334 342.657 21.896 344.941 20.932 C 347.224 19.968 349.838 19.486 352.772 19.486 C 356.299 19.486 359.352 20.23 361.923 21.71 C 364.503 23.198 366.49 25.313 367.894 28.07 C 369.298 30.827 370 34.1 370 37.889 L 370 70.686 L 355.31 70.686 L 355.31 45.128 C 355.31 40.917 354.726 37.957 353.576 36.24 C 352.417 34.523 350.421 33.669 347.58 33.669 C 344.738 33.669 342.446 34.565 341.093 36.358 C 339.74 38.151 339.063 41.01 339.063 44.925 L 339.063 70.678 L 324.373 70.678 L 324.373 70.695 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path> </svg>",
  logomark: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 240\" class=\"pub-logomark-svg\" aria-label=\"pub.tech logo mark\"> <path d=\"M 120 240 C 186.274 240 240 186.274 240 120 C 240 53.726 186.274 0 120 0 C 53.726 0 0 53.726 0 120 C 0 186.274 53.726 240 120 240 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path> <path d=\"M 155.2 104.94 C 155.2 104.94 155.11 104.9 155.06 104.88 L 155.04 104.88 C 148.41 101.98 147.31 101.69 141.78 91.95 C 137.21 83.9 129.88 77.34 120.51 73.87 C 100.2 66.35 77.77 76.1 69.16 95.66 C 69.58 95.64 70 95.6 70.43 95.6 C 88.29 95.6 102.77 110.08 102.77 127.94 C 102.77 136.92 99.11 145.04 93.19 150.9 C 103.12 155.91 104.21 159.41 104.9 168.02 C 105.7 178.04 112.17 187.18 122.22 190.9 C 136.02 196.01 151.36 188.96 156.46 175.15 C 157.8 171.53 158.29 167.81 158.06 164.19 C 157.5 155.47 157.97 154.04 163.81 147.77 C 166.25 145.22 168.22 142.14 169.53 138.61 C 174.46 125.29 168.06 110.55 155.21 104.94 L 155.2 104.94 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path> <path d=\"M 70.42 154 C 84.818 154 96.49 142.328 96.49 127.93 C 96.49 113.532 84.818 101.86 70.42 101.86 C 56.022 101.86 44.35 113.532 44.35 127.93 C 44.35 142.328 56.022 154 70.42 154 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path> <path d=\"M 169.39 95.23 C 179.823 95.23 188.28 86.773 188.28 76.34 C 188.28 65.907 179.823 57.45 169.39 57.45 C 158.957 57.45 150.5 65.907 150.5 76.34 C 150.5 86.773 158.957 95.23 169.39 95.23 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path> </svg>"
};
// Auto-inject: find every element with [data-pub-logo="wordmark"] or "logomark" and stuff the SVG in.
(function inject() {
  document.querySelectorAll('[data-pub-logo]').forEach(el => {
    const which = el.getAttribute('data-pub-logo');
    if (which === 'wordmark') el.innerHTML = window.pubLogos.wordmark;
    if (which === 'logomark') el.innerHTML = window.pubLogos.logomark;
  });
})();
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-pub-logo]').forEach(el => {
      const which = el.getAttribute('data-pub-logo');
      if (which === 'wordmark') el.innerHTML = window.pubLogos.wordmark;
      if (which === 'logomark') el.innerHTML = window.pubLogos.logomark;
    });
  });
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/logos/brand-logos.js", error: String((e && e.message) || e) }); }

})();
