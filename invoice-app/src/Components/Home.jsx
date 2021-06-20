import React, { Component } from 'react'
import MiniInvoice from './MiniInvoice'

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
            <div>
                {this.props.invoices.map((invoice) => (
                    <MiniInvoice invoice={invoice} key={invoice.id} handleClick={this.gotoInvoice} />
                ))}
            </div>
        )
    }
}

export default Home
