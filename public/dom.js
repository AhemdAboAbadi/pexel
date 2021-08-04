/* eslint-disable no-unused-vars */
const removeChild = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const createLiElement = (classList, text, parent) => {
  const li = document.createElement('li');
  li.classList.add(classList);
  li.textContent = text;
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
