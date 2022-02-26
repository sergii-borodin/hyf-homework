let amountGifs;
let keyword;
const searchBtnRef = document.getElementById("searchBtn");
const gifsListRef = document.getElementById("gifsList");
let displayGifs = document.getElementById("displayGifs");

searchBtnRef.addEventListener("click", onSearchBtnClick);

function onSearchBtnClick(e) {
  let displayGifs = document.getElementById("displayGifs");
  (async function searchGifs() {
    displayGifs.innerHTML = " ";
    let searchWord = document.getElementById("keyword-input").value;
    let limitGifNumber = document.getElementById("amount_input").value;
    if (searchWord == 0 || searchWord == " ") {
      displayGifs.innerHTML = "Please enter a search word to search for gifs";
    } else if (limitGifNumber == 0) {
      displayGifs.innerHTML =
        "Please enter a number to limit the amount of gifs";
    } else {
      fetch(
        `http://api.giphy.com/v1/gifs/search?api_key=MtigkUQbCALlLc7dmbRw6kJTMJNbDn2r&q=${searchWord}&limit=${limitGifNumber}`
      )
        .then((response) => response.json())
        .then((renderGifs) => {
          for (let i = 0; i < limitGifNumber; i++) {
            displayGifs.innerHTML += `<img src="${renderGifs.data[i].images.fixed_width.url}"><br>`;
          }
        });
    }
  })();
}

function renderGifs(content) {
  gifsListRef.textContent = "";
  content.data.forEach((gif) => {
    const liItemGif = document.createElement("li");
    const gifImg = document.createElement("img");
    gifImg.src = gif.images.fixed_width.url;
    liItemGif.appendChild(gifImg);
    gifsListRef.appendChild(liItemGif);
  });

  console.log(content);
}
