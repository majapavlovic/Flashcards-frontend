import "./App.css";
import AllFlashcards from "./components/AllFlashcards";
import Navigation from "./components/Navigation";
import AddQuestion from "./components/AddQuestion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import axios from "axios";
import DeleteQuestion from "./components/DeleteQuestion";
import UserManagement from "./components/UserManagement";

axios.defaults.baseURL = "http://127.0.0.1:8000/";

function App() {
  const [token, setToken] = useState(
    window.sessionStorage["auth_token"]
      ? ""
      : window.sessionStorage["auth_token"]
  );
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
          path="/"
          element={<Navigation token={token} setToken={setToken} />}
        >
          <Route
            path="/login"
            element={<Login addToken={setToken} setUser={setLoggedUser} />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="flashcards"
            element={
              <AllFlashcards
                currentUser={currentUser != null ? currentUser.id : ""}
              />
            }
          />
          <Route path="/add-question" element={<AddQuestion />} />
          <Route path="/delete-question/:id" element={<DeleteQuestion />} />
          <Route path="/users" element={<UserManagement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
