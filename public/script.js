/* eslint-disable no-undef */

let globalQuery = 'japan';
getImages(globalQuery);
getImages(globalQuery);
// search input keyup listener
search.addEventListener('keyup', (event) => {
  const query = search.value; // value from user - search input
  globalQuery = query;
  if (!query) {
    autocompleteContent.classList.remove('show');
    searchBowl.classList.add('erorr');
    setTimeout(() => {
      searchBowl.classList.remove('erorr');
    }, 400);
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
    removeChild(main);
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
  if (!search.value) {
    searchBowl.classList.add('erorr');
    setTimeout(() => {
      searchBowl.classList.remove('erorr');
    }, 400);
  } else {
    autocompleteContent.classList.remove('show');
    removeChild(main);
    globalQuery = search.value;
    getImages(globalQuery);
  }
});

voiceBtn.addEventListener('click', () => {
  popListenVoice.classList.add('show');
  wordsListen.textContent = '';
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.interimResults = true;
  recognition.lang = 'en-US';
  let valueLisign;
  recognition.addEventListener('result', (e) => {
    valueLisign = e.results[0][0].transcript;
    wordsListen.textContent = valueLisign;
    bowlRecorde.style.animationPlayState = 'running';
  });
  recognition.start();
  recognition.addEventListener('end', () => {
    bowlRecorde.style.animationPlayState = 'paused';
    globalQuery = valueLisign;
    removeChild(main);
    getImages(globalQuery);
    popListenVoice.classList.remove('show');
  });
});

closePopVoice.addEventListener('click', () => {
  popListenVoice.classList.remove('show');
});
