import firebase from "firebase/compat/app";
import React, { useState } from "react";
import { useEffect } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
// import { get, ref, set } from "firebase/database";
import { database } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
// import { BsTwitter } from "react-icons/bs";

interface LoginProps {
  auth: firebase.auth.Auth;
}

const Login: React.FC<LoginProps> = ({ auth }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

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
  const signInGoogle = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await auth.signInWithPopup(provider);

      const user = credential.user;
      if (user) {
        const userId = user.uid;
        const userSnapshot = await getDoc(doc(database, "users", userId));

        // Check if user details don't exist in the database before adding
        if (!userSnapshot.exists()) {
          await setDoc(doc(database, "users", userId), {
            name: user.displayName,
            email: user.email,
            userId: user.uid,
            // Add other user details as needed
          });
        }
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  // const signInTwitter = () => {
  //   const provider = new firebase.auth.TwitterAuthProvider();
  //   auth.signInWithPopup(provider).then(() => {
  //     navigate("/dashboard");
  //   });
  // };

  const signInWithEmailAndPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error(
          "Error signing in with email and password:",
          error.message
        );
      });
  };

  // console.log(auth);

  const signUpWithEmailAndPassword = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const credential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      // console.log(credential);

      if (credential.user) {
        const userId = credential.user.uid;

        // Add user details to Firestore unconditionally
        await setDoc(doc(database, "users", userId), {
          userId: userId,
          name: name,
          email: credential.user.email,
        });
      }

      navigate("/dashboard");
    } catch (error) {
      console.error("Error signing up with email and password:", error);
    }
  };

  const handleForgotPassword = () => {
    if (email) {
      auth
        .sendPasswordResetEmail(email)
        .then(() => {
          alert(
            "Password reset email sent. Check your email inbox for further instructions."
          );
        })
        .catch((error) => {
          console.error("Error sending password reset email:", error.message);
          // Handle error or display to the user
        });
    } else {
      alert("Please enter your email address to reset the password.");
    }
  };

  return (
    <div className="loginContainer">
      <div className="container" id="container">
        <div className="form-container sign-up">
          <form>
            <h1>Create Account</h1>
            <div className="social-icons">
              <div className="google-icon" onClick={signInGoogle}>
                <FcGoogle style={{ fontSize: "30px" }} />
              </div>
            </div>
            <span>or use your email for registration</span>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button onClick={signUpWithEmailAndPassword}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1>Sign In</h1>
            <div className="social-icons">
              <div className="google-icon" onClick={signInGoogle}>
                <FcGoogle style={{ fontSize: "30px" }} />
              </div>
              {/* <div className="google-icon" onClick={signInTwitter}>
                <BsTwitter style={{ fontSize: "30px", color: "blue" }} />
              </div> */}
            </div>
            <span>or use your email password</span>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="#" onClick={handleForgotPassword}>
              Forget Your Password?
            </a>
            <button onClick={signInWithEmailAndPassword}>Sign In</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of the site features</p>
              <button className="hidden" id="login">
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>
                Register with your personal details to use all of the site
                features
              </p>
              <button className="hidden" id="register">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
