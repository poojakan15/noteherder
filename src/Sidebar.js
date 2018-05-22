import React from 'react'

import quill from './quill.svg'
import newIcon from './new.png'
import newHover from './new-hover.png'

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <div className="logo">
                <img src={quill} alt="Noteherder" />
            </div>

            <a href="/notes">
                <img src={newHover} alt="New Note" />
                <img src={newIcon} alt="New Note" />
            </a>

            <div className="SignOut">
                <button>
                    <i className="fa fa-sign-out"></i>
                </button>
            </div>

        </div>
    )
}
export default Sidebar