import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import NewInvoice from './Components/NewInvoice'
import Invoice from './Components/Invoice'
import seedData from './Helpers/seedData'
import './App.css'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invoices: seedData
    }
    this.saveInvoice = this.saveInvoice.bind(this)
    this.findInvoice = this.findInvoice.bind(this)
    this.updateStatus = this.findInvoice.bind(this)
  }

  saveInvoice(newInvoice) {
    this.setState(
      { invoices: [...this.state.invoices, newInvoice] },
    )
  }

  findInvoice(id) {
    return this.state.invoices.find(function (invoice) {
      return invoice.id === id;
    })
  }

  updateStatus(id, status) {
    console.log(`For id: ${id} change status to ${status}`)
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
            exact
            path="/invoice-app/invoice/:id"
            render={(routeProps) => (
              <Invoice invoice={this.findInvoice(routeProps.match.params.id)} updateStatus={this.updateStatus} {...routeProps} />
            )}
          />
          <Route
            path='/invoice-app'
            render={(routeProps) =>
              <Home invoices={this.state.invoices} {...routeProps} />
            }
          />
          <Redirect exact from='/' to='/invoice-app' />
        </Switch>
      </div>
    )
  }
}

export default App
