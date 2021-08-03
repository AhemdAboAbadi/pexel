let myLines = [
  "grove",
  "compass",
  "ield",
  "cat",
  "jar",
  "lower",
  "orest",
  "sweatshirt",
  "spring",
  "a111111111",
  "a22222",
  "awqqqq",
  "awt",
  "asgagw",
  "arm",
  "bottle",
  "snow",
  "blossom",
  "reed",
  "petal",
  "photographer",
  "plant",
  "cross",
  "grassland",
  "cherryblossom",
  "crocus",
  "clothing",
  "tree",
  "lawn",
  "geranium",
  "vegetation",
  "trademark",
  "soil",
  "ice",
  "building",
  "plateau",
  "planter",
  "ashion",
];

const btnVoice = document.querySelector(".svg_voice svg");
const btnSearch = document.querySelector(".svg_search svg");
const search = document.querySelector(".search");
const body = document.querySelector("body");
const bowlRecorde = document.querySelector(".svg_recorde");
const contentAutoComplete = document.querySelector(".content_auto_complete");
const menuLines = document.querySelector(".menu_lines");
const wordsListen = document.querySelector(".words_listen span");
const closePopVoice = document.querySelector(".close_pop_voice");
const popListenVoice = document.querySelector(".pop_listen_voice");
const main = document.querySelector("main");
let query = "love";

search.addEventListener("keyup", () => {
  let query = search.value; // value from user - search input
  if (!query) {
    contentAutoComplete.classList.remove("show");
    return;
  }
  // for
  removeChild(menuLines);
  contentAutoComplete.classList.add("show");
  let lineAutoNow = [];
  //for loop word start like query
  for (let i = 0; i < myLines.length; i++) {
    if (myLines[i].startsWith(query) && lineAutoNow.length <= 7) {
      lineAutoNow.push(myLines[i]);
    }
  }

  //for loop new array that send new data to html
  for (let j = 0; j < lineAutoNow.length; j++) {
    let li = document.createElement("li");
    li.classList.add("line_option");
    li.textContent = lineAutoNow[j];
    menuLines.appendChild(li);
  }

  if (event.keyCode == 13) {
    query = query;
    contentAutoComplete.classList.remove("show");
    removeChild(main);
    sendImage(query);
  }

  const lineOption = document.querySelectorAll(".line_option");
  lineOption.forEach((line) => {
    line.addEventListener("click", () => {
      query = line.textContent;
      removeChild(main);
      contentAutoComplete.classList.remove("show");
      sendImage(query);
    });
  });
});

// for when user to search by voice
btnVoice.addEventListener("click", () => {
  popListenVoice.classList.add("show");
  wordsListen.textContent = "";
  window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.interimResults = true;
  recognition.lang = "en-US";
  let valueLisign;
  recognition.addEventListener("result", (e) => {
    valueLisign = e.results[0][0].transcript;
    wordsListen.textContent = valueLisign;
    bowlRecorde.style.animationPlayState = "running";
  });
  recognition.start();
  recognition.addEventListener("end", () => {
    bowlRecorde.style.animationPlayState = "paused";
    query = valueLisign;
    removeChild(main);
    sendImage(query);
    popListenVoice.classList.remove("show");
  });
});

closePopVoice.addEventListener("click", () => {
  popListenVoice.classList.remove("show");
});

btnSearch.addEventListener("click", () => {
  query = search.value;
  contentAutoComplete.classList.remove("show");
  removeChild(main);

  sendImage(query);
});

const getRequest = (url, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      cb(JSON.parse(xhr.responseText));
    } else if (xhr.readyState === 4 && xhr.status >= 400) {
      sendImgError();
    }
  };
  xhr.open("GET", url);
  xhr.send();
};

let page = 1;
sendImage(query);
function sendImage(query) {
  let url = `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=7hTcanzZHuFtZWDwYJxn_q1NcwLueIkKwBMlqLrnQVM`;
  page++;
  getRequest(url, (data) => {
    if (!data) alert("no data");
    for (let i = 0; i < 10; i++) {
      let div = document.createElement("div");
      div.classList.add("image_content");
      let img = document.createElement("img");
      img.classList.add("card_imgs_");
      img.src = data.results[i].urls.regular;
      div.appendChild(img);
      main.appendChild(div);
    }
  });
}

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (clientHeight + scrollTop >= scrollHeight - 50) {
    sendImage(query);
  }
});

// for remove all content main
function removeChild(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function sendImgError() {
  let div2 = document.createElement("div");
  div2.classList.add("_error");
  let img2 = document.createElement("img");
  img2.classList.add("img_error");
  img2.style.width = "60%";
  img2.style.width = "70%";
  img2.src =
    "https://img-16.ccm2.net/_SqzzXVDSG50FWb_UBrCl3XwV78=/440x/1685e17045e747a899925aa16189c7c6/ccm-encyclopedia/99776312_s.jpg";
  div2.appendChild(img2);
  main.appendChild(div2);
}
