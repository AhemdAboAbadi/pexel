/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
/* eslint-disable no-useless-return */
/* eslint-disable no-unused-vars */
const unSplashAccessKey = 'V0G0X78-1-W7P0OS0w1Y7bift63SE2YXdP1bYH7jT30';
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
  const url = `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=${unSplashAccessKey}`;
  fetch(url, (data) => {
    data.results.forEach((image) => {
      showImages(image, main);
    });
  });
  page++;
};
