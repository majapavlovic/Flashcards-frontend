import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function DeleteQuestion() {
  const navigate = useNavigate();
  const { id } = useParams();

  var headers = {
    Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
    "Content-Type": "multipart/form-data",
  };

  axios
    .delete(`api/flashcards/questions/${id}`, { headers })
    .then((res) => {
      navigate("./flashcards");
    })
    .catch((e) => {
      console.log(e);
    });
}

export default DeleteQuestion;
