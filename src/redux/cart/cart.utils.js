export const addItemToCart = (cartItems, cartItemToAdd) => {
  //check if exist
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  //existing item
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1
          }
        : cartItem
    );
  }

  //new item, default 1
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
