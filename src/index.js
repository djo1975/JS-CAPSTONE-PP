import './style.css';
import getData from './modules/api.js';
import de from '../assets/dee.jpg';

const cardsCont = document.getElementById('cards-container');

const popData = async () => {
  const userData = await getData();
  console.log('ororor:', userData);

  userData.forEach((element) => {
    const card = document.createElement('article');

    card.innerHTML = `
    <img src=${element.picture.large} alt="">
    <article id="desc">
    <div id="name-like">
      <h3 id="name">${element.name.first}</h3>
      <div>
        <iconify-icon class="like-btn" icon="mdi:cards-heart-outline"></iconify-icon>
        <small>5 likes</small>
      </div>
    </div>
    <button>Comments</button>
  </article>
`;
    cardsCont.appendChild(card);
  });
};

popData();