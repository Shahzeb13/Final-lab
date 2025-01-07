class ProductController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  addProduct(name, price) {
    this.model.addProduct(name, price);
    this.updateView();
  }

  getLowestPriceProducts() {
    return this.model.getLowestPriceProducts();
  }

  updateView() {
    const allProducts = this.model.products;
    this.view.renderProductList(allProducts);
  }
}
