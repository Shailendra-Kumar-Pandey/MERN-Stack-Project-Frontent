import React,{useContext} from 'react'
import noteContext from "../context/notes/noteContext";
import Noteitems from './Noteitems';

const Notes = () => {
    const context = useContext(noteContext);
    const {notes, setNotes} = context;  
    // eslint-disable-next-line
  return (
    <div className="row my-3">
        <h1>Your Notes</h1>
        {notes.map((note)=>{
          return <Noteitems key={note._id} note={note}/>
        })}
    </div>
  )
}

export default Notes;