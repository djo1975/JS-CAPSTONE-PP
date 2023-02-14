const API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

async function getProductData() {
  const response = await fetch(API_URL);
  return response.json();
}

getProductData().then((productData) => {
  const products = productData.meals;
  products.forEach((product) => {
    // Izmene koje ćete napraviti u products.js
    const productContainer = document.createElement('div');
    productContainer.classList.add('product');

    const productImage = document.createElement('img');
    productImage.src = product.strMealThumb;
    productContainer.appendChild(productImage);

    const productName = document.createElement('h2');
    productName.textContent = product.strMeal;
    productContainer.appendChild(productName);

    const productDescription = document.createElement('p');
    productDescription.textContent = product.strInstructions;
    productContainer.appendChild(productDescription);

    document.querySelector('.card-container').appendChild(productContainer);
  });
})
  .catch((error) => console.error(error));
