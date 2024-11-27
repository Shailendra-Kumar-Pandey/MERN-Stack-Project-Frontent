import react from 'react';
import noteContext from './noteContext';

const NoteState = (props)=>{
    return (
        <NoteState.Provider>
            {props.children}
        </NoteState.Provider>
    )
}

export default NoteState;