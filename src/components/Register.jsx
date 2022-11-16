import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });
  function handleInput(e) {
    let registerUser = userData;
    registerUser[e.target.name] = e.target.value;

    setUserData(registerUser);
  }
  function handleRegister(e) {
    e.preventDefault();
    axios
      .post("api/flashcards/register", userData)
      .then((res) => {
        if (res.data.success === true) {
          navigate("login");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleRegister}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Register</h3>
          <div className="form-group mt-3">
            <label>Name</label>
            <input
              name="name"
              className="form-control mt-1"
              placeholder="Enter full name"
              onInput={handleInput}
            />
          </div>
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
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
