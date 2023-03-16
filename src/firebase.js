import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBnHKU3yeuTZFWw2ZGErwLq31FDWXH8WQo",
    authDomain: "e-library-83bb8.firebaseapp.com",
    projectId: "e-library-83bb8",
    storageBucket: "e-library-83bb8.appspot.com",
    messagingSenderId: "392038950708",
    appId: "1:392038950708:web:872fda7188ca2053a4e761",
    measurementId: "G-W3SXHD258G"
  });
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  var provider1 = new firebase.auth.GoogleAuthProvider();
   export {db,auth, provider1};