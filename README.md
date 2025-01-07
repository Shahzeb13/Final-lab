# Product Price Finder

## Description
The **Product Price Finder** is a simple web application that allows users to input products with their respective prices. After entering a list of products, the user can click on the **Find Lowest Price** button to display only the products with the lowest price.

### Features:
- **Add Products:** Enter the product name and price through the provided input fields and add it to the list.
- **Find Lowest Price:** Click the **Find Lowest Price** button to display only the products with the lowest price.
- **Dynamic UI:** The list of products updates automatically as you add new products, and clicking the **Find Lowest Price** button filters and shows only the lowest-priced products.

### Technologies Used:
- **HTML:** For the structure and layout of the page.
- **CSS:** For styling the UI and making the app visually appealing.
- **JavaScript (Vanilla):** For handling the logic of adding products, filtering the lowest price, and updating the UI dynamically.
- **Model-View-Controller (MVC) Design Pattern:** This architecture separates the concerns of the application into three distinct components:
  - **Model:** Handles the data and logic related to the products.
  - **View:** Manages the UI and renders the list of products.
  - **Controller:** Bridges the Model and View to update the UI when the data changes.

---

## How It Works:

1. **Model:** The `ProductModel` class is responsible for maintaining the list of products. It allows you to add new products and get the list of products with the lowest price.
2. **View:** The `ProductView` class renders the product list on the webpage and dynamically updates the UI whenever the data changes.
3. **Controller:** The `ProductController` class is the intermediary between the Model and View. It handles adding products, fetching the lowest-priced products, and updating the UI.
4. **Assistant:** The `Assistant` class provides utility functions for validating the price input and clearing the form after a product is added.

### Key Functionalities:
- **Add Product:** When you enter a product name and price and click **Add Product**, the product is stored in the `ProductModel`, and the list of all products is updated in the UI.
- **Find Lowest Price:** When you click the **Find Lowest Price** button, it filters the products to show only those with the lowest price.

---

## How to Run the Program:

### Prerequisites:
- A modern web browser (e.g., Google Chrome, Firefox, etc.)
- Text editor or IDE (e.g., Visual Studio Code, Sublime Text, etc.) to modify the code if needed.

### Steps to Run:

1. **Download or Clone the Repository:**
   - You can either download the ZIP file of the project or clone the repository using Git.
   - To clone via Git, run the following command in your terminal:
     ```bash
     git clone https://github.com/your-username/product-price-finder.git
     ```

2. **Navigate to the Project Folder:**
   - Once the repository is downloaded or cloned, open the project folder in your text editor or IDE.

3. **Open the `index.html` File:**
   - Open the `index.html` file in a browser (double-click the file or use your text editor’s built-in browser preview feature).
   
4. **Use the Application:**
   - **Add a product:** Enter a product name and price in the respective fields and click **Add Product**.
   - **Find Lowest Price:** After adding a few products, click the **Find Lowest Price** button to display only the products with the lowest price.

---

## Example Usage:

1. **Adding Products:**
   - Product Name: "Laptop", Price: $1000
   - Product Name: "Smartphone", Price: $700
   - Product Name: "Headphones", Price: $50

2. **Find the Lowest Price:**
   - After entering these products, click **Find Lowest Price**. It will display:
     ```
     Headphones - $50
     ```

---

## Contributing

If you'd like to contribute to this project, feel free to fork the repository, make changes, and create a pull request. Contributions are always welcome!

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
