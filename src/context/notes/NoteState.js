import NoteContext from './noteContext';
import { useState } from 'react';

const NoteState = (props)=>{
    const s1 = {
        "name": "Jeetu Bhai",
        "class": "12th"
    }
    const [state, setState] = useState(s1);
    const update = ()=>{
        setTimeout(() => {
            setState({
                "name": "Shailendra Kumar Pandey",
                "class": "MBA"
            })
        }, 3000);
    }
    return (
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;