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
