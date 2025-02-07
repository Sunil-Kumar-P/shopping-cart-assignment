// src/cart.js
const { fetchProductPrice } = require('./api');

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  /**
   * Adds a product to the cart by fetching its price.
   * @param {string} name - The product name.
   * @param {number} quantity - The quantity to add.
   */
  async addProduct(name, quantity) {
    const price = await fetchProductPrice(name);
    const existingItem = this.items.find(item => item.name === name);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ name, quantity, price });
    }
  }

  /**
   * Returns the cart state including subtotal, tax (12.5%), and total.
   * @returns {Object} The current state of the cart.
   */
  getCartState() {
    let subtotal = 0;
    for (const item of this.items) {
      subtotal += item.price * item.quantity;
    }
    const subtotalRounded = parseFloat(subtotal.toFixed(2));
    const tax = parseFloat((subtotalRounded * 0.125).toFixed(2));
    const total = parseFloat((subtotalRounded + tax).toFixed(2));

    return {
      items: this.items,
      subtotal: subtotalRounded,
      tax,
      total
    };
  }
}

module.exports = { ShoppingCart };
