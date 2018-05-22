import React, { Component } from 'react'

import './App.css'
import './Sidebar.css'
import './NoteList.css'
import './NoteForm.css'

import Main from './Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    )
  }
}

export default App
