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

//this method is to store the data into database, that was received from the authentication API
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  //query reference (could be collection reference or document reference )
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  //document snapshot, has exist property
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_acctount" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
