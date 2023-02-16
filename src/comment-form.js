const commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rxNE30diDELKZTnvdxYb/comments?item_id=';

const getLastTwoComments = async (id) => {
  const url = commentUrl + id;
  const response = await fetch(url, {
    method: 'Get',
  });
  const comments = await response.json();
  const lastTwoComments = comments;
  return lastTwoComments;
};

const commentPost = async (id, username, comment) => {
  if (!comment) {
    throw new Error('Komentar ne može biti prazan');
  }

  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rxNE30diDELKZTnvdxYb/comments/',
    {
      method: 'Post',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: Number(id),
        username,
        comment,
      }),
    },
  );
  return response;
};

export { commentPost, getLastTwoComments };