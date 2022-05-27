const api_key = 'fPGB2SHqZe8j47vQ7ES6cRBKKxCcE18m';
const search = document.getElementById('search-box');
const form = document.getElementById('form-box');
const removeBtn = document.getElementById('remove');
const gifBox = document.getElementById('gif-box');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const q = search.value;
  getGif(q);
});
removeBtn.addEventListener('click', (e) => {
  gifBox.replaceChildren();
});

async function getGif(q) {
  try {
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
      params: { q, api_key },
    });
    const rand = Math.floor(Math.random() * 50);
    const gif = document.createElement('img');
    gif.className = 'gifs';
    gif.src = res.data.data[Math.floor(Math.random() * 50)].images.original.url;
    gifBox.append(gif);
  } catch (error) {
    console.log(error);
  }
}
