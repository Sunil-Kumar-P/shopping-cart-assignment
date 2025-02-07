// tests/shoppingCart.test.js

const { ShoppingCart } = require('../src//shoppingCart');

// Mock the API module to avoid actual HTTP requests, using test_data JSON files.
jest.mock('../src/api', () => {
  const path = require('path');

  // Define the loadTestData helper inside the factory function.
  const loadTestData = (product) => {
    try {
      return require(path.join(__dirname, '..', 'test_data', `${product}.json`));
    } catch (error) {
      throw new Error(`Test data not found for product: ${product}`);
    }
  };

  return {
    fetchProductPrice: jest.fn((product) => {
      const data = loadTestData(product);
      return Promise.resolve(data.price);
    }),
  };
});

describe('ShoppingCart', () => {
  test('calculates cart totals correctly', async () => {
    const cart = new ShoppingCart();
    
    // Add products to the cart.
    await cart.addProduct('cornflakes', 1);
    await cart.addProduct('cornflakes', 1);
    await cart.addProduct('weetabix', 1);

    const state = cart.getCartState();

    // Check that the cart has two distinct items.
    expect(state.items.length).toBe(2);
    
    // Validate the quantities for each product.
    const cornflakesItem = state.items.find(item => item.name === 'cornflakes');
    const weetabixItem = state.items.find(item => item.name === 'weetabix');
    expect(cornflakesItem.quantity).toBe(2);
    expect(weetabixItem.quantity).toBe(1);

    // Validate the cart totals.
    expect(state.subtotal).toBeCloseTo(15.02, 2);
    expect(state.tax).toBeCloseTo(1.88, 2);
    expect(state.total).toBeCloseTo(16.90, 2);
  });
});
