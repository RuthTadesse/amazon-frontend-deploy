import firebase from "firebase/compat/app";
// authentication
import { getAuth } from "firebase/auth";
//for database usage
import "firebase/compat/firestore";
//authentication module
import "firebase/compat/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC7YLePzqtiVPZe6uU0Cygu6Px5CTw2GbM",
  authDomain: "clone-c4d16.firebaseapp.com",
  projectId: "clone-c4d16",
  storageBucket: "clone-c4d16.appspot.com",
  messagingSenderId: "188695509217",
  appId: "1:188695509217:web:d5a301eee8417662545fa0"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
//to put all things needed for authentication and database from firebase to put it in variables and then exporting it for others to use
//auth check oifsomeone has logged in or not
export const auth = getAuth(app);
export const db = app.firestore();





