import React, { useState } from 'react'

function Flashcard({flashcard}) {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="card"  onClick={() => setHidden(!hidden)}>
      <div className="card-body">
        <h5 className="card-title">{flashcard.question}</h5>
        <p className="card-text" hidden={hidden}>{flashcard.answer}</p>
        <span style={{float:"right"}}>{flashcard.category}</span>
      </div>
    </div>
  )
}

export default Flashcard
