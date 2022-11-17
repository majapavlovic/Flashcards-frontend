import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DeleteQuestion() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [delStatus, setDelStatus] = useState(0);

  var headers = {
    Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
    "Content-Type": "multipart/form-data",
  };
  useEffect(() => {
    axios
      .delete(`api/flashcards/questions/${id}`, { headers })
      .then((res) => {
        setDelStatus(1);
        navigate(-1);
      })
      .catch((e) => {
        console.log(e);
        setDelStatus(-1);
      });
  });

  return (
    <>
      {delStatus == 1 ? (
        <div className="alert alert-success" role="alert">
          Successfully deleted flashcard!
        </div>
      ) : delStatus == -1 ? (
        <div className="alert alert-danger" role="alert">
          Error deleting flashcard!
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default DeleteQuestion;
