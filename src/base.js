import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDdZT3NQ7f0kDmpP0ffZn3IZkUg8dBnGJc",
  authDomain: "abc-catch-of-the-day.firebaseapp.com",
  databaseURL: "https://abc-catch-of-the-day.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;
