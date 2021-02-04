import firebase from 'firebase'

const firebaseApp = firebase.initializeApp( {
  apiKey: "AIzaSyD5e3imEfiYw5Q-Q1eqRHppeDi4tef0cu4",
  authDomain: "fb-messenger-clone-ak.firebaseapp.com",
  projectId: "fb-messenger-clone-ak",
  storageBucket: "fb-messenger-clone-ak.appspot.com",
  messagingSenderId: "637332436199",
  appId: "1:637332436199:web:e3313ebb439b1b5af29e42",
  measurementId: "G-VWEZ70LWNX"
})

const db = firebaseApp.firestore();

export default db