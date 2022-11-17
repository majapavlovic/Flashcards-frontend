import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Categories from "./Categories";

function AddQuestion() {
  const navigate = useNavigate();
  function addObject() {
    var headers = {
      Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      "Content-Type": "multipart/form-data",
    };
    if (imageData.file != null) {
      axios
        .post("api/flashcards/images", imageData, { headers })
        .then((res) => {
          let newQuestion = questionData;
          newQuestion["image_id"] = res.data.image.id;

          setQuestionData(newQuestion);

          axios
            .post("api/flashcards/add_question", questionData, { headers })
            .then((res) => {
              console.log(res);
              console.log(questionData);
            })
            .catch((e) => {
              console.log(e);
            });
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      axios
        .post("api/flashcards/add_question", questionData, { headers })
        .then((res) => {
          console.log(res);
          console.log(questionData);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    navigate("/flashcards");
  }
  const [questionData, setQuestionData] = useState({
    question: "",
    category_id: "1",

    answer1: "",
    is_correct1: 0,

    answer2: "",
    is_correct2: 0,

    answer3: "",
    is_correct3: 0,

    user_id: window.sessionStorage.getItem("user_id"),
    image_id: "",
  });
  const [imageData, setImageData] = useState({
    name: "",
    description: "",
    file: null,
  });

  function handleQAInput(e) {
    let newQuestion = questionData;
    newQuestion[e.target.name] = e.target.value;

    setQuestionData(newQuestion);
    console.log(newQuestion);
  }
  function handleCheckbox(e) {
    let newQuestion = questionData;
    newQuestion[e.target.name] = questionData[e.target.name] == 0 ? 1 : 0;

    setQuestionData(newQuestion);
    // console.log(newQuestion);
  }
  function handleImageInput(e) {
    let newImage = imageData;
    newImage[e.target.name] = e.target.value;

    setImageData(newImage);
    // console.log(newImage);
  }
  function handleFile(e) {
    let newImage = imageData;
    newImage["name"] = e.target.files[0].name;

    newImage[e.target.name] = e.target.files[0];

    setImageData(newImage);
    // console.log(newImage);
  }

  return (
    <div className="addquestion">
      <h4 className="form-title">Add a flashcard</h4>
      <table>
        <tbody>
          <tr>
            <td>
              <label>Question</label>
              <textarea
                className="form-control"
                name="question"
                id="question"
                rows="3"
                onInput={handleQAInput}
              ></textarea>
            </td>
            <td>
              <label>
                Answer/s (You can input up to 4 answers for a multiple choice
                question)
              </label>
              <input
                type="text"
                className="form-control"
                name="answer1"
                id="answer1"
                onInput={handleQAInput}
                placeholder="Answer 1"
              />
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  name="is_correct1"
                  onChange={handleCheckbox}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckChecked"
                >
                  Correct
                </label>
              </div>
              <input
                type="text"
                className="form-control"
                name="answer2"
                id="answer2"
                onInput={handleQAInput}
                placeholder="Answer 2"
              />

              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  name="is_correct2"
                  onChange={handleCheckbox}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckChecked"
                >
                  Correct
                </label>
              </div>
              <input
                type="text"
                className="form-control"
                name="answer3"
                id="answer3"
                onInput={handleQAInput}
                placeholder="Answer 3"
              />
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  name="is_correct3"
                  onChange={handleCheckbox}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckChecked"
                >
                  Correct
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <label>Image</label>
              <input
                type="file"
                className="form-control"
                name="file"
                id="file"
                onInput={handleFile}
              />
              <input
                type="text"
                name="description"
                className="form-control"
                placeholder="Image description"
                onInput={handleImageInput}
              ></input>
              <Categories handleQAInput={handleQAInput} />
            </td>
            <td>
              <button
                className="form-control btn btn-success"
                onClick={() => addObject()}
              >
                Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AddQuestion;
