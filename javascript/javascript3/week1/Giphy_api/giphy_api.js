let amountGifs;
let keyword;
const searchBtnRef = document.getElementById("searchBtn");
const keywordInputRef = document.getElementById("keyword-input");
const amountInputRef = document.getElementById("amount_input");
const gifsListRef = document.getElementById("gifsList");

keywordInputRef.addEventListener("change", onKeywordInputChange);
searchBtnRef.addEventListener("click", onSearchBtnClick);
amountInputRef.addEventListener("change", onAmountInputChange);

function onKeywordInputChange(e) {
  keyword = e.currentTarget.value;
  console.log(keyword);
}

function onAmountInputChange(e) {
  amountGifs = e.currentTarget.value;
  console.log(amountGifs);
}

function onSearchBtnClick(e) {
  if (keywordInputRef.value === "") {
    alert("enter a word");
    console.log("keyword", keyword);
  } else {
    (async function () {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=MtigkUQbCALlLc7dmbRw6kJTMJNbDn2r&q=${keyword}&limit=${amountGifs}&offset=0&rating=g&lang=en`
      );
      if (response.ok) {
        const content = await response.json();
        renderGifs(content);
        try {
          console.log("try_statment");
        } catch (error) {
          document.getElementById(
            "settings_menu"
          ).textContent = `Something went wrong,try again`;
          console.log(error);
        }
      }
    })();
  }
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
