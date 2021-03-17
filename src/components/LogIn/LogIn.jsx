import React from "react";
import firebase from "firebase/app";
import firebaseConfig from "../fireBase.confog";
import "firebase/auth";
import "./Login.css";
import { useContext } from "react";
import { productContext } from "../../App";
import { useHistory, useLocation } from "react-router";

firebase.initializeApp(firebaseConfig);

const LogIn = () => {
  let location = useLocation();
  const history = useHistory();
  let { from } = location.state || { from: { pathname: "/" } };

  const GoogleProvider = new firebase.auth.GoogleAuthProvider();

  const [, , , , setLogInUser] = useContext(productContext);

  const hendelSignInWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(GoogleProvider)
      .then((result) => {
        const user = result.user;
        setLogInUser(user);
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="log-in-container">
      <button onClick={hendelSignInWithGoogle}>Sign In With Google</button>
      <button>Sign In With Facebook</button>
    </div>
  );
};

export default LogIn;
