import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import classes from './NoteForm.module.css'
import Notelist from '../NotesList/Notelist'
import { useEffect } from 'react'

const NoteForm = (props) => {
  const newNoteRef = useRef()

  const noteAddHandler = (event) => {
    event.preventDefault();
    if (newNoteRef.current.value !== '') {
      const newNote = newNoteRef.current.value;
      props.addNote(newNote);
      newNoteRef.current.value = ''
    }
  };

  return (
    <div className={classes.noteform}>
      <form onSubmit={noteAddHandler}>
        <input
          type="text"
          className={classes.takenote}
          placeholder="Take a note..."
          ref={newNoteRef}
        />
      </form>
    </div>
  )
}

export default NoteForm
