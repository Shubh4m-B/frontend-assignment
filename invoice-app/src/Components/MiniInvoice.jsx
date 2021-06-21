import React from 'react'
import '../Styles/MiniInvoice.css'

export default function MiniInvoice(props) {
    const { id, customerName, customerId, status } = props.invoice
    const { handleClick } = props
    return (
        <div onClick={() => handleClick(id)} className="MiniInvoice card">
            <h4 className="card-title">Name: {customerName}</h4>
            <h5>Status: {status}</h5>
        </div>
    )
}
