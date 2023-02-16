import { addLike, getLikes, ides } from './api.js';

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

  const index = ides.indexOf(product.idMeal);

  const updateLikeCount = async () => {
    const likes = await getLikes();
    const productLikes = likes.find((like) => like.item_id === ides[index]);
    likeCount.textContent = `${productLikes.likes}`;
  };

  // Update like count when the card is created
  updateLikeCount();

  likeIcon.addEventListener('click', async () => {
    await addLike(index);
    await updateLikeCount();
  });

  return card;
}

export default createCard;
