import { useState } from 'react'
import './App.css'
import Nav from './Components/Navbar/Nav'
import NoteForm from './pages/NoteForm'
import Siderbar from './Components/Sidebar/Siderbar'
import ListContext from './store/listviewContext'
import { Route, Switch } from 'react-router-dom'

function App() {
  const [viewType, setViewType] = useState(true)
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
        <Route path="/asf">
          <NoteForm />
        </Route>
      </div>
    </ListContext.Provider>
  )
}

export default App
