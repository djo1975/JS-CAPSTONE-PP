import calCards from './cards-counter.js';

describe('calCards', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="header__nav-item"></div>
      <div class="card"></div>
      <div class="card"></div>
    `;
  });

  test('updates the header nav item text with the number of cards', () => {
    calCards();
    const headerNavItem = document.querySelector('.header__nav-item');
    expect(headerNavItem.textContent).toBe('Recepies (2)');
  });
});
