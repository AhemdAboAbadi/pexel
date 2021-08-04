const voiceBtn = document.querySelector('#voice-icon');
const searchBtn = document.querySelector('#search-icon');
const search = document.querySelector('#search');
const autocompleteContent = document.querySelector('#autocomplete-content');
const menuLines = document.querySelector('.menu_lines');
const main = document.querySelector('main');
let globalQuery = '';
let page = 1;

function getImages(query) {
  const url = `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=7hTcanzZHuFtZWDwYJxn_q1NcwLueIkKwBMlqLrnQVM`;
  fetch(url, (data) => {
    data.results.forEach((image) => {
      // eslint-disable-next-line no-undef
      showImages(image, main);
    });
  });
  // eslint-disable-next-line no-plusplus
  page++;
}

search.addEventListener('keyup', () => {
  const query = search.value; // value from user - search input
  globalQuery = query;
  if (!query) {
    autocompleteContent.classList.remove('show');
    return;
  }

  // eslint-disable-next-line no-undef
  removeChild(menuLines);

  autocompleteContent.classList.add('show');

  fetch(`./search?q=${query}`, (data) => {
    data.forEach((text) => {
      // eslint-disable-next-line no-undef
      createLiElement('line_option', text, menuLines);
    });
  });
});

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (clientHeight + scrollTop >= scrollHeight - 50) {
    getImages(globalQuery);
  }
});

searchBtn.addEventListener('click', () => {
  getImages(globalQuery);
});
