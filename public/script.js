let myLines = [
    "grove",
    "compass",
    "ield",
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
    "ashion",]

const btnVoice = document.querySelector('.svg_voice svg')
const btnSearch = document.querySelector('.svg_search svg')
const search = document.querySelector('.search')
const contentAutoComplete = document.querySelector('.content_auto_complete')
const menuLines = document.querySelector('.menu_lines')


search.addEventListener('keyup',()=>{
    let query = search.value  // value from user - search input
    if(!query){
        contentAutoComplete.classList.remove('show')
        return;
    }
    // for
    removeChild(menuLines)
    contentAutoComplete.classList.add('show')
    let lineAutoNow = []
    //for loop word start like query
    for (let i = 0; i < myLines.length; i++) {
        if (myLines[i].startsWith(query) && lineAutoNow.length <= 7) {
            lineAutoNow.push(myLines[i]);
        }
    }

    //for loop new array that send new data to html
    for (let j = 0; j < lineAutoNow.length; j++) {
        let li = document.createElement('li')
        li.classList.add('line_option')
        li.textContent = lineAutoNow[j]
        menuLines.appendChild(li)
    }
})


// for remove all content main
function removeChild(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

sendImage("anime")
function sendImage(query){

}