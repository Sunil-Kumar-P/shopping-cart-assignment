const { ShoppingCart } = require('./shoppingCart');

async function main() {
  const cart = new ShoppingCart();

  // Adding products to the cart
  await cart.addProduct('cornflakes', 1);
  await cart.addProduct('cornflakes', 1);
  await cart.addProduct('weetabix', 1);

  // Retrieve and display cart state
  console.log(cart.getCartState());
}

main().catch(error => console.error(error));
