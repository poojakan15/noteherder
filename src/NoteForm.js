import React, {Component} from 'react'

import './NoteForm.css'

class NoteForm extends Component {
constructor(props) {
  super(props)
  this.state = {
    note: this.blankNote()
  }
}

blankNote = () => {
  return {
    id: null,
    title: '',
    body: '',
  }
}

  handleChanges = (ev) => {
    const note = {...this.state.note} // makes a copy
    note[ev.target.name] = ev.target.value
    this.setState(
      { note },
      () => this.props.saveNote(note)
    )
  }

  // const deleteNote = (ev) => {
  //   const note = {...currentNote}
  //   removeNote(note)
  // }
render ( ) {
  const { currentNote, removeNote } = this.props
  return (
    <div className="NoteForm">
      <div className="form-actions">
        <button 
          type="button" 
          onClick={removeNote}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
      <form>
        <p>
          <input
            type="text"
            name="title"
            placeholder="Title your note"
            value={this.state.note.title}
            onChange={this.handleChanges}
            autoFocus
          />
        </p>

        <textarea
          name="body"
          value={this.state.note.body}
          onChange={this.handleChanges}
        ></textarea>
      </form>
    </div>
  )
}
}

export default NoteForm