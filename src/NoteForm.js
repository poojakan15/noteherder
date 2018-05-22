import React from 'react'

import './NoteForm.css'

const NoteForm = () => {
    return (
        <div className="NoteForm">
            <button type="button">
                <i className="fa fa-trash-o"></i>
            </button>
            <input type="text" placeholder="Title.." />
        </div>
    )
}

export default NoteForm