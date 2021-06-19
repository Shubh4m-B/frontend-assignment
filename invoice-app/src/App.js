import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import NewInvoice from './Components/NewInvoice'
import './App.css'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route
            exact
            path='/invoice-app/new'
            render={() =>
              <NewInvoice />
            }
          />
          <Route
            path='/invoice-app'
            render={() =>
              <Home />
            }
          />
        </Switch>
      </div>
    )
  }
}

export default App
