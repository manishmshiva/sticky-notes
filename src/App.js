import NotesList from './components/NotesList'
import {useState} from 'react'

const App = () => {
  const [notes,setNotes] = useState([
    {
      text:"My first note",
      date:'1/1/2021',
      id:1
    },
    {
      text:"My second note",
      date:'2/1/2021',
      id:2
    },
    {
      text:"My third note",
      date:'3/1/2021',
      id:3
    },
    {
      text:"My fourth note",
      date:'4/1/2021',
      id:4
    },
    {
      text:"My fifth note",
      date:'5/1/2021',
      id:5
    }
  ])

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
  
  return <NotesList notes={notes} addNote={addNote} deleteNote={deleteNote}/>
}

export default App;