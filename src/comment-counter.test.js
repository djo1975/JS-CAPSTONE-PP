import calCom from './comment-counter.js';

describe('calCom', () => {
  beforeAll(() => {
    document.body.innerHTML = `
      <header>
        <nav>
          <ul>
            <li class="header__nav-item">Recepies (0)</li>
          </ul>
        </nav>
      </header>
      <div class="Comment">Comment 1</div>
      <div class="Comment">Comment 2</div>
    `;
  });

  test('should update the text content of the navigation item with the correct number of comments', () => {
    calCom();
    const headerNavItem = document.querySelector('.header__nav-item');
    expect(headerNavItem.textContent).toBe('Recepies (2)');
  });
});
