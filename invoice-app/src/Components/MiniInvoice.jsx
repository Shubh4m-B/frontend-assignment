import React from 'react'

export default function MiniInvoice(props) {
    const { invoice } = props
    return (
        <div>
            <h1>Invoice ID: {invoice.id}</h1>
            <h2>Customer ID: {invoice.customerId}</h2>
            <h2>Customer Name: {invoice.customerName}</h2>
            <h2>Status: {invoice.status}</h2>
        </div>
    )
}
