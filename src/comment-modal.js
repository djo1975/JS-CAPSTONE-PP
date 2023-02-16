import { commentPost, getLastTwoComments } from './comment-form.js';
import calCom from './comment-counter.js';

function createCommentModal(product) {
  const commentModal = document.createElement('div');
  commentModal.classList.add('comment-modal');
  commentModal.classList.add('hidden')

  const closeBtn = document.createElement('i');
  closeBtn.classList.add('fas', 'fa-times');
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

  const commentHeader = document.createElement('h2');
  commentModal.appendChild(commentHeader);

  const commentsSection = document.createElement('div');
  commentsSection.classList.add('comments');
  commentModal.appendChild(commentsSection);

  function updateComments() {
    getLastTwoComments(product.idMeal)
      .then((comments) => {
        commentHeader.innerHTML = `Comments (${comments.length})`;
        commentsSection.innerHTML = '';

        comments.forEach((comment) => {
          const commentP = document.createElement('p');
          commentP.textContent = `${comment.creation_date}: ${comment.username} ${comment.comment}`;
          commentsSection.appendChild(commentP);
        });
      });
  }

  updateComments();
  const commentInterval = setInterval(updateComments, 10000);

  const addCommentSection = document.createElement('div');
  addCommentSection.classList.add('add-comment');

  const addCommentTitle = document.createElement('h4');
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
  // eslint-disable-next-line no-unused-vars
  let autoRefreshInterval;
  submitBtn.addEventListener('click', () => {
    const username = nameInput.value;
    const comment = commentTextarea.value;
    commentPost(product.idMeal, username, comment)
      .then(() => {
      // clear inputs
        nameInput.value = '';
        commentTextarea.value = '';
        // update comments
        updateComments();
        // start interval to automatically refresh comments
        clearInterval(commentInterval);
        autoRefreshInterval = setInterval(() => {
          getLastTwoComments(product.idMeal)
            .then((comments) => {
              if (comments.length > 2) {
              // if there are more than two comments, update the comments section
                updateComments();
              }
            });
        }, 10000);
      });
  });

  commentModal.appendChild(addCommentSection);

  return commentModal;
}
calCom();
export default createCommentModal;
