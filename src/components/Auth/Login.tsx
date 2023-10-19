import firebase from "firebase/compat/app";
import React from "react";

interface LoginProps {
  auth: firebase.auth.Auth;
}

const Login: React.FC<LoginProps> = ({ auth }) => {
  const signInGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return <button onClick={signInGoogle}>Sign In with Google</button>;
};

export default Login;
