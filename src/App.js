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

  componentWillMount() {
    const uid = localStorage.getItem('uid')
    if(uid) {
      this.setState({ uid })
    }
    auth.onAuthStateChanged(user => {
      if (user) {
        this.handleAuth(user)
      } else {
        this.handleUnauth()
      }
    })
  }

  handleAuth = (user) => {
    this.setState({ uid: user.uid })
    localStorage.setItem('uid', user.uid)
  }

  handleUnauth = () => {
    this.setState({ uid: null })
    localStorage.removeItem('uid')
  }

  signedIn = () => {
    return this.state.uid
  }

  signOut = () => {
      // this.setState({ uid: null })
      // localStorage.removeItem('uid')
      auth.signOut()
  }

  render() {
    return (
      <div className="App">
      <Switch>
        <Route 
          path="/sign-in" 
          render={navProps => (
            this.signedIn()
             ? <Redirect to="/notes"/>
             : <SignIn {...navProps}/>
          )}
        />
        <Route 
          path="/notes" 
          render={navProps => (
              this.signedIn()
              ? <Main  
                  signOut={this.signOut} 
                  uid={this.state.uid} 
                  {...navProps}
                /> 
              // ? <Redirect to="/notes" />
              : <Redirect to="/sign-in" />
            )}
        />
        <Route 
          render={() => (
            this.signedIn()
            ? <Redirect to="/notes" />
            : <Redirect to="/sign-in" />
          )

          }
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
