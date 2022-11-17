import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function User({ user }) {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState(user.role);
  var headers = {
    Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
  };
  function changeRights(userRole) {
    setUserRole(userRole);
    var userData = {
      role: `${userRole}`,
    };
    axios
      .put(`api/flashcards/users/${user.id}`, userData, { headers })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function deleteUser() {
    axios
      .delete(`api/flashcards/users/${user.id}`, { headers })
      .then((res) => {
        navigate("../users");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="card-text">
            <input
              className="form-control"
              type="text"
              name="id"
              value={user.id}
            />
            <input
              className="form-control"
              type="text"
              name="name"
              value={user.name}
            />
            <input
              className="form-control"
              type="text"
              name="email"
              value={user.email}
            />
            <input
              className="form-control"
              type="text"
              name="role"
              value={userRole}
            />
            {userRole == "admin" ? (
              <button
                type="button"
                className="btn btn-light"
                onClick={() => changeRights("user")}
              >
                Remove admin rights
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-light"
                onClick={() => changeRights("admin")}
              >
                Make admin
              </button>
            )}
            <button
              type="button"
              className="btn btn-light"
              onClick={deleteUser}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
