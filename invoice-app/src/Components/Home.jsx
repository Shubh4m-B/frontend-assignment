import React, { Component } from 'react'
import MiniInvoice from './MiniInvoice'

import '../Styles/Home.css'
import '../Styles/NewItemForm.css'

export class Home extends Component {
    constructor(props) {
        super(props)
        this.gotoInvoice = this.gotoInvoice.bind(this)
    }
    gotoInvoice(id) {
        this.props.history.push(`/invoice-app/invoice/${id}`)
    }
    render() {
        return (
            <div className="container Home">
                <h1 className="NewItemForm-heading1">Invoices</h1>
                <div className="Home-invoices">
                    {this.props.invoices.map((invoice) => (
                        <MiniInvoice invoice={invoice} key={invoice.id} handleClick={this.gotoInvoice} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Home
