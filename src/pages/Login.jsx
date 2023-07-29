import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import logo from "../img/logo.png";

const Login = () => {
  const [error, seterror] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target[0].value; //Event.target Refers to Input of the form ,hence we can access input values by this
    const password = event.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      seterror(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <img src={logo} className="logo" alt="" />
        <span className="logo-title">ChatSync</span>
        <span className="title">Login</span>

        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />

          <input type="password" placeholder="password" />

          <button>Sign in</button>
          {error && (
            <span style={{ color: "white" }}>Something Went Wrong</span>
          )}
        </form>
        <p>
          you don't have an Account?{" "}
          <Link
            to={"/register"}
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
