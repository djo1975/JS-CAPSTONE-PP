const id = 'rxNE30diDELKZTnvdxYb';
const invApiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${id}/likes`;
export const ides = ['52859', '52919', '52944', '53043', '52802', '52918'];
const getLikes = async () => {
  try {
    const allLikes = await fetch(invApiUrl, {
      method: 'Get',
    });
    return allLikes.json();
  } catch (error) {
    return error;
  }
};

const addLike = async (index) => {
  try {
    const userPost = await fetch(invApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: `${ides[index]}`,
      }),
    });
    return userPost;
  } catch (error) {
    return error;
  }
};

const addComment = async (itemId, name, comment) => {
  try {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tKVlvnEbmf4TMWB77SE7/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: itemId,
        username: name,
        comment,
      }),
    });
    return response.json();
  } catch (error) {
    return error;
  }
};
const getComment = async (id) => {
  const comments = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tKVlvnEbmf4TMWB77SE?7/commentsitem_id=${id}`,
    {
      method: 'Get',
    },
  );
  const commentsResponse = await comments.json();
  return commentsResponse;
};

export {
  getComment,
  addLike,
  getLikes,
  addComment,
};