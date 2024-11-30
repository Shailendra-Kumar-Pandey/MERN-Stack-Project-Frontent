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
        'Content-Type': 'aplication/json',
        "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjczZjk3ZDRhYWFhMmEwNmNiYzAyYWUzIn0sImlhdCI6MTczMjIyMDg4NH0.21KcJYfygp7qxA-6g56tiVoSlYLCv782NDDpL5s_4Fc"
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  // Add Notes
  const addNote = async (title, description, tag) => {
    // todo: API Call
     //API call
     const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers:{
        'Content-Type': 'aplication/json',
        "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjczZjk3ZDRhYWFhMmEwNmNiYzAyYWUzIn0sImlhdCI6MTczMjIyMDg4NH0.21KcJYfygp7qxA-6g56tiVoSlYLCv782NDDpL5s_4Fc"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json();
    console.log(json);

    //logic Add note
    console.log("Adding a new Note");
    const note = {
      _id: "67419ef9e4263462e6ac5e1c1",
      user: "673f97d4aaaa2a06cbcs02ae3",
      title: title,
      description: description,
      tag: tag,
      date: "2024-11-23T09:23:05.236Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  // Update Notes
  const updateNote = async (id, title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers:{
        'Content-Type': 'aplication/json',
        "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjczZjk3ZDRhYWFhMmEwNmNiYzAyYWUzIn0sImlhdCI6MTczMjIyMDg4NH0.21KcJYfygp7qxA-6g56tiVoSlYLCv782NDDpL5s_4Fc"
      },
      body: JSON.stringify({title, description, tag})
    })
    const json = await response.json();
    console.log(json);

    // logic to updateNote in Client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element.id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }      
    }
  };
  // Delete Notes
  const deleteNote = (id) => {
    // todo: API Call
  console.log("Deleting this note id" + id);
  const newNote=notes.filter((note)=>{
    return note._id!==id;
  })
  setNotes(newNote);  
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, updateNote, deleteNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
