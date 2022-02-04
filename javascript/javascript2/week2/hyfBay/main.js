const inputRef = document.getElementById("input-field");

console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

const productList = document.querySelector("ul");

function renderProducts(products) {
  // your code here

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productItem = document.createElement("li");

    const productName = document.createElement("h2");
    productName.innerHTML = product.name;
    productItem.appendChild(productName);

    const productPrice = document.createElement("p");
    productPrice.innerHTML = product.price;
    productItem.appendChild(productPrice);

    const productRating = document.createElement("p");
    productRating.innerHTML = product.rating;
    productItem.appendChild(productRating);

    productList.appendChild(productItem);
  }
}

renderProducts(products); // This should create the ul and the li's with the individual products details

function inputChange(event) {
  const inputValue = event.target.value.toLowerCase();
  const filtredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(inputValue.toLowerCase());
  });
  console.log("filtredProducts", filtredProducts);
  productList.innerHTML = " ";
  renderProducts(filtredProducts);
}

inputRef.addEventListener("input", inputChange);
