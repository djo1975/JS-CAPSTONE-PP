const meals = document.querySelector('.meals');
const mealsCounter = document.querySelector('.meals-counter');
const ui = (data, likeNbrs = []) => {
  meals.innerHTML = '';
  data.forEach((meal, index) => {
    if (index <= 5) {
      if (meal.strMeal.length > 25) {
        meal.strMeal = `${meal.strMeal.substring(0, 15)}...`;
      }
      const li = document.createElement('li');
      li.className = 'meal-container';
      li.id = `${meal.idMeal}`;
      const image = document.createElement('img');
      const src = meal.strMealThumb;
      image.className = 'meal-img';
      image.src = src;

      const div = document.createElement('div');
      div.className = 'like-container';
      const header = document.createElement('h5');
      header.innerHTML = meal.strMeal;
      header.className = 'card-header';

      const likeDiv = document.createElement('div');
      likeDiv.className = 'like';
      const heartIcon = document.createElement('i');
      heartIcon.className = 'fa fa-heart-o like-icon';
      const likeTxt = document.createElement('h7');
      likeTxt.className = 'like-txt';
      likeTxt.innerHTML = `${likeNbrs[index].likes} likes`;
      likeTxt.id = index;

      likeDiv.appendChild(heartIcon);
      likeDiv.appendChild(likeTxt);

      div.appendChild(header);
      div.appendChild(likeDiv);

      const comBtn = document.createElement('button');
      comBtn.className = 'comBtn';
      comBtn.id = meal.idMeal;
      comBtn.innerHTML = 'Comments';

      const resBtn = document.createElement('button');
      resBtn.className = 'resBtn';
      resBtn.id = `${index}`;
      resBtn.innerHTML = 'Reservations';

      li.appendChild(image);
      li.appendChild(div);
      li.appendChild(comBtn);
      li.appendChild(resBtn);
      meals.appendChild(li);
    }
  });

  mealsCounter.innerHTML = `Meals(${calMeals()})`;
};

export default ui;
