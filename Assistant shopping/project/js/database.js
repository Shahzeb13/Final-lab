// Database class: Handles product storage
export class Database {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      this.products.push(product);
    }
  
    getProducts() {
      return this.products;
    }
  }
  