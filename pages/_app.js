import "../styles/globals.css";
import Login from "./login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { useEffect } from "react";
import firebase from "firebase/compat/app";
import Navbar from "../Components/Navbar";
import Footer from './../Components/Footer';
function MyApp({ Component, pageProps }) {
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set(
        {
          email: user.email,
          lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
          photoURL: user.photoURL,
        },
        { merge: true }
      );
    }
  }, [user]);

  if (!user) return <Login />
  return <>
    <Navbar />
    <Component {...pageProps} />
    <Footer/>
  </>;
}

export default MyApp;
