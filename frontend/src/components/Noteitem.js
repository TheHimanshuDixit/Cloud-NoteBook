import React, { useEffect } from 'react'
import noteContext from '../context/notes/noteContext'
import { useContext } from 'react';
import {
    Modal,
    initTE,
} from "tw-elements";

const Noteitem = (props) => {

    useEffect(() => {
        initTE({ Modal });
    }, []);

    const { note, updateNote } = props;
    const context = useContext(noteContext);
    const { deleteNote } = context;
    return (
        <div>
            <div className="py-5 block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mx-5">
                <i className="fa-solid fa-trash mx-2" onClick={() => {
                    deleteNote(note._id);
                    props.callSuccess('Note Deleted Successfully');
                }}></i>
                <i data-te-toggle="modal" data-te-target="#exampleModalCenteredScrollable" className="fa-solid fa-pen-to-square mx-2" onClick={() => { updateNote(note) }}></i>
                <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                        {note.title}
                    </h5>
                    <p className="mb-4 text-base text-neutral-600">
                        {note.description}
                    </p>
                </div>
                <div className="border-t-2 border-neutral-100 px-6 py-3">
                    2 days ago
                </div>
            </div>
        </div>
    )
}

export default Noteitem