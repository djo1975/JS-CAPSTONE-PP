function calCards() {
  const cards = document.querySelectorAll('.card');
  const numCards = cards.length;
  const headerNavItem = document.querySelector('.header__nav-item');
  headerNavItem.textContent = `Recepies (${numCards})`;
}

export default calCards;
