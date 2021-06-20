import React from 'react'

export default function ListItem(props) {
    const { productName, qty, price, id } = props
    return (
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
            <h3>{productName}</h3>
            <h3>{qty}</h3>
            <h3>{price}</h3>
            <h3>{qty * price}</h3>
        </div>
    )
}
