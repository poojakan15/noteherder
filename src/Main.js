import React from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      currentNote: this.blankNote(),
      notes: [],
    }
  }

  blankNote = () => {
      return  {
        id: null,
        title: '',
        body: '',
      }
  }

  setCurrentNote = (note) => {
    this.setState({ currentNote: note })
  }

  resetCurrentNote = () => {
      this.setCurrentNote(this.blankNote())
  }

  saveNote = (note) => {
    const notes = [...this.state.notes]
    if(!note.id) {
        // new notes
        note.id = Date.now()
        notes.push(note)
    }
    else {
        // existing note
        const i = notes.findIndex((currentNote) => currentNote.id === note.id)
        notes[i] = note
    }

    this.setState({ notes })
    this.setCurrentNote(note)
  }

  removeNote = (note) => {
    const notes = [...this.state.notes]
    const i = notes.findIndex((currentNote) => currentNote.id === note.id)
    notes.splice(i, 1)
    this.setState({ notes }) 
    this.setCurrentNote(this.blankNote())
  }

  render() {
    return (
      <div className="Main" style={style}>
        <Sidebar resetCurrentNote = {this.resetCurrentNote} />
        <NoteList
          notes={this.state.notes}
          setCurrentNote={this.setCurrentNote}
        />
        <NoteForm 
            currentNote={this.state.currentNote} 
            saveNote={this.saveNote}  
            removeNote={this.removeNote}  
        />
      </div>
    )
  }
}

// const data = Object.assign({}, localStorage)
const data = window.localStorage

const style = {
  display: 'flex',
  height: '100vh',
  alignItems: 'stretch',
}

export default Main