import React from 'react'

import Sidebae from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'
import Sidebar from './Sidebar';

const Main = () => {
    return (
        <div className="Main">
            <Sidebar />
            <NoteList />
            <NoteForm />
        </div>
    )
}

export default Main