const involvementUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CADKJQ2LFa6qH5nunRws/likes';

const addLike = async () => {
  await fetch(involvementUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ item_id: '1888334' }),
  });
};

const addComment = async (user) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CADKJQ2LFa6qH5nunRws/comments/', {
    method: 'POST',
    body: JSON.stringify({
      item_id: user.id,
      username: user.usrName,
      Comment: user.usrComment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export { addLike, addComment };