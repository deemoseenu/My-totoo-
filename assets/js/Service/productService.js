class productService{
    constructor(){
        
            // Check if user data already exists in localStorage and initialize the user array accordingly
            this.products = JSON.parse(localStorage.getItem('products')) || [];
        }

     // Method to add a new product to the array and store it in localStorage

     addProduct(product) {
        ProductValidator.validate(product);
        const products = this.getAllProducts();
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
      }

      
      getAllProducts() {
        const productsJSON = localStorage.getItem('products');
        return productsJSON ? JSON.parse(productsJSON) : [];
      }

      // read all products
      readProducts() {
        return this.products;
    }

    // update a product   
    updateProduct(grain_name, variety_name, updatedProduct) {
      const productIndex = this.products.findIndex(product =>
          product.grain_name === grain_name && product.variety_name === variety_name
      );

      if (productIndex !== -1) {
          this.products[productIndex] = updatedProduct;
          return true; // Updated successfully
      }

      return false; // Product not found
     }
    
     
    
    
}
