/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const voiceBtn = document.querySelector('#voice-icon');
const searchBtn = document.querySelector('#search-icon');
const search = document.querySelector('#search');
const menuLines = document.querySelector('.menu_lines');
const main = document.querySelector('main');
const body = document.querySelector('body');
const autocompleteContent = document.querySelector('#autocomplete-content');
const bowlRecorde = document.querySelector('.svg_recorde');
const wordsListen = document.querySelector('.words_listen span');
const closePopVoice = document.querySelector('.close_pop_voice');
const popListenVoice = document.querySelector('.pop_listen_voice');
const searchBowl = document.querySelector('.search_bowl');
const waitLoadData = document.querySelector('.wait_load_data');

const removeChild = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const createLiElement = (classList, text, parent) => {
  const li = document.createElement('li');
  li.classList.add(classList);
  li.textContent = text;

  li.addEventListener('click', () => {
    removeChild(main);
    autocompleteContent.classList.remove('show');
    getImages(li.textContent);
  });

  parent.appendChild(li);
};

const showImages = (image, parent) => {
  const div = document.createElement('div');
  div.classList.add('image_content');
  const img = document.createElement('img');
  img.classList.add('card_imgs_');
  img.src = image.urls.regular;
  div.appendChild(img);
  parent.appendChild(div);
};
