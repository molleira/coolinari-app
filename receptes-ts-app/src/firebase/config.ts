import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYjdoCMXkFZEv113TSFIGSDfLkSgmMU40",
  authDomain: "coolinari-app.firebaseapp.com",
  projectId: "coolinari-app",
  storageBucket: "coolinari-app.appspot.com",
  messagingSenderId: "205377291798",
  appId: "1:205377291798:web:b7da42d25b155a08a89737",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
