import React, { Component } from 'react'

import './App.css'
import Main from './Main'
import SignIn from './SignIn'
import { auth } from './base'

class App extends Component {
  state = {
    uid: localStorage.getItem('user')
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.handleAuth(user)
      } else {
        this.signOut()
      }
    })
  }

  handleAuth = (user) => {
    localStorage.setItem('user', user.uid)
    this.setState({ uid: user.uid })
  }

  signedIn = () => {
    return this.state.uid
  }

  signOut = () => {
      localStorage.setItem('user', null)
      this.setState({ uid: null })
      auth.signOut()
  }

  render() {
    return (
      <div className="App">
        {
          this.signedIn() 
            ? <Main  signOut={this.signOut}/> 
            : <SignIn handleAuth={this.handleAuth}/>
        }
        {/* <Main /> */}
       
      </div>
    )
  }
}

export default App
