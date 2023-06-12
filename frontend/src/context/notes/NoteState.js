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

    const host = "http://localhost:4000"
    const notesInitial = [

    ]

    const [notes, setNotes] = useState(notesInitial);

    // get all note
    const getNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4MzU2ZWEzOTA0ZTJlYzI0MGQzMWY1In0sImlhdCI6MTY4NjMzMTExMX0.jE5LZJY2xhZ9mcIaQVNNLPMsFgXEKAzkK2psNyrtbtU",
            }
        });
        const json = await response.json();
        console.log("Fetching all note");
        console.log(json);
        setNotes(json);
    }

    // Add a note
    const addNote = async (title, description, tag) => {

        const response = await fetch(`${host}/api/notes/addnote/`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4MzU2ZWEzOTA0ZTJlYzI0MGQzMWY1In0sImlhdCI6MTY4NjMzMTExMX0.jE5LZJY2xhZ9mcIaQVNNLPMsFgXEKAzkK2psNyrtbtU",
            },
            body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
        });
        
        const note = await response.json();
        setNotes(notes.concat(note));
        // const json = await response.json();
        // console.log(json);

        // console.log("Adding a new note");
        // const note = json
        // setNotes(notes.concat(note));
    }

    // Delete a note
    const deleteNote = async (id) => {

        // Api call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4MzU2ZWEzOTA0ZTJlYzI0MGQzMWY1In0sImlhdCI6MTY4NjMzMTExMX0.jE5LZJY2xhZ9mcIaQVNNLPMsFgXEKAzkK2psNyrtbtU",
            },
        });
        const json = await response.json();
        console.log("Delete" + id)
        console.log(json)
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    // Edit a note
    const editNote = async (id, title, description, tag) => {

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4MzU2ZWEzOTA0ZTJlYzI0MGQzMWY1In0sImlhdCI6MTY4NjMzMTExMX0.jE5LZJY2xhZ9mcIaQVNNLPMsFgXEKAzkK2psNyrtbtU",
            },
            body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
        });
        const json = await response.json();
        console.log(json);

        let newNotes = JSON.parse(JSON.stringify(notes))
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

    return (
        // <NoteContext.Provider value={{state, update}}>
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;