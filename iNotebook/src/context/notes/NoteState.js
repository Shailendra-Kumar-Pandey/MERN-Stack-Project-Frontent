import NoteContext from './noteContext';
import { useState } from 'react';

const NoteState = (props)=>{
   const notesinitioal = [
    {
        "_id": "67419ef93e42634626ac5e1c1",
        "user": "673f97d4aaaa2a06cbc02ae3",
        "title": "My Java",
        "description": "Java is a most Popular laungage",
        "tag": "Public",
        "date": "2024-11-23T09:23:05.236Z",
        "__v": 0
    },
    {
        "_id": "67419efce426334626ac5e1c3",
        "user": "673f97d4aaaa2a06cbc02ae3",
        "title": "My Java",
        "description": "Java is a most Popular laungage",
        "tag": "Public",
        "date": "2024-11-23T09:23:08.195Z",
        "__v": 0
    },
    {
        "_id": "67419ef9e42634626ac35e1c1",
        "user": "673f97d4aaaa2a06cbc02ae3",
        "title": "My Java",
        "description": "Java is a most Popular laungage",
        "tag": "Public",
        "date": "2024-11-23T09:23:05.236Z",
        "__v": 0
    },
    {
        "_id": "67419ef9e42634626ac53e1c1",
        "user": "673f97d4aaaa2a06cbc02ae3",
        "title": "My Java",
        "description": "Java is a most Popular laungage",
        "tag": "Public",
        "date": "2024-11-23T09:23:05.236Z",
        "__v": 0
    },
    {
        "_id": "673419ef9e42634626ac5e1c1",
        "user": "673f97d4aaaa2a06cbc02ae3",
        "title": "My Java",
        "description": "Java is a most Popular laungage",
        "tag": "Public",
        "date": "2024-11-23T09:23:05.236Z",
        "__v": 0
    },
    {
        "_id": "674129ef9e42634626ac5e1c1",
        "user": "673f97d4aaaa2a06cbc02ae3",
        "title": "My Java",
        "description": "Java is a most Popular laungage",
        "tag": "Public",
        "date": "2024-11-23T09:23:05.236Z",
        "__v": 0
    },
    {
        "_id": "67419ef9e426346226ac5e1c1",
        "user": "673f97d4aaaa2a06cbc02ae3",
        "title": "My Java",
        "description": "Java is a most Popular laungage",
        "tag": "Public",
        "date": "2024-11-23T09:23:05.236Z",
        "__v": 0
    },
    {
        "_id": "67419ef9e42634626ac5e21c1",
        "user": "673f97d4aaaa2a06cbc02ae3",
        "title": "My Java",
        "description": "Java is a most Popular laungage",
        "tag": "Public",
        "date": "2024-11-23T09:23:05.236Z",
        "__v": 0
    },
    {
        "_id": "67419ef9e42634626adc5e1c1",
        "user": "673f97d4aaaa2a06cbc02ae3",
        "title": "My Java",
        "description": "Java is a most Popular laungage",
        "tag": "Public",
        "date": "2024-11-23T09:23:05.236Z",
        "__v": 0
    },
    {
        "_id": "67419ef9e42634626dac5e1c1",
        "user": "673f97d4aaaa2a06cbc02ae3",
        "title": "My Java",
        "description": "Java is a most Popular laungage",
        "tag": "Public",
        "date": "2024-11-23T09:23:05.236Z",
        "__v": 0
    },
    {
        "_id": "67419efd9e426346h26ac5e1c1",
        "user": "673f97d4aaaa2a06cbc02ae3",
        "title": "My Java",
        "description": "Java is a most Popular laungage",
        "tag": "Public",
        "date": "2024-11-23T09:23:05.236Z",
        "__v": 0
    },
    {
        "_id": "67419efd9e42634626ac5em1c1",
        "user": "673f97d4aaaa2a06cbc02ae3",
        "title": "My Java",
        "description": "Java is a most Popular laungage",
        "tag": "Public",
        "date": "2024-11-23T09:23:05.236Z",
        "__v": 0
    },
    {
        "_id": "67419sef9e42634626ac5e1c1",
        "user": "673f97d4aaaa2a06cbc02ae3",
        "title": "My Java",
        "description": "Java is a most Popular laungage",
        "tag": "Public",
        "date": "2024-11-23T09:23:05.236Z",
        "__v": 0
    },
    {
        "_id": "6741s9ef9e42634626ac5e1c1",
        "user": "673f97d4aaaa2a06cbc02ae3",
        "title": "My Java",
        "description": "Java is a most Popular laungage",
        "tag": "Public",
        "date": "2024-11-23T09:23:05.236Z",
        "__v": 0
    },
    {
        "_id": "67419ef9e42634626abc5e1c1",
        "user": "673f97d4aaaa2a06cbc02ae3",
        "title": "My Java",
        "description": "Java is a most Popular laungage",
        "tag": "Public",
        "date": "2024-11-23T09:23:05.236Z",
        "__v": 0
    },
    {
        "_id": "67419ef9e4263b4626ac5e1c1",
        "user": "673f97d4aaaa2a06cbc02ae3",
        "title": "My Java",
        "description": "Java is a most Popular laungage",
        "tag": "Public",
        "date": "2024-11-23T09:23:05.236Z",
        "__v": 0
    },
   ]
   const [notes, setNotes] = useState(notesinitioal)
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;