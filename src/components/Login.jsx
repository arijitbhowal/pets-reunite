import React, { useState, useEffect, useContext } from "react";
import "./Login.css";
import { auth , db } from "../FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../FirebaseConfig";



function LoginRegister() {
  const history = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const { dispatch } = useContext(AuthContext);
  const  currentUser  = useAuth();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      // Create user profile in Firestore
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        fullName,
        email,
        createdAt: new Date(),

      });

      dispatch({ type: "LOGIN", payload: user });
      history("/home");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      setErrorMessage(errorMessage);
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        history("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  useEffect(() => {
    const wrapper = document.querySelector(".wrapper");
    const signupHeader = document.querySelector(".signup header");
    const loginHeader = document.querySelector(".login header");

    loginHeader.addEventListener("click", () => {
      wrapper.classList.add("active");
    });

    signupHeader.addEventListener("click", () => {
      wrapper.classList.remove("active");
    });
  }, []);

  return (
    <div className="wrapper">
      <div className="form signup">
        <header>Signup</header>
        <form onSubmit={handleSignUp}>
          <input
            type="name"
            name="fullName"
            placeholder="Full name"
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="checkbox">
            <input type="checkbox" id="signupCheck" required />
            <label htmlFor="signupCheck">I accept all terms & conditions</label>
          </div>
          <input type="submit" value="SignUp" />
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </form>
      </div>

      <div className="form login">
        <header>Login</header>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Link to="/resetpassword">Forgot password?</Link>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <input type="submit" value="Login" />
        </form>
      </div>
      </div>
  );
}

export default LoginRegister;
