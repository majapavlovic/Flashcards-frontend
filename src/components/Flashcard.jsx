import React, { useState } from "react";
import { Link } from "react-router-dom";

function Flashcard({ flashcard, answers }) {
  const [isHidden, setHidden] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  function show() {
    setHidden(!isHidden);
  }
  console.log(flashcard);
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{flashcard.question.question}</h5>
          {flashcard.image == null ? (
            <></>
          ) : (
            <img
              width={300 + "px"}
              height={300 + "px"}
              src={"http://localhost:8000/storage" + flashcard.image.file_path}
            ></img>
          )}
          <br />
          <button
            className="btn btn-outline-dark btn-sm"
            onClick={() => {
              show();
            }}
          >
            {isHidden ? "Show" : "Hide"}
          </button>
          <div className="card-text" hidden={isHidden}>
            <ul>
              {answers.map((a) =>
                a.is_correct == 1 ? (
                  <li
                    type="button"
                    className="btn btn-light"
                    key={a.id}
                    style={{
                      backgroundColor: isActive ? "green" : "",
                    }}
                    onClick={handleClick}
                  >
                    {a.answer}
                  </li>
                ) : (
                  <li
                    type="button"
                    className="btn btn-light"
                    key={a.id}
                    style={{
                      backgroundColor: isActive ? "red" : "",
                    }}
                    onClick={handleClick}
                  >
                    {a.answer}
                  </li>
                )
              )}
            </ul>
            <Link
              to={`/delete-question/${flashcard.question.id}`}
              className="btn btn-outline-dark btn-sm"
            >
              Delete
            </Link>
          </div>

          <span style={{ float: "right" }}>{flashcard.question.category}</span>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
