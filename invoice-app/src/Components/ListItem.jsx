import React from 'react'

export default function ListItem(props) {
    const { productName, qty, price, id } = props
    return (
        <div className="Title">
            <div className="item">
                <h5>{productName}</h5>
            </div>
            <div className="item">
                <h5>{qty}</h5>
            </div>
            <div className="item">
                <h5>{price}</h5>
            </div>
            <div className="item">
                <h5>{Math.round((qty * price) * 100) / 100}</h5>
            </div>
        </div>
    )
}
