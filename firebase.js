import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


var firebaseConfig = {
    apiKey: "AIzaSyDn8WXUkGtjzf7tvDWGISA7i9A1ykxEC7M",
    authDomain: "gma-scheduler.firebaseapp.com",
    databaseURL: "https://gma-scheduler.firebaseio.com",
    projectId: "gma-scheduler",
    storageBucket: "gma-scheduler.appspot.com",
    messagingSenderId: "471585690205",
    appId: "1:471585690205:web:ef25dd40701bba0cdf73b4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;