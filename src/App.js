import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SingInAndSignUp from "./pages/sign-in-and-sign-up/SingInAndSignUp";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  unsibscribeFromAuth = null;

  componentDidMount() {
    this.unsibscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsibscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
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
