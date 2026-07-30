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
    document.querySelectorAll('[data-include-footer]').forEach((slot) => {
      slot.outerHTML = HTML;
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);
  else inject();
})();
