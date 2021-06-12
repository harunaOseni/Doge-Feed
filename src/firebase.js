import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCJDp29eQbC5t8oPHdIPPTH0PLUW56lCMI",
  authDomain: "dogefeed-394ac.firebaseapp.com",
  projectId: "dogefeed-394ac",
  storageBucket: "dogefeed-394ac.appspot.com",
  messagingSenderId: "870263500862",
  appId: "1:870263500862:web:8e5c04df7ded48b00de16f",
  measurementId: "G-7XGFGD5D7Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
