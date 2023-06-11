import React from 'react'
import NoteContext from './noteContext'
import { useState } from 'react'

const NoteState = (props) => {
    const st = {
        "name": "Harry",
        "class": "5th"
    }
    const [state, setstate] = useState(st);
    // eslint-disable-next-line
    const update = () => {
        setTimeout(() => {
            setstate({
                "name": "larry",
                "class": "10th"
            })
        }, 1000);
    }
    return (
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;