import React from 'react'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function AddQuestion({fcardsNum, onAdd}) {

  const questionRef = useRef(null);
  const answerRef = useRef(null);
  const categoryRef = useRef(null);

  const navigate = useNavigate();

  function makeObject() {
    const objToAdd = {
      id: fcardsNum+1,
      question: questionRef.current.value,
      answer: answerRef.current.value,
      category: categoryRef.current.value
    }
    onAdd(objToAdd);
    navigate('/');
  }

  return (
    <div className="addquestion">
      <label>Question</label>
      <textarea className="form-control" name="question" id="question" rows="3" ref={questionRef}></textarea>
      <label>Answer</label>
      <textarea className="form-control" name="answer" id="answer" rows="3" ref={answerRef}></textarea>
      <label>Category</label>                                    
      <select className="form-select" name="category_id" id = "category_id" ref={categoryRef}>
        <option value="Biology">Biology</option>
        <option value="Geography">Geography</option>
        <option value="History">History</option>
        <option value="Music">Music</option>
      </select>
      <label>ID</label>
      <input type="text" className="form-control" name="id" id="id" rows="3" value={fcardsNum+1}/><br/>
      <button className="form-control btn btn-success" onClick={()=>makeObject()}>Add</button>
    </div>
  )
}

export default AddQuestion
