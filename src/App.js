import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SingInAndSignUp from "./pages/sign-in-and-sign-up/SingInAndSignUp";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route path="/shop" component={Shop}></Route>
          <Route path="/signin" component={SingInAndSignUp}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
