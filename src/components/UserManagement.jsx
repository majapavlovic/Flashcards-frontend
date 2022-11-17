import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import User from "./User";

function ProfileManagement() {
  const [users, setUsers] = useState();
  var config = {
    method: "get",
    url: "api/flashcards/users/",
    headers: {
      Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
    },
  };
  useEffect(() => {
    if (users == null) {
      axios(config)
        .then((res) => {
          setUsers(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  });
  return (
    <>
      {window.sessionStorage.getItem("user_role") == "admin" ? (
        <div className>
          {users == null ? (
            <></>
          ) : (
            users.map((user) => <User user={user} key={user.id} />)
          )}
        </div>
      ) : (
        <p>Unathorized</p>
      )}
    </>
  );
}

export default ProfileManagement;
