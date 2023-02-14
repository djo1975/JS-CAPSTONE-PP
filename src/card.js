function createCard(product) {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardImage = document.createElement('img');
  cardImage.src = product.strMealThumb;
  card.appendChild(cardImage);

  const likeSection = document.createElement('div');
  likeSection.classList.add('like-section');
  card.appendChild(likeSection);

  const likeIcon = document.createElement('i');
  likeIcon.classList.add('far', 'fa-heart');
  likeSection.appendChild(likeIcon);

  const likeCount = document.createElement('span');
  likeCount.classList.add('like-count');
  likeCount.textContent = '0 likes'; // set initial value to 0
  likeSection.appendChild(likeCount);

  const cardTitle = document.createElement('h2');
  cardTitle.textContent = product.strMeal;
  card.appendChild(cardTitle);

  const cardDescription = document.createElement('p');
  const words = product.strInstructions.split(' ');
  if (words.length > 50) {
    cardDescription.textContent = `${words.slice(0, 50).join(' ')}...`;
  } else {
    cardDescription.textContent = product.strInstructions;
  }
  card.appendChild(cardDescription);

  return card;
}

export default createCard;
