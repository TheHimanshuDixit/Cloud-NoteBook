import React from 'react'
import NoteContext from './noteContext'
import { useState } from 'react'

const NoteState = (props) => {
    // const st = {
    //     "name": "Harry",
    //     "class": "5th"
    // }
    // const [state, setstate] = useState(st);

    // const update = () => {
    //     setTimeout(() => {
    //         setstate({
    //             "name": "larry",
    //             "class": "10th"
    //         })
    //     }, 1000);
    // }

    const notesInitial = [
        {
            "_id": "6161b8b3c8b7a3b3e4c1b0a1",
            "user": "615f9b3c8b7a3b3e4c1b0a1",
            "title": "My title",
            "description": "My description",
            "tag": "personal",
            "date": "2021-10-09T17:00:19.000Z",
            "__v": 0
        },
        {
            "_id": "6161b8b3c8b7a3b3e4c1b0a2",
            "user": "615f9b3c8b7a3b3e4c1b0a1",
            "title": "My title",
            "description": "My description",
            "tag": "personal",
            "date": "2021-10-09T17:00:19.000Z",
            "__v": 0
        },
        {
            "_id": "6161b8b3c8b7a3b3e4c1b0a3",
            "user": "615f9b3c8b7a3b3e4c1b0a1",
            "title": "My title",
            "description": "My description",
            "tag": "personal",
            "date": "2021-10-09T17:00:19.000Z",
            "__v": 0 
        },
        {
            "_id": "6161b8b3c8b7a3b3e4c1b0a4",
            "user": "615f9b3c8b7a3b3e4c1b0a1",
            "title": "My title",
            "description": "My description",
            "tag": "personal",
            "date": "2021-10-09T17:00:19.000Z",
            "__v": 0
        },
        {
            "_id": "6161b8b3c8b7a3b3e4c1b0a5",
            "user": "615f9b3c8b7a3b3e4c1b0a1",
            "title": "My title",
            "description": "My description",
            "tag": "personal",
            "date": "2021-10-09T17:00:19.000Z",
            "__v": 0
        },
        {
            "_id": "6161b8b3c8b7a3b3e4c1b0a6",
            "user": "615f9b3c8b7a3b3e4c1b0a1",
            "title": "My title",
            "description": "My description",
            "tag": "personal",
            "date": "2021-10-09T17:00:19.000Z",
            "__v": 0
        },
        {
            "_id": "6161b8b3c8b7a3b3e4c1b0a7",
            "user": "615f9b3c8b7a3b3e4c1b0a1",
            "title": "My title",
            "description": "My description",
            "tag": "personal",
            "date": "2021-10-09T17:00:19.000Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial)

    return (
        // <NoteContext.Provider value={{state, update}}>
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;