import {MdDeleteForever} from 'react-icons/md'
const Note = ({text,date,id,handleDelete}) => {
    return(
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever className="delete-icon icon" size='1.3em' onClick={() => handleDelete(id)}/>
            </div>
        </div>
    )
}

export default Note