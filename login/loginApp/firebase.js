// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBainSZgx7Sh-tbrTtHzrL8pBhnJrJZAgM",
  authDomain: "testing01-60efa.firebaseapp.com",
  projectId: "testing01-60efa",
  storageBucket: "testing01-60efa.appspot.com",
  messagingSenderId: "178718436132",
  appId: "1:178718436132:web:66a82d945fbc01aa16a1b1",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
