import React, { useState } from "react";

function Flashcard({ flashcard, answers }) {
  const [hidden, setHidden] = useState(true);
  return (
    <div className="card" onClick={() => setHidden(!hidden)}>
      <div className="card-body">
        <h5 className="card-title">{flashcard.question.question}</h5>
        {/* <p className="card-text" hidden={hidden}>
          {"flashcard.answer"}
        </p> */}
        <ul className="card-text" hidden={hidden}>
          {answers.map((a) => (
            <li key={a.id}>{a.answer} </li>
          ))}
        </ul>
        <span style={{ float: "right" }}>{flashcard.question.category}</span>
      </div>
    </div>
  );
}

export default Flashcard;
