import * as firebase from 'firebase';

export const config = {
  apiKey: "AIzaSyCVHM8yfawgBhU9jRf9mGouKPyUgnuZiNw",
  authDomain: "fitness-72844.firebaseapp.com",
  databaseURL: "https://fitness-72844-default-rtdb.firebaseio.com",
  projectId: "fitness-72844",
  storageBucket: "fitness-72844.appspot.com",
  messagingSenderId: "1041359072563",
  appId: "1:1041359072563:web:30cabf2d6257edac512246",
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export { firebase, googleAuthProvider, database as default}
