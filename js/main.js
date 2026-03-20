/* ═══════════════════════════════════════════════════════════════
   HimTrek – main.js
   1. Loading screen (3 s animated progress bar + stars)
   2. Active nav link highlight on scroll
   3. Scroll-reveal animations
═══════════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────
   1. LOADING SCREEN
───────────────────────────────────────*/
(function () {
  var loader  = document.getElementById('loader');
  var site    = document.getElementById('site');
  var bar     = document.getElementById('loaderBar');
  var starsEl = document.getElementById('loaderStars');

  var DURATION = 3000; /* ← change ms here to adjust loader length */

  /* Generate random stars */
  if (starsEl) {
    for (var i = 0; i < 130; i++) {
      var s = document.createElement('span');
      var size = (Math.random() * 2.2 + 0.8) + 'px';
      s.style.cssText = [
        'left:'              + (Math.random() * 100) + '%',
        'top:'               + (Math.random() * 100) + '%',
        'width:'             + size,
        'height:'            + size,
        'opacity:'           + (Math.random() * 0.6 + 0.15),
        'animation-delay:'   + (Math.random() * 2.5) + 's',
        'animation-duration:'+ (Math.random() * 2 + 1.5) + 's'
      ].join(';');
      starsEl.appendChild(s);
    }
  }

  /* Animate progress bar with ease-out cubic */
  var start = null;

  function step(ts) {
    if (!start) start = ts;
    var p = Math.min((ts - start) / DURATION, 1);
    var eased = 1 - Math.pow(1 - p, 3);   /* ease-out-cubic */
    if (bar) bar.style.width = (eased * 100) + '%';
    if (p < 1) {
      requestAnimationFrame(step);
    } else {
      done();
    }
  }

  function done() {
    if (loader) loader.classList.add('fade-out');
    if (site)   site.classList.replace('site-hidden', 'site-visible');
    if (loader) {
      loader.addEventListener('transitionend', function handler() {
        loader.removeEventListener('transitionend', handler);
        loader.remove();
      });
    }
  }

  requestAnimationFrame(step);
})();


/* ─────────────────────────────────────
   2. SMOOTH SCROLL (anchor links)
───────────────────────────────────────*/
document.addEventListener('click', function (e) {
  var link = e.target.closest('a[href^="#"]');
  if (!link) return;
  var id = link.getAttribute('href');
  if (id === '#') return;
  var target = document.querySelector(id);
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
});


/* ─────────────────────────────────────
   3. ACTIVE NAV LINK
───────────────────────────────────────*/
(function () {
  var sections = document.querySelectorAll('section[id], footer[id]');
  var links    = document.querySelectorAll('.nav-links a');
  if (!sections.length || !links.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      links.forEach(function (link) {
        var match = link.getAttribute('href') === '#' + entry.target.id;
        link.classList.toggle('active', match);
      });
    });
  }, { rootMargin: '-38% 0px -58% 0px', threshold: 0 });

  sections.forEach(function (s) { observer.observe(s); });
})();


/* ─────────────────────────────────────
   4. SCROLL REVEAL
   Add class "reveal" or "reveal-stagger"
   to any element in HTML to animate it.
───────────────────────────────────────*/
(function () {
  var els = document.querySelectorAll('.reveal, .reveal-stagger');
  if (!els.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.10 });

  els.forEach(function (el) { observer.observe(el); });
})();