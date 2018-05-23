import React from 'react'

import NoteList from './NoteList'
import NoteForm from './NoteForm'
import Sidebar from './Sidebar';

class Main extends React.Component{
    constructor() {
        super()
        this.state = {
            notes: [
                {
                  id: 1,
                  title: 'Why I <3 JS',
                  body: 'Because I like code, and JS is code',
                },
            
                {
                  id: 2,
                  title: 'Thoughts on breakfast',
                  body: 'I love it!'
                },
            
                {
                  id: 3,
                  title: 'Watching the first episode of Black Mirror with your parents',
                  body: 'Don\'t.',
                },
            ]
        }
    }

    render() {
        return (
            <div className="Main" style={style}>
                <Sidebar />
                <NoteList notes={this.state.notes} />
                <NoteForm />
            </div>
        )
    }
}

const style = {
    // color: 'red', 
    display: 'flex',
    height: '100vh',
    alignItems: 'stretch'
}

export default Main