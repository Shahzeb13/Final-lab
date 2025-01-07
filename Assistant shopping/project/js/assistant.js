class Assistant {
    static validatePrice(price) {
      return price > 0;
    }
  
    static clearInputs() {
      document.getElementById("product-name").value = "";
      document.getElementById("product-price").value = "";
    }
  }
  