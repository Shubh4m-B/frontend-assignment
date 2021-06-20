import React from 'react'

export default function Invoice(props) {
    const { id, customerId, customerName, status } = props.invoice
    return (
        <div>
            <h1>Hello</h1>
            <p>This is the id: {id}</p>
            <h1>Invoice ID: {id}</h1>
            <h2>Customer ID: {customerId}</h2>
            <h2>Customer Name: {customerName}</h2>
            <h2>Status: {status}</h2>
        </div>
    )
}
