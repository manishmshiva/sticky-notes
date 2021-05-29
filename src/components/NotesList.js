import Note from './Note'
import AddNote from './AddNote'
const NotesList = ({notes,addNote}) => {
    return(
        <div className="container">
            <div className="notes-list">
                {notes.map((note) => <Note key={note.id} text={note.text} date={note.date}/>)}
                <AddNote handleSave={addNote}/>
            </div>
        </div>
    )
}

export default NotesList