'use strict';
(() => {
  const measurementId = 'G-90336HE53W';
  const choiceKey = 'pharma_nest_analytics_choice';
  let started = false;
  let lastSection = 'home';
  const start = () => {
    if (started) return;
    started = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, { send_page_view: true });
    const tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
    document.head.appendChild(tag);
    const sections = document.querySelectorAll('main section[id]');
    if ('IntersectionObserver' in window) {
      const seen = new Set();
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          lastSection = entry.target.id;
          if (!seen.has(lastSection)) {
            seen.add(lastSection);
            window.gtag('event', 'section_view', { section_name: lastSection });
          }
        });
      }, { threshold: 0.2 });
      sections.forEach(section => observer.observe(section));
    }
    document.addEventListener('click', event => {
      const link = event.target.closest('a[data-contact]');
      if (link) window.gtag('event', 'whatsapp_click', { section_name: link.closest('section')?.id || 'navigation_or_footer' });
    });
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') window.gtag('event', 'last_visible_section', { section_name: lastSection });
    });
  };
  let choice = null;
  try { choice = localStorage.getItem(choiceKey); } catch (_) {}
  if (choice !== 'reject') start();
})();
