import React, { Component } from 'react'
import NewItemForm from './NewItemForm'
import InvoiceForm from './InvoiceForm'

export class NewInvoice extends Component {
    render() {
        return (
            <div className="NewInvoice">
                <InvoiceForm />
                <NewItemForm />
            </div>
        )
    }
}

export default NewInvoice
