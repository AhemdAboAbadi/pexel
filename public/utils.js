/* eslint-disable no-plusplus */
/* eslint-disable no-useless-return */
/* eslint-disable no-unused-vars */
const unSplashAccessKey = 'V0G0X78-1-W7P0OS0w1Y7bift63SE2YXdP1bYH7jT30';
const ImgOfUnsplash = `https://api.unsplash.com/photos/?client_id=${unSplashAccessKey}`;

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

fetch(ImgOfUnsplash, (data) => {
  for (let index = 0; index < 10; index++) {
    const imgFromTheUnsplash = data[index].urls.small;
    console.log(imgFromTheUnsplash);
  }
});
