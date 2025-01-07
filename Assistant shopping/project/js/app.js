document.addEventListener("DOMContentLoaded", () => {
    const model = new ProductModel();
    const view = new ProductView();
    const controller = new ProductController(model, view);
  
    const form = document.getElementById("product-form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const productName = document.getElementById("product-name").value;
      const productPrice = parseFloat(document.getElementById("product-price").value);
  
      if (!Assistant.validatePrice(productPrice)) {
        alert("Price must be greater than 0.");
        return;
      }
  
      controller.addProduct(productName, productPrice);
      Assistant.clearInputs();
    });
  
    // Add event listener for "Find Lowest Price" button
    const findLowestPriceButton = document.getElementById("find-lowest-price");
    findLowestPriceButton.addEventListener("click", function() {
      const lowestPriceProducts = controller.getLowestPriceProducts();
      view.renderProductList(lowestPriceProducts); // Update view to show only the lowest price products
    });
  
    controller.updateView(); // Initial view update (in case there are already products)
  });
  