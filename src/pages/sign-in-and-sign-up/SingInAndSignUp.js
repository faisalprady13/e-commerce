import React from "react";
import "./sign-in-and-sign-up.styles.scss";
import SingIn from "../../components/sign-in/SingIn";
import SignUp from "../../components/sign-up/SignUp";

const SingInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SingIn />
      <SignUp />
    </div>
  );
};

export default SingInAndSignUp;
