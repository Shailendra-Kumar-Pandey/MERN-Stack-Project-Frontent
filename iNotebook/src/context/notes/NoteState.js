import NoteContext from "./noteContext";
import React, {useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesinitioal = [];
  const [notes, setNotes] = useState(notesinitioal);

  
  // get all Notes
  const getNotes = async () => {
    // todo: API Call
     //API call
     const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        "auth-token" : localStorage.getItem('token')
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  // Add Notes
  const addNote = async (title, description, tag) => {
     //API call
     const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers:{
        "Content-Type": "application/json",
        "auth-token" : localStorage.getItem('token')
        },
      body: JSON.stringify({title, description, tag})
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  };
 
  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });
    // eslint-disable-next-line
    const json = await response.json();
     let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag; 
        break; 
      }
    }  
    setNotes(newNotes);
  }
  // Delete Notes
  const deleteNote = async(id) => {
    //API Call 
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json',
        "auth-token" : localStorage.getItem('token')
      },    
    })
    // eslint-disable-next-line
    const json = await response.json();
    
    // todo: API Call
  const newNote=notes.filter((note)=>{
    return note._id!==id;
  })
  setNotes(newNote);  
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
