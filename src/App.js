import NotesList from './components/NotesList'
import {useState,useEffect} from 'react'
import Search from './components/Search'

const App = () => {
  const [notes,setNotes] = useState([])

  useEffect(() => {
    let _notes = localStorage.getItem('notes')
    if(_notes){
      setNotes(JSON.parse(_notes))
    }
  },[]) //runs only once
  useEffect(() =>{
    localStorage.setItem('notes',JSON.stringify(notes))
  },[notes])

  const addNote = (noteText) => {
    const date = new Date();
    let _newNote = {
      text:noteText,
      date:date.toLocaleDateString,
      id:Math.floor(Math.random() * 100) + 1
    }
    const newNotes = [...notes,_newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) =>{
    let _newNotes = notes.filter((note) => note.id !== id)
    setNotes(_newNotes)

  }

  const [searchText,setSearchText] = useState('')
  
  return (
    <div className="container">
      <h1>Notes</h1>
      <Search handleSearch = {setSearchText}/>
      <NotesList notes={notes.filter(note => note.text.toLowerCase().includes(searchText))} addNote={addNote} deleteNote={deleteNote}/>
    </div>
  )
}

export default App;