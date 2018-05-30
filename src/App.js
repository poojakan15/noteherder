import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import './App.css'
import Main from './Main'
import SignIn from './SignIn'
import { auth } from './base'

class App extends Component {
  state = {
    uid: null,
  }

  componentDidMount() {
    const uid = localStorage.getItem('uid')
    if(uid) {
      this.setState({ uid })
    }
    auth.onAuthStateChanged(user => {
      if (user) {
        this.handleAuth(user)
      } else {
        this.signOut()
      }
    })
  }

  handleAuth = (user) => {
    this.setState({ uid: user.uid })
    localStorage.setItem('uid', user.uid)
  }

  signedIn = () => {
    return this.state.uid
  }

  signOut = () => {
      this.setState({ uid: null })
      localStorage.removeItem('uid')
      auth.signOut()
  }

  render() {
    return (
      <div className="App">
      <Switch>
        <Route 
          path="/sign-in" 
          render={() => (
            this.signedIn()
             ? <Main />
             : <SignIn />
          )}
        />
        <Route 
          path="/notes" 
          render={() => (
              this.signedIn()
              // ? <Main  signOut={this.signOut} uid={this.state.uid}/> 
              ? <Redirect to="/notes" />
              : <Redirect to="/sign-in" />
            )}
        />
      </Switch>
        {/* {
          this.signedIn() 
            ? <Main  signOut={this.signOut} uid={this.state.uid}/> 
            : <SignIn handleAuth={this.handleAuth}/>
        }
        <Main /> */}
       
      </div>
    )
  }
}

export default App
