import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  //bisa pake js framework classname biar rapih, cek web iwkz
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} 
        ${inverted ? "inverted" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
