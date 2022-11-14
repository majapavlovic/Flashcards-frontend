import React from 'react'
import Flashcard from './Flashcard'


function AllFlashcards({flashcards}) {
  return (
    <div className='all-flashcards'>
    {flashcards.map((fcards) => (
      <Flashcard flashcard={fcards} key={fcards.id}/> 
    ))}
    </div>
  )
}

export default AllFlashcards
