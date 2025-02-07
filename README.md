
# Shopping Cart Assignment

## Overview

This project implements a simple shopping cart application using Node.js. The shopping cart allows users to add products with specified quantities, retrieves product prices from a Price API, and calculates the cart's subtotal, tax (12.5%), and total payable amount.

## Project Structure

```shopping-cart-assignment/
├── src/ 
│ ├── api.js # Contains logic to fetch product prices from the Price API. 
│ ├── shoppingCart.js # Implements the shopping cart functionality. 
│ └── index.js # Entry point to demonstrate the shopping cart usage. 
├── tests/ 
│ └── shoppingCart.test.js # Unit tests for the shopping cart functionality. 
├── package.json # Project configuration and dependencies. 
└── README.md # Project documentation.
```

## Setup Instructions

**Clone the Repository**

   ```bash
   git clone https://github.com/Sunil-Kumar-P/shopping-cart-assignment.git
   cd shopping-cart-assignment
   npm install
   ```

Install Dependencies

Ensure you have Node.js installed. Then, install the project dependencies:

```bash
npm install
```
Price API Setup

The application retrieves product prices from a Price API service. To run the service, execute:

```bash
npm run serve-products
```
You can verify that the API is working by visiting the following URL in your browser (replace cornflakes with any valid product name such as cheerios, frosties, shreddies, or weetabix):

```
http://localhost:3001/products/cornflakes
```

Running the Application
Once the Price API is running, you can run the shopping cart demonstration:

```
node src/index.js
```
This script will:
Add products to the cart (for example, 2 × cornflakes and 1 × weetabix).
Fetch product prices from the Price API.
Calculate and display the cart state including subtotal, tax, and total payable.
The output should be similar to:

```
{
  items: [
    { name: 'cornflakes', quantity: 2, price: 4.99 },
    { name: 'weetabix', quantity: 1, price: 7.29 }
  ],
  subtotal: 17.27,
  tax: 2.16,
  total: 19.43
}
```

**Testing Instructions**

The project uses Jest for unit testing. To run the tests, execute:

```
npm test
```

The test suite verifies:

Adding products to the cart.
Correct calculation of the subtotal, tax, and total.
Updating the quantity when the same product is added multiple times.
Test results should show 100% coverage for all the critical functionality.

Assumptions and Tradeoffs
Tax Rate:
The tax rate is fixed at 12.5% of the subtotal.

Price API Dependency:
The shopping cart fetches product prices dynamically from the Price API. It is assumed that the API is available and running when the cart operations are performed.

In-Memory Cart Storage:
The shopping cart’s state is maintained in memory with no persistent storage, as per the assignment guidelines.

Usage Details
Adding Products:
Use the addProduct(name, quantity) method to add products to the cart. If the same product is added multiple times, its quantity is updated accordingly.

Calculating Totals:
The getCartState() method calculates the subtotal, tax, and total payable amount. All monetary values are rounded to two decimal places.

Price API Integration:
The fetchProductPrice function in src/api.js fetches product prices from the Price API. Ensure the API is running (via npm run serve-products) before using the shopping cart.

Final Notes
Code Quality:
The project uses descriptive variable and function names with a clear separation of concerns. Unit tests provide 100% coverage for the core functionality.


For any further questions or clarifications, please refer to the source code comments or you can contact me

Thank you for reviewing my submission!
