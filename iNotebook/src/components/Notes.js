import React,{useContext} from 'react';
import AddNote from './AddNote';
import Noteitems from './Noteitems';
import noteContext from "../context/notes/noteContext";
import { useEffect } from 'react';

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes} = context;
  useEffect(()=>{
    getNotes();
    // eslint-disable-next-line
  },[]);
  return (
    <>
    <AddNote/>
    <div className="row my-3">
        <h1>Your Notes</h1>
        {notes.map((note)=>{
          return <Noteitems key={note._id} note={note}/>
        })}
    </div>
    </>
  )
}

export default Notes;