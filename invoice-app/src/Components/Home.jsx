import React, { Component } from 'react'
import MiniInvoice from './MiniInvoice'

export class Home extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                {this.props.invoices.map((invoice) => (
                    <MiniInvoice invoice={invoice} key={invoice.id} />
                ))}
            </div>
        )
    }
}

export default Home
