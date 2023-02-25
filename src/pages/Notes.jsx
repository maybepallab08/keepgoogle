import React, { useEffect } from 'react'
import NoteForm from '../Components/NotesInput/NoteForm'
import Notelist from '../Components/NotesList/Notelist'
import { useState } from 'react'

const Notes = (props) => {
  const [notes, setNotes] = useState([])
  useEffect(() => {
    setNotes(props.notes)
  }, [props.notes])

  function addNoteHandler(note) {
    setNotes([note, ...notes])
    props.addNote(note)
    console.log(note)
  }

  return (
    <div>
      <NoteForm addNote={addNoteHandler} />
      <Notelist notes={notes} />
    </div>
  )
}

export default Notes

