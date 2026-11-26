'use strict';

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-navigation');

if (menuToggle && navigation) {
  const closeMenu = () => {
    navigation.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.querySelector('span').textContent = '+';
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    navigation.classList.toggle('is-open', !isOpen);
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.querySelector('span').textContent = isOpen ? '+' : '−';
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuToggle.focus();
    }
  });

  window.matchMedia('(min-width: 701px)').addEventListener('change', closeMenu);
}

const filterButtons = document.querySelectorAll('[data-filter]');
const menuItems = document.querySelectorAll('[data-category]');
const filterStatus = document.querySelector('#filter-status');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    let visibleCount = 0;

    filterButtons.forEach((filter) => {
      filter.setAttribute('aria-pressed', String(filter === button));
    });

    menuItems.forEach((item) => {
      const visible = category === 'all' || item.dataset.category === category;
      item.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    if (filterStatus) {
      const label = category === 'all' ? 'all menu' : category;
      filterStatus.textContent = `Showing ${visibleCount} ${label} items.`;
    }
  });
});
