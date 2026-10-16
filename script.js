const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');

// On refresh, return to the profile/About hero instead of restoring a lower section.
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
const pageNavigation = performance.getEntriesByType('navigation')[0];
if (pageNavigation?.type === 'reload') {
  if (location.hash) history.replaceState(null, '', location.pathname + location.search);
  window.scrollTo(0, 0);
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  navigation.classList.toggle('is-open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    navigation.classList.remove('is-open');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
