/* Draft A — 파랄락스 + 리빌 */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('on'); io.unobserve(en.target); }
      });
    }, { threshold: 0.15 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('on'); });
  }

  if (reduce) return;

  var layers = document.querySelectorAll('.layer');
  var plates = document.querySelectorAll('.plate');
  var ticking = false;

  function parallax() {
    var y = window.scrollY;
    layers.forEach(function (l) {
      var s = parseFloat(l.getAttribute('data-speed') || '0.2');
      l.style.transform = 'translate3d(0,' + (y * s) + 'px,0)';
    });
    var vh = window.innerHeight;
    plates.forEach(function (p) {
      var r = p.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      var progress = (r.top + r.height / 2 - vh / 2) / vh;
      var media = p.querySelector('img,video');
      if (media) media.style.transform = 'scale(1.06) translate3d(0,' + (progress * -26) + 'px,0)';
    });
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { requestAnimationFrame(parallax); ticking = true; }
  }, { passive: true });
  parallax();
})();
