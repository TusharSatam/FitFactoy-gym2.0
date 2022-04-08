// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDfFg0P1w-_s5U1a3wijb0r5PKNj0Q5fjQ",
  authDomain: "gymwebsite-2.firebaseapp.com",
  projectId: "gymwebsite-2",
  storageBucket: "gymwebsite-2.appspot.com",
  messagingSenderId: "961858325300",
  appId: "1:961858325300:web:0cfee3dfb23e1e116d3361",
  measurementId: "G-SRTDN06Y0B"
};


  const app=!firebase.apps.length
?firebase.initializeApp(firebaseConfig)
:firebase.app();

const db=app.firestore();
const auth=app.auth();
const provider=new firebase.auth.GoogleAuthProvider();
export {db,auth,provider}
