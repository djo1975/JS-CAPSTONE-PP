import { commentPost, getLastTwoComments } from './comment-form.js';
import calCom from './comment-counter.js';

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

  const commentHeader = document.createElement('h2');
  commentModal.appendChild(commentHeader);

  const commentsSection = document.createElement('div');
  commentsSection.classList.add('comments');
  commentModal.appendChild(commentsSection);

  getLastTwoComments(product.idMeal)
    .then((comments) => {
      commentHeader.innerHTML = `Comment (${comments.length})`;
      comments.forEach((comment) => {
        const commentP = document.createElement('h3');
        commentP.textContent = `${comment.creation_date}:${comment.username}:${comment.comment}`;
        commentsSection.appendChild(commentP);
      });
    });

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

  submitBtn.addEventListener('click', () => {
    const username = nameInput.value;
    const comment = commentTextarea.value;
    commentPost(product.idMeal, username, comment)
      .then(() => {
        // Add the new comment to the comments section
        const newCommentP = document.createElement('p');
        newCommentP.textContent = `${username}: ${comment}`;
        commentsSection.appendChild(newCommentP);

        // Clear the inputs
        nameInput.value = '';
        commentTextarea.value = '';
      });
  });

  commentModal.appendChild(addCommentSection);

  return commentModal;
}
calCom();
export default createCommentModal;
