class ProductValidator {
    static validate(product) {
      if (!product || typeof product !== 'object') {
        throw new Error('Product must be an object.');
      }
      if (typeof product.grain_name !== 'string' || product.grain_name.trim() === '') {
        throw new Error('Grain name must be a non-empty string.');
      }
      if (typeof product.variety_name !== 'string' || product.variety_name.trim() === '') {
        throw new Error('Variety name must be a non-empty string.');
      }
      if (typeof product.quantity !== 'number' || product.quantity <= 0) {
        throw new Error('Quantity must be a positive number.');
      }
      if (typeof product.price !== 'number' || product.price <= 0) {
        throw new Error('Price must be a positive number.');
      }
    }
  }