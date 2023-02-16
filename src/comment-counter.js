function calCom() {
  const cards = document.querySelectorAll('.Comment');
  const numCards = cards.length;
  const headerNavItem = document.querySelector('.header__nav-item');
  headerNavItem.textContent = `Recepies (${numCards})`;
}

export default calCom;
