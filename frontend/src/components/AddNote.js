import React, { useState } from 'react'
import noteContext from '../context/notes/noteContext'
import { useContext } from 'react';


const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNotes] = useState({ title: "", description: "", tag: "" })

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNotes({ title: "", description: "", tag: "" })
    }

    const onChange = (e) => {
        e.preventDefault();
        setNotes({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <div className="container my-3">
            <h2>Add Note</h2>
            <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="email" className="form-control" id="title" value={note.title} aria-describedby="emailHelp" name="title" onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Descriptoin</label>
                    <input type="current-password" className="form-control" id="description" value={note.description} name="description" onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="current-password" className="form-control" id="tag" value={note.tag} name="tag" onChange={onChange}/>
                </div>
                <button disabled={note.title < 5 || note.description < 5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote