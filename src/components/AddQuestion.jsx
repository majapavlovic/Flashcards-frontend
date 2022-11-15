import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddQuestion({ fcardsNum, onAdd }) {
  const navigate = useNavigate();

  function addObject() {
    onAdd(questionData);
    navigate("/");
  }
  const [questionData, setQuestionData] = useState({
    id: fcardsNum + 1,
    question: "",
    answer: "",
    category: "",
  });

  function handleInput(e) {
    let newQuestion = questionData;
    newQuestion[e.target.name] = e.target.value;
    console.log();

    setQuestionData(newQuestion);
  }

  return (
    <div className="addquestion">
      <h3 className="form-title">Add a question</h3>
      <label>Question</label>
      <textarea
        className="form-control"
        name="question"
        id="question"
        rows="3"
        onInput={handleInput}
      ></textarea>
      <label>Answer</label>
      <textarea
        className="form-control"
        name="answer"
        id="answer"
        rows="3"
        onInput={handleInput}
      ></textarea>
      <label>Category</label>
      <select
        className="form-select"
        name="category"
        id="category"
        onInput={handleInput}
      >
        <option value="Choose">Choose category</option>
        <option value="Biology">Biology</option>
        <option value="Geography">Geography</option>
        <option value="History">History</option>
        <option value="Music">Music</option>
      </select>
      <label>ID</label>
      <input
        type="text"
        className="form-control"
        name="id"
        id="id"
        rows="3"
        defaultValue={fcardsNum + 1}
      />
      <br />
      <button
        className="form-control btn btn-success"
        onClick={() => addObject()}
      >
        Add
      </button>
    </div>
  );
}

export default AddQuestion;
