import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'
import base from './base'

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      currentNote: this.blankNote(),
      notes: [],
    }
  }

//   componentDidMount() {
//       const notes = JSON.parse(window.localStorage.getItem('notes'))
//       if(notes) {
//           this.setState({ notes })
//       }
//   }

  componentWillMount() {
      base.syncState(`notes/${this.props.uid}`, {
          context: this,
          state: 'notes',
          asArray: true,
      })
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
    let shouldRedirect = false
    const notes = [...this.state.notes]
    if(!note.id) {
        // new notes
        note.id = Date.now()
        notes.push(note)
        shouldRedirect = true
    }
    else {
        // existing note
        const i = notes.findIndex((currentNote) => currentNote.id === note.id)
        notes[i] = note
    }

    this.setState({ notes })
    // this.setCurrentNote(note)
    if(shouldRedirect) {
      this.props.history.push(`/notes/${note.id}`)
    }

    // window.localStorage.key(uid)
    // window.localStorage.setItem('notes', JSON.stringify(notes))
  }

  removeCurrentNote = (note) => {
    const notes = [...this.state.notes]
    // const i = notes.findIndex((currentNote) => currentNote.id === note.id)
    const i = notes.findIndex((note) => note.id === this.state.currentNote.id)
    if (i > -1) {
        notes.splice(i, 1)
        this.setState({ notes }) 
        // window.localStorage.setItem('notes', JSON.stringify(notes))
    }
    // notes.splice(i, 1)
    // this.setState({ notes }) 
    this.resetCurrentNote()
    // this.setCurrentNote(this.blankNote())
  }

  render() {
    const formProps ={
      currentNote: this.state.currentNote,
      saveNote: this.saveNote,
      removeCurrentNote: this.removeCurrentNote,
      notes: this.state.notes,
    }

    return (
      <div className="Main" style={style}>
        <Sidebar 
            resetCurrentNote = {this.resetCurrentNote} 
            signOut = {this.props.signOut}
        />
        <NoteList
          notes={this.state.notes}
          // setCurrentNote={this.setCurrentNote}
        />
        {/* <NoteForm 
            currentNote={this.state.currentNote} 
            saveNote={this.saveNote}  
            removeNote={this.removeNote}  
        /> */}
        <Switch>
        <Route 
          path="/notes/:id" 
          render={navProps => (
            <NoteForm 
              // currentNote={this.state.currentNote} 
              // saveNote={this.saveNote}  
              // removeNote={this.removeNote}  
              {...formProps}
              {...navProps}
            />       
          )}
        />
        <Route
          render={navProps => (
            <NoteForm
              {...formProps}
              {...navProps}
          />
          )}
          />
        </Switch>
      </div>
    )
  }
}

const style = {
  display: 'flex',
  height: '100vh',
  alignItems: 'stretch',
}

export default Main