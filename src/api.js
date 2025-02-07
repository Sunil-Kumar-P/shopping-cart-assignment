const axios = require('axios');

const BASE_URL = 'http://localhost:3001/products';

async function fetchProductPrice(product) {
  try {
    const response = await axios.get(`${BASE_URL}/${product}`);
    return response.data.price;
  } catch (error) {
    throw new Error(`Error fetching price for ${product}: ${error.message}`);
  }
}

module.exports = { fetchProductPrice };
