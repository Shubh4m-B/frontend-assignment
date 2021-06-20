import React, { Component } from 'react'
import NewItemForm from './NewItemForm'

export class NewInvoice extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="NewInvoice">
                <NewItemForm saveInvoice={this.props.saveInvoice} routeProps={this.props.routeProps} />
            </div>
        )
    }
}

export default NewInvoice
