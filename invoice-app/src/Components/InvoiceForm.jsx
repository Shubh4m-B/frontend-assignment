import React from 'react'

export default function InvoiceForm() {

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Customer Name" />
                <input type="text" placeholder="Email Id" />
                <button type="submit">Create Invoice</button>
            </form>
        </div>
    )
}
