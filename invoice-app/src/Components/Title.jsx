import React from 'react'
import '../Styles/NewItemForm.css'

export default function Title() {
    return (
        <div className="Title">
            <div className="Title-item">
                <h5>Product Name</h5>
            </div>
            <div className="Title-item">
                <h5>Quantity</h5>
            </div>
            <div className="Title-item">
                <h5>Price (Rs)</h5>
            </div>
            <div className="Title-item">
                <h5>Total (Rs)</h5>
            </div>
        </div>
    )
}
