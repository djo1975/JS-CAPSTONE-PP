const getData = async () => {
  const response = await fetch('https://randomuser.me/api/?seed=1&page=1&results=20')
  const data = await response.json();
  return data.results;
};

export default getData;