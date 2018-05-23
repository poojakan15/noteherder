import React from 'react'

const Note = (props) => {
    return (
        <li className="Note">
        <div className="note">
            <div class="note-title">
                { props.noteProp.title }
            </div>
            <div className="note-body">
                <p>
                    { props.noteProp.body }
                </p>
            </div>
        </div>
        </li>
    )
}

export default Note