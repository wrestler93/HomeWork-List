import React, { useEffect, useState } from "react";
import "./Login.css";
import validator from "validator";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Status, setStatus] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (e) => {
    var email = e.target.value;
    if (validator.isEmail(email)) {
      setEmailError("Valid Email");
      setStatus(true);
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  const signIn = (e) => {
    e.preventDefault();
    if (email === "" || password === "" || Status !== true) {
      return;
    } else {
      window.localStorage.setItem("LoggedIn", true);
      window.localStorage.setItem("userID", email);

      setTimeout(() => {
        history.push("/home");
      }, 1500);
    }
  };

  return (
    <div className="login">
      <div className="login__logo">
        <h1 className="login__logoTitle">HomeWork Station</h1>
      </div>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            size="30"
            required
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e);
              console.log("email", e.target.value);
            }}
          />
          <span
            style={{
              fontSize: "15px",
              fontWeight: "small",
              color: emailError === "Valid Email" ? "green" : "red",
            }}
          >
            {emailError}
          </span>

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              console.log("pass", e.target.value);
            }}
          />

          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
