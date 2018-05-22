import React from 'react'

import NoteList from './NoteList'
import NoteForm from './NoteForm'
import Sidebar from './Sidebar';

const Main = () => {
    return (
        <div className="Main" style={style}>
            <Sidebar />
            <NoteList />
            <NoteForm />
        </div>
    )
}

const style = {
    // color: 'red', 
    display: 'flex',
    height: '100vh',
    alignItems: 'stretch'
}

export default Main