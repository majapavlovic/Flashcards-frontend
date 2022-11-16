import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { MdAddBox } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import axios from "axios";

function Navigation({ token }) {
  const navigate = useNavigate();

  function handleLogout(e) {
    e.preventDefault();
    console.log(window.sessionStorage.getItem("auth_token"));
    var config = {
      method: "post",
      url: "/api/flashcards/logout",
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      },
    };
    axios(config)
      .then((res) => {
        console.log(JSON.stringify(res.data));
        window.sessionStorage.setItem("auth_token", null);
        navigate("/login");
      })
      .catch((e) => {
        console.log(JSON.stringify(e));
      });
  }

  return (
    <>
      <div className="p-2 bg-primary text-white navbar navbar-expand-xl">
        <div className="container-fluid">
          <h2>LearnIT Flashcards</h2>
          <div className="d-flex">
            {token == null ? (
              <Link to="/login" className="btn btn-outline-light">
                Login
              </Link>
            ) : (
              <button className="btn btn-outline-light" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarDark"
            aria-controls="navbarDark"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse show" id="navbarDark">
            <ul className="navbar-nav me-auto mb-2 mb-xl-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  <AiOutlineHome />
                  &nbsp;Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/flashcards" className="nav-link">
                  My flashcards
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/add-question" className="nav-link">
                  <MdAddBox />
                  &nbsp;Add a flashcard
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navigation;
