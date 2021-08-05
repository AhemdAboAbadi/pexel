/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
/* eslint-disable no-useless-return */
/* eslint-disable no-unused-vars */
const unSplashAccessKey = 'AHxoRbBnjn4iO8JeYu0XDRGvpxB4n8dOVB-eyUJw4Og';
let page = 1;

const fetch = (url, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      cb(JSON.parse(xhr.responseText));
    } else if (xhr.status === 404) {
      return;
    }
  };
  xhr.open('GET', url);
  xhr.send();
};

const getImages = (query) => {
  search.value = '';
  waitLoadData.classList.add('active');
  setTimeout(() => {
    const url = `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=${unSplashAccessKey}`;
    fetch(url, (data) => {
      if (data.results.length == 0) {
        body.classList.add('error');
      } else {
        data.results.forEach((image) => {
          showImages(image, main);
        });
      }
    });
    page++;
    waitLoadData.classList.remove('active');
  }, 1000);
};
