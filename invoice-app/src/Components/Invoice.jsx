import React from 'react'
import Title from './Title'
import ListItem from './ListItem'
import Total from './Total'
import '../Styles/Invoice.css'
import '../Styles/NewInvoice.css'

export default function Invoice(props) {
    const { id, customerId, customerName, status, list, email } = props.invoice
    return (
        <div className="container Invoice">
            <h1 className="NewItemForm-heading1">Invoice #{id}</h1>
            <div className="Invoice-content">
                <div className="Invoice-general">
                    <h5>Customer ID: {customerId}</h5>
                    <h5>Customer Name: {customerName}</h5>
                    <h5>Status: {status}</h5>
                    <h5>Email: {email}</h5>
                </div>
                <Title />
                {
                    list.map((item) => (
                        <ListItem productName={item.productName} qty={item.qty} price={item.price} id={item.id} key={item.id} />
                    ))
                }
                <Total productList={list} />
            </div>
        </div>
    )
}
