import React, { useEffect } from 'react'
import { useState } from 'react'
import NoteDisplay from './NoteDisplay'
import classes from './Notelist.module.css';

const Notelist = props => {

return <div className={classes.noteContainer}>
    {props.notes.map((note)=><NoteDisplay note={note} />)}
</div>
}

export default Notelist
