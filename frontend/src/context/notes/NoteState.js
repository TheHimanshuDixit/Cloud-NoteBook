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

    const [notes, setNotes] = useState(notesInitial);

    // Add a note
    const addNote = (title, description, tag) => {
        console.log("Adding a new note");
        const note = {
            "_id": "6161b8b3c8b7a3b3e4c1b0a8",
            "user": "615f9b3c8b7a3b3e4c1b0a1",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2021-10-09T17:00:19.000Z",
            "__v": 0
        }
        setNotes(notes.concat(note));
    }

    // Delete a note
    const deleteNote = (id) => {
        console.log("Delete" + id)
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    // Edit a note
    const editNote = (title, description, tag) => {
    }


    return (
        // <NoteContext.Provider value={{state, update}}>
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;