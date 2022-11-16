import "./App.css";
import AllFlashcards from "./components/AllFlashcards";
import Navigation from "./components/Navigation";
import AddQuestion from "./components/AddQuestion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/";

function App() {
  const [token, setToken] = useState(
    window.sessionStorage["auth_token"]
      ? ""
      : window.sessionStorage["auth_token"]
  );
  function addToken(authToken) {
    setToken(authToken);
  }
  const [currentUser, setCurrentUser] = useState();
  function setLoggedUser(userData) {
    setCurrentUser(userData);
    // console.log(currentUser);
  }
  useEffect(() => console.log(currentUser));
  function addQuestion(newFcard) {
    // console.log(newFcard);
    // setfcardsNum(fcardsNum + 1);
    // setFlashcards((flashcards) => [newFcard, ...flashcards]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login addToken={addToken} setUser={setLoggedUser} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Navigation token={token} />}>
          <Route
            path="flashcards"
            element={
              <AllFlashcards
                currentUser={currentUser != null ? currentUser.id : ""}
              />
            }
          />
          <Route
            path="/add-question"
            element={<AddQuestion fcardsNum={1} onAdd={addQuestion} />}
          />
        </Route>
        {/* <Route path="/" element={<Navigation token={token} />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
