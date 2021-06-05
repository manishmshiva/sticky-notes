import Note from './Note'
import AddNote from './AddNote'
import Search from './Search'
const NotesList = ({notes,addNote,deleteNote}) => {
    return(
        <div className="container">
            <div className="notes-list">
                {notes.map((note) => <Note key={note.id} id={note.id} text={note.text} date={note.date} handleDelete={deleteNote}/>)}
                <AddNote handleSave={addNote}/>
            </div>
        </div>
    )
}

export default NotesList