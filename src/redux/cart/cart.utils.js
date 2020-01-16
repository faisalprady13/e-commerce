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

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  //check if exist
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem) {
    if (existingCartItem.quantity === 1) {
      return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? //this below line is for 1 single item because of map
        { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
