class ProductModel {
  constructor() {
    this.products = [];
  }

  addProduct(name, price) {
    this.products.push({ name, price });
  }

  getLowestPriceProducts() {
    if (this.products.length === 0) return [];
    const lowestPrice = Math.min(...this.products.map(product => product.price));
    return this.products.filter(product => product.price === lowestPrice);
  }
}
