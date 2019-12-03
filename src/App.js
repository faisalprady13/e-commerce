import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route path="/hats" component={Homepage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
