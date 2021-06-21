import React, { Component } from 'react'
import NewItemForm from './NewItemForm'

export class NewInvoice extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="NewInvoice">
                <div className="container">
                    <NewItemForm saveInvoice={this.props.saveInvoice} routeProps={this.props.routeProps} />
                </div>
            </div>
        )
    }
}

export default NewInvoice
