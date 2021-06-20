import React, { Component } from 'react'
import NewForm from './NewForm'

export class NewInvoice extends Component {
    render() {
        return (
            <div className="NewInvoice">
                This is the new invoice form
                <NewForm />
            </div>
        )
    }
}

export default NewInvoice
