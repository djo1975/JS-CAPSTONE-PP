function createCard(product) {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardImage = document.createElement('img');
  cardImage.src = product.strMealThumb;
  card.appendChild(cardImage);

  const cardTitle = document.createElement('h2');
  cardTitle.textContent = product.strMeal;
  card.appendChild(cardTitle);

  const cardDescription = document.createElement('p');
  cardDescription.textContent = product.strInstructions;
  card.appendChild(cardDescription);

  return card;
}

export default createCard;
