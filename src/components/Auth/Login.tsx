
// import firebase from "firebase/compat/app";
// import React from "react";
import { useEffect } from "react";
import "./Login.css"

// interface LoginProps {
//   auth: firebase.auth.Auth;
// }

const Login = () => {
  useEffect(() => {

    const container = document.getElementById("container");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");

    if (registerBtn && loginBtn) {

      registerBtn.addEventListener("click", () => {
        container?.classList.add("active");
      });

      loginBtn.addEventListener("click", () => {
        container?.classList.remove("active");
      });
    }

    // Cleanup event listeners when the component unmounts
    return () => {
      if (registerBtn && loginBtn) {
        registerBtn.removeEventListener("click", () => {
          container?.classList.add("active");
        });
        loginBtn.removeEventListener("click", () => {
          container?.classList.remove("active");
        });
      }
    };
  }, []);
  // const signInGoogle = () => {
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   auth.signInWithPopup(provider);
  // };

  return (
    <div className="container" id="container">
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
            
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" name="name" />
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
            
          </div>
          <span>or use your email password</span>
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <a href="#">Forget Your Password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of the site features</p>
            <button className="hidden" id="login">Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all of the site features</p>
            <button className="hidden" id="register">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
