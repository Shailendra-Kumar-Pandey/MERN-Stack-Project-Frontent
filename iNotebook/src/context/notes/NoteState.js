import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesinitioal = [
    {
      _id: "67419ef9e42634626ac5e1c1",
      user: "673f97d4aaaa2a06cbc02ae3",
      title: "My Java",
      description: "Java is a most Popular laungage",
      tag: "Public",
      date: "2024-11-23T09:23:05.236Z",
      __v: 0,
    },
    {
      _id: "67419efce42634626ac5e1c3",
      user: "673f97d4aaaa2a06cbc02ae3",
      title: "My Java",
      description: "Java is a most Popular laungage",
      tag: "Public",
      date: "2024-11-23T09:23:08.195Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesinitioal);

  // Add Notes
  const addNote = (title, description, tag) => {
    // todo: API Call
    console.log("Adding a new Note")
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
  const updateNote = () => {};

  // Delete Notes
  const deleteNote = () => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, updateNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
