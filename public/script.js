/* eslint-disable no-undef */

let globalQuery = '';

// search input keyup listener
search.addEventListener('keyup', (event) => {
  const query = search.value; // value from user - search input
  globalQuery = query;
  if (!query) {
    autocompleteContent.classList.remove('show');
    return;
  }

  removeChild(menuLines);

  autocompleteContent.classList.add('show');

  fetch(`./search?q=${query}`, (data) => {
    data.forEach((text) => {
      createLiElement('line_option', text, menuLines);
    });
  });

  if (event.keyCode === 13) {
    autocompleteContent.classList.remove('show');
    getImages(globalQuery);
  }
});

// scroll event listener
window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (clientHeight + scrollTop >= scrollHeight - 50) {
    getImages(globalQuery);
  }
});

// search button listener
searchBtn.addEventListener('click', () => {
  autocompleteContent.classList.remove('show');
  removeChild(main);
  getImages(globalQuery);
});
