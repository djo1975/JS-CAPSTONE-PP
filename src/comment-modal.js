function createCommentModal(product) {
  const commentModal = document.createElement('div');
  commentModal.classList.add('comment-modal');

  const closeBtn = document.createElement('button');
closeBtn.innerHTML = '<i class="fas fa-times"></i>';
commentModal.appendChild(closeBtn);

closeBtn.addEventListener('click', () => {
  commentModal.style.display = 'none';
});


  const productImage = document.createElement('img');
  productImage.src = product.strMealThumb;
  productImage.alt = product.strMeal;
  commentModal.appendChild(productImage);

  const productName = document.createElement('h2');
  productName.textContent = product.strMeal;
  commentModal.appendChild(productName);

  const productDescription = document.createElement('p');
  productDescription.textContent = product.strInstructions;
  commentModal.appendChild(productDescription);

  const commentsSection = document.createElement('div');
  commentsSection.classList.add('comments');

  const comment1 = document.createElement('p');
  comment1.textContent = 'Comment 1';
  commentsSection.appendChild(comment1);

  const comment2 = document.createElement('p');
  comment2.textContent = 'Comment 2';
  commentsSection.appendChild(comment2);

  commentModal.appendChild(commentsSection);

  const addCommentSection = document.createElement('div');
  addCommentSection.classList.add('add-comment');

  const addCommentTitle = document.createElement('h3');
  addCommentTitle.textContent = 'Add comment';
  addCommentSection.appendChild(addCommentTitle);

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.placeholder = 'Your name';
  addCommentSection.appendChild(nameInput);
  

  const commentTextarea = document.createElement('textarea');
  commentTextarea.rows = 4;
  commentTextarea.cols = 50;
  commentTextarea.placeholder = 'Your insights';
  addCommentSection.appendChild(commentTextarea);
  
  const submitBtn = document.createElement('button');
  submitBtn.innerHTML = 'Submit';
  addCommentSection.appendChild(submitBtn);

  commentModal.appendChild(addCommentSection);

  return commentModal;
}

export default createCommentModal;