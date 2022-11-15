import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login({ addToken }) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  function handleInput(e) {
    let loginUser = userData;
    loginUser[e.target.name] = e.target.value;

    setUserData(loginUser);
  }
  function handleLogin(e) {
    e.preventDefault();
    axios
      .post("api/flashcards/login", userData)
      .then((res) => {
        console.log(res.data);
        if (res.data.success === true) {
          window.sessionStorage["auth_token"] = res.data.access_token;
          addToken(res.data.access_token);
          navigate("/");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleLogin}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onInput={handleInput}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onInput={handleInput}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <Link to="/register" className="btn btn-secondary">
              Register
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
