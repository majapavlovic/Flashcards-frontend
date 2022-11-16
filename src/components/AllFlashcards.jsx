import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Flashcard from "./Flashcard";

function AllFlashcards({ currentUser }) {
  let userId = window.sessionStorage.getItem("user_id");
  const [flashcards, setFlashcards] = useState();
  var config = {
    method: "get",
    url: "api/flashcards/users/" + userId + "/questions",
    headers: {
      Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
    },
  };
  useEffect(() => {
    if (flashcards == null) {
      axios(config)
        .then((res) => {
          setFlashcards(res.data);
          // console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  });
  return (
    <div className="all-flashcards">
      {flashcards == null ? (
        <></>
      ) : (
        flashcards.map((fcards) => (
          <Flashcard
            flashcard={fcards}
            answers={fcards.answers}
            key={fcards.question.id}
          />
        ))
      )}
    </div>
  );
}

export default AllFlashcards;
