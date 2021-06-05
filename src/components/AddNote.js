import { useState } from "react"

const AddNote = ({handleSave}) => {

    const [noteText,setNoteText] = useState('')
    
    const handleChange = (event) => {
        setNoteText(event.target.value)
    }

    const handleSaveClick = () => {
        if(noteText.trim().length > 0){
            handleSave(noteText)
            setNoteText('');
        }
    }
    return(
        <div className="note new">
            <textarea rows="8" cols="10" placeholder="Type to add a note" onChange={handleChange} value={noteText}></textarea>
            <div className="note-footer">
                <small>{200 - noteText.length} remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote