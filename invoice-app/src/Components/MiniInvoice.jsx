import React from 'react'

export default function MiniInvoice(props) {
    const { id, customerName, customerId, status } = props.invoice
    const { handleClick } = props
    return (
        <div onClick={() => handleClick(id)}>
            <h1>Invoice ID: {id}</h1>
            <h2>Customer ID: {customerId}</h2>
            <h2>Customer Name: {customerName}</h2>
            <h2>Status: {status}</h2>
        </div>
    )
}
