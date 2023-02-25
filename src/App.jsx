import { useState } from 'react'
import './App.css'
import Nav from './Components/Navbar/Nav'
import Siderbar from './Components/Sidebar/Siderbar'
import ListContext from './store/listviewContext'
import { Redirect, Route } from 'react-router-dom'
import Archive from './pages/Archive'
import Trash from './pages/Trash'
import Notes from './pages/Notes'
import { useEffect } from 'react'

function App() {
  const [viewType, setViewType] = useState(true)
  const [notes, setNotes] = useState([])

  async function addNoteHandler(note) {
    const response = await fetch(
      'https://keep-54ad2-default-rtdb.firebaseio.com/notes.json',
      {
        method: 'POST',
        body: JSON.stringify(note),
        headers: {
          'Content-type': 'application/json',
        },
      },
    )
    fetchNotes()
  }
  async function fetchNotes() {
    const fetchedNotes = []
    const response = await fetch(
      'https://keep-54ad2-default-rtdb.firebaseio.com/notes.json',
    )
    const data = await response.json()
    Object.keys(data).map(function (key) {
      fetchedNotes.push(data[key])
    })
    fetchedNotes.reverse()
    setNotes(fetchedNotes)
  }
  useEffect(() => {
    fetchNotes();
  }, [])

  return (
    <ListContext.Provider
      value={{
        viewType: viewType,
        setViewtype: function () {
          if (viewType == true) {
            setViewType(false)
          } else {
            setViewType(true)
          }
        },
      }}
    >
      <div className="App">
        <Nav />
        <Siderbar />
        <Route path="/">
          <Redirect to="/notes" />
        </Route>
        <Route path="/notes">
          <Notes notes={notes} addNote={addNoteHandler} />
        </Route>
        <Route path="/archive">
          <Archive />
        </Route>
        <Route path="/trash">
          <Trash />
        </Route>
      </div>
    </ListContext.Provider>
  )
}

export default App
