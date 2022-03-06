class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
    //console.log(product);
  }

  removeProduct(product) {
    const i = this.products.indexOf(product);
    this.products.splice(i, 1);
    //console.log(this.products);
    return this.products;
  }

  searchProduct(productName) {
    const searchingProduct = this.products.find(
      (product) => (product.name = productName)
    );
    return searchingProduct;
  }

  getTotal() {
    // Implement functionality here
    // const acc = 0;
    // this.products.reduce((product) => {
    //   product.productName = productName;
    // }, acc);
  }

  renderProducts() {
    // Implement functionality here
  }

  getUser(user) {
    // Implement functionality here
  }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
const laptop = new Product("laptop", 8000);
const mp3_player = new Product("mp3-player", 3000);
//add a product
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(laptop);
shoppingCart.addProduct(mp3_player);
//remove a product
//shoppingCart.removeProduct(flatscreen);

console.log(shoppingCart.searchProduct("laptop"));
