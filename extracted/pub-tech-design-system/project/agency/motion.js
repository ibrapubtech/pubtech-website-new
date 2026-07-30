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
    off:        { lerp: false, ease: 1,    pf: 0,    marquee: 0 },
    restrained: { lerp: false, ease: 1,    pf: 0.45, marquee: 0.45 },
    cinematic:  { lerp: true,  ease: 0.09, pf: 1,    marquee: 1 },
    maximal:    { lerp: true,  ease: 0.07, pf: 1.6,  marquee: 1.6 },
  };

  let currentScroll = window.scrollY || 0;
  let parallaxEls = [];
  let revealEls = [];
  let counterEls = [];

  // ---- hero rocket launch-on-scroll ----
  let rocketEl = null;       // .hero-art container
  let rocketBase = '';       // variant-dependent centering transform
  let rocketSpan = 1;        // px of scroll over which the launch completes
  const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
  function initRocket() {
    rocketEl = document.querySelector('.hero-art');
    if (!rocketEl) return;
    const variant = root.getAttribute('data-hero') || 'a';
    rocketBase = variant === 'b' ? 'translate(-50%, -50%)'
               : variant === 'c' ? ''
               : 'translateY(-50%)';
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
    if (reduced || c.pf === 0) { restRocket(); return; }
    const p = clamp01(sy / rocketSpan);
    if (p <= 0) { restRocket(); return; }
    rocketAtRest = false;
    const accel = p * p;                     // ease-in so it builds speed
    const dy = accel * window.innerHeight * 0.95;   // whoosh downward, off-screen
    const dx = -accel * 90;                   // drift slightly toward the copy
    const rot = p * 175;                      // turn to nose downward / tumble
    const sc = 1 - p * 0.45;                  // shrink as it dives away
    const op = clamp01(1 - (p - 0.45) / 0.5); // fade out over the back half
    const launch = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0) rotate(${rot.toFixed(1)}deg) scale(${sc.toFixed(3)})`;
    rocketEl.style.transform = rocketBase ? `${rocketBase} ${launch}` : launch;
    rocketEl.style.opacity = op.toFixed(3);
  }

  const lerp = (a, b, t) => a + (b - a) * t;

  // ---- cursor-following ghost rocket (behind the lower sections) ----
  let ghostEl = null, ghostImg = null;
  let mouseX = 0, mouseY = 0;
  let ghostX = 0, ghostY = 0, ghostPX = 0;
  let ghostZone = Infinity;     // scrollY past which the ghost wakes up
  let ghostPrimed = false;      // becomes true on first pointer move
  let ghostOp = 0;              // current opacity, lerped toward target
  function initGhost() {
    ghostEl = document.querySelector('.rocket-ghost');
    if (!ghostEl) return;
    ghostImg = ghostEl.querySelector('img');
    // Wake as the portfolio header arrives — stays hidden through the hero and
    // the horizontal marquee band that sits directly above the portfolio.
    const portfolio = document.querySelector('#portfolio') || document.querySelector('.section-pad');
    ghostZone = portfolio ? docTop(portfolio) - window.innerHeight * 0.35
                          : window.innerHeight * 1.1;
    if (!initGhost._bound) {
      window.addEventListener('pointermove', (e) => {
        mouseX = e.clientX; mouseY = e.clientY;
        if (!ghostPrimed) { ghostX = mouseX; ghostY = mouseY; ghostPX = mouseX; ghostPrimed = true; }
      }, { passive: true });
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
    const w = ghostEl.offsetWidth, h = ghostEl.offsetHeight;
    ghostEl.style.transform =
      `translate3d(${(ghostX - w / 2).toFixed(1)}px, ${(ghostY - h / 2).toFixed(1)}px, 0)`;
    // bank toward travel direction so it reads as flight, not a sticker
    const vx = ghostX - ghostPX;
    ghostPX = ghostX;
    const rot = 180 + Math.max(-26, Math.min(26, vx * 0.6));
    if (ghostImg) ghostImg.style.transform = `rotate(${rot.toFixed(1)}deg)`;
  }

  function docTop(el) {
    let y = 0, n = el;
    while (n) { y += n.offsetTop; n = n.offsetParent; }
    return y;
  }

  function collectParallax() {
    parallaxEls = Array.from(document.querySelectorAll('[data-speed]')).map((el) => ({
      el,
      speed: parseFloat(el.getAttribute('data-speed')) || 0,
      base: docTop(el) + el.offsetHeight / 2,
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
    const step = (now) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      valEl.textContent = Math.round(to * eased).toString();
      if (p < 1) requestAnimationFrame(step);
      else valEl.textContent = to.toString();
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
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  // ---- marquee ----
  function initMarquee() {
    document.querySelectorAll('.marquee-track').forEach((track) => {
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
    document.querySelectorAll('a[data-jump]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (!id || !id.startsWith('#')) return;
        const tgt = id === '#top' ? document.body : document.querySelector(id);
        if (!tgt) return;
        e.preventDefault();
        const y = id === '#top' ? 0 : docTop(tgt) - 72;
        window.scrollTo({ top: y, behavior: reduced ? 'auto' : 'smooth' });
      });
    });
  }

  // ---- public API ----
  window.PubMotion = {
    setLevel(level) {
      if (!cfg[level]) return;
      LEVEL = level;
      root.setAttribute('data-motion', level);
      if ((!cfg[level].pf || cfg[level].pf === 0)) {
        parallaxEls.forEach((p) => { p.el.style.transform = ''; });
      }
    },
    refresh() { collectParallax(); },
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

    window.addEventListener('resize', () => { collectParallax(); initRocket(); initGhost(); });
    window.addEventListener('load', () => { collectParallax(); checkReveals(); });
    // imgs can shift layout once loaded
    document.querySelectorAll('img').forEach((img) => {
      if (!img.complete) img.addEventListener('load', collectParallax, { once: true });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
