import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import NewInvoice from './Components/NewInvoice'
import seedData from './Helpers/seedData'
import './App.css'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invoices: seedData
    }
    this.saveInvoice = this.saveInvoice.bind(this)
  }

  saveInvoice(newInvoice) {
    this.setState(
      { invoices: [...this.state.invoices, newInvoice] },
    )
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route
            exact
            path='/invoice-app/new'
            render={(routeProps) =>
              <NewInvoice saveInvoice={this.saveInvoice} routeProps={routeProps} />
            }
          />
          <Route
            path='/invoice-app'
            render={() =>
              <Home invoices={this.state.invoices} />
            }
          />
          <Redirect exact from='/' to='/invoice-app' />
        </Switch>
      </div>
    )
  }
}

export default App
