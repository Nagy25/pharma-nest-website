'use strict';

// Update contact and store destinations here. No keys or services are needed.
const SITE_CONFIG = Object.freeze({
  whatsappNumber: '201207511334',
  trialMessage: 'مرحبًا، مهتم بتجربة Pharma Nest مجانًا لمدة ١٤ يوم. ممكن أعرف تفاصيل التفعيل؟',
  android: 'https://play.google.com/store/apps/details?id=com.pharmaNest.smarttech.app.pharma_nest',
  ios: 'https://apps.apple.com/eg/app/pharma-nest/id6823165189',
});

const contactUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.trialMessage)}`;
document.querySelectorAll('[data-contact]').forEach(link => { link.href = contactUrl; });
document.querySelectorAll('[data-store]').forEach(link => { link.href = SITE_CONFIG[link.dataset.store]; });
document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');
const mobileQuery = window.matchMedia('(max-width: 800px)');
function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'فتح القائمة');
  navigation.classList.remove('is-open');
}
toggle.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'إغلاق القائمة' : 'فتح القائمة');
  navigation.classList.toggle('is-open', isOpen);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.nav-wrap')) closeMenu();
});
mobileQuery.addEventListener('change', closeMenu);
// Without JavaScript, navigation remains visible and native FAQ controls still work.
document.documentElement.classList.add('js');

// Inline previews paint immediately; image loading never blocks scroll reveals.
function initScreenshotLoading() {
  document.querySelectorAll('.screenshot').forEach(frame => {
    const image = frame.querySelector('img');
    const showImage = async () => {
      try {
        if (image.decode) await image.decode();
      } catch {
        // A loaded image can still be shown if asynchronous decoding is unavailable.
      }
      frame.classList.remove('is-loading', 'has-error');
    };
    const showFallback = () => {
      frame.classList.remove('is-loading');
      frame.classList.add('has-error');
    };

    image.addEventListener('load', showImage);
    image.addEventListener('error', showFallback);
    if (!image.complete) frame.classList.add('is-loading');
    else if (image.naturalWidth > 0) showImage();
    else showFallback();
  });
}

// Reveal upcoming content once, without hiding anything when motion is disabled.
function initScrollReveal() {
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motionPreference.matches || !('IntersectionObserver' in window)) return;

  const targets = document.querySelectorAll([
    '.section-heading', '.showcase', '.feature-card', '.shortages-copy',
    '.shortage-gallery > figure', '.steps > article', '.setup-note',
    '.faq-intro', '.faq-list', '.trial-section', '.download-section',
  ].join(', '));

  const reveal = target => {
    target.classList.remove('is-pending');
    observer.unobserve(target);
  };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) reveal(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

  document.querySelectorAll('.feature-grid, .shortage-gallery, .steps').forEach(group => {
    Array.from(group.children).forEach((child, index) => {
      child.style.setProperty('--reveal-delay', `${Math.min(index, 2) * 80}ms`);
    });
  });

  try {
    targets.forEach(target => {
      // Keep the initial viewport and content above a direct anchor visible.
      if (target.getBoundingClientRect().top < window.innerHeight - 32) return;
      observer.observe(target);
      target.classList.add('scroll-reveal', 'is-pending');
    });
  } catch {
    targets.forEach(target => target.classList.remove('is-pending'));
    observer.disconnect();
    return;
  }

  // Keyboard focus must never land inside visually hidden content.
  document.addEventListener('focusin', event => {
    const target = event.target.closest('.scroll-reveal.is-pending');
    if (target) reveal(target);
  });

  motionPreference.addEventListener('change', event => {
    if (!event.matches) return;
    targets.forEach(reveal);
    observer.disconnect();
  });
}

initScreenshotLoading();
initScrollReveal();
