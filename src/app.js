import createCard from './card.js';
import createCommentModal from './comment-modal.js';

const cardContainer = document.querySelector('.card-container');

async function getProductData(id) {
  const API_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  const response = await fetch(API_URL + id);
  return response.json();
}

export default function init() {
  const productIds = [52859, 52919, 52944, 53043, 52802, 52918];

  Promise.all(productIds.map((id) => getProductData(id)))
    .then((productDataArray) => {
      productDataArray.forEach((productData) => {
        const product = productData.meals[0];
        const card = createCard(product);

        const commentBtn = document.createElement('button');
        commentBtn.innerHTML = 'Comment';
        card.appendChild(commentBtn);

        const commentModal = createCommentModal(product);
        cardContainer.appendChild(commentModal);

        commentBtn.addEventListener('click', () => {
          commentModal.style.display = 'block';
        });

        cardContainer.appendChild(card);
      });
    })
    .catch((error) => console.error(error));
}