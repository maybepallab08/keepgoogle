import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import classes from './NoteForm.module.css'
import Notelist from '../Components/NotesList/Notelist'
import { useEffect } from 'react'

const NoteForm = () => {
  const [notes, setNotes] = useState([])
  const newNoteRef = useRef()
  const noteAddHandler = (event) => {
    if(newNoteRef.current.value!=''){
    setNotes([newNoteRef.current.value, ...notes])
    }
    event.preventDefault();
  }
  useEffect(()=>{
     newNoteRef.current.value='';
  },[notes])

  return (
    <div className={classes.noteform}>
      <form onBlur={noteAddHandler} onSubmit={noteAddHandler}>
        <input
          type="text"
          className={classes.takenote}
          placeholder="Take a note..."
          ref={newNoteRef}
        />
      </form>
      <Notelist notes={notes} />
    </div>
  )
}

export default NoteForm
