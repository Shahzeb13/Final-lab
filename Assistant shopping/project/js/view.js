class ProductView {
  constructor() {
    this.productListElement = document.getElementById("product-list");
  }

  renderProductList(products) {
    this.productListElement.innerHTML = "";
    if (products.length === 0) {
      this.productListElement.innerHTML = "<li>No products available.</li>";
      return;
    }

    products.forEach(product => {
      const li = document.createElement("li");
      li.textContent = `${product.name} - $${product.price}`;
      this.productListElement.appendChild(li);
    });
  }
}
