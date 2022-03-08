const body = document.querySelector("body");

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  convertToCurrency(currency) {
    const currencyRate = {
      dollars: 6.66,
      NOK: 0.75,
      EUR: 7.75,
    };
    const currentProductPrice = this.price;
    for (const key in currencyRate) {
      if (key === currency) {
        if (Object.hasOwnProperty.call(currencyRate, key)) {
          const currentCurrencyRate = currencyRate[key];
          const productPrice = currentProductPrice / currentCurrencyRate;
          return productPrice;
        }
      }
    }
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    const i = this.products.indexOf(product);
    this.products.splice(i, 1);
    return this.products;
  }

  searchProduct(productName) {
    const searchingProduct = this.products.find(
      ({ name }) => name === productName
    );
    return searchingProduct;
  }

  getTotal() {
    const acc = 0;
    const totalPrice = this.products.reduce(
      (previousValue, currentValue) => previousValue + currentValue.price,
      acc
    );
    return totalPrice;
  }

  renderProducts() {
    this.products.forEach((product) => {
      // const body = document.querySelector("body");
      const productList = document.createElement("ul");
      const productsName = document.createElement("li");
      productsName.textContent = product.name;
      const productPrice = document.createElement("p");
      productPrice.textContent = product.price;
      productList.appendChild(productsName);
      productsName.appendChild(productPrice);
      body.appendChild(productList);
    });
  }

  async getUser(user) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${user}`
    );
    return await response.json();
  }
}

function renderTotalPrice() {
  const total = shoppingCart.getTotal();
  const totalPrice = document.createElement("h5");
  totalPrice.textContent = total;
  return body.appendChild(totalPrice);
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
const laptop = new Product("laptop", 8000);
const mp3_player = new Product("mp3-player", 3000);
const tablet = new Product("tablet", 4000);
//add a product
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(laptop);
shoppingCart.addProduct(mp3_player);
//remove a product
//shoppingCart.removeProduct(flatscreen);

shoppingCart.searchProduct("mp3-player");

// shoppingCart.getTotal();
//shoppingCart.renderProducts();
shoppingCart.getUser(2).then((data) => {
  console.log(data);

  shoppingCart.renderProducts();
  renderTotalPrice();
});

// Assuming dkr as default currency
const plant = new Product("plant", 50);
console.log(plant.convertToCurrency("dollars")); // 7.5
console.log(tablet.convertToCurrency("NOK"));
