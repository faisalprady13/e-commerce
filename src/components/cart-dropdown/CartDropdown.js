import React from "react";

import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/CustomButton";
import { connect } from "react-redux";

const CartDropdown = cartItems => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems: cartItems
});

export default connect(mapStateToProps)(CartDropdown);
