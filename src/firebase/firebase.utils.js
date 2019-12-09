import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA8lMwzUD1BH2y_pbJ6NtdnyRJfci9yvd0",
  authDomain: "ecommerce-db-f2c69.firebaseapp.com",
  databaseURL: "https://ecommerce-db-f2c69.firebaseio.com",
  projectId: "ecommerce-db-f2c69",
  storageBucket: "ecommerce-db-f2c69.appspot.com",
  messagingSenderId: "850459065662",
  appId: "1:850459065662:web:a3a39f24cf68007701006f",
  measurementId: "G-ZZ8TJV79EL"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_acctount" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
