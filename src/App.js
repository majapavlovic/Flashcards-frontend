import './App.css';
import AllFlashcards from './components/AllFlashcards';
import Navigation from './components/Navigation';
import AddQuestion from './components/AddQuestion';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [flashcards, setFlashcards] = useState([
    {
      id: 1,
      question: "What is a cell?",
      answer:"Cell is the basic membrane-bound unit that contains the fundamental molecules of life and of which all living things are composed.",
      category: "Biology"
    },
    {
      id: 2,
      question: "What is the capital city of Serbia?",
      answer: "Belgrade",
      category: "Geography"

    },
    {
      id: 3,
      question: "What started World War 2 and why?",
      answer: "Hitler's invasion of Poland in September 1939 drove Great Britain and France to declare war on Germany, marking the beginning of World War II",
      category: "History"
    },
  ]);

  const [fcardsNum, setfcardsNum] = useState(3);

  function addQuestion(newFcard) {
    console.log(newFcard);
    setfcardsNum(fcardsNum+1);
    setFlashcards(flashcards => [newFcard, ...flashcards]);
  }

  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route 
        path='/' 
        element={<AllFlashcards flashcards={flashcards}/>} 
        />
        <Route
        path='/add-question'
        element={<AddQuestion fcardsNum={fcardsNum} onAdd={addQuestion}/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
