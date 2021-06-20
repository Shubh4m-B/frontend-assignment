import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ListItem from './ListItem'

function NewItemForm(props) {

    const [productName, setproductName] = useState("")
    const [qty, setqty] = useState("")
    const [price, setprice] = useState("")
    const [productList, addProduct] = useState([])

    const handleName = (e) => {
        setproductName(e.target.value)
    }
    const handleQty = (e) => {
        setqty(e.target.value)
    }
    const handlePrice = (e) => {
        setprice(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const item = { productName: productName, qty: qty, price: price, id: uuidv4() }
        productList.push(item)
        addProduct(productList)
        setproductName("")
        setqty("")
        setprice("")
    }

    return (
        <div>
            <div>
                {productList.map((item) => (
                    <ListItem productName={item.productName} qty={item.qty} price={item.price} id={item.id} key={item.id} />
                ))}
            </div>
            <h2>Add New Item</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Item Name" onChange={handleName} value={productName}></input>
                <input type="text" placeholder="Quantity" onChange={handleQty} value={qty}></input>
                <input type="text" placeholder="Price" onChange={handlePrice} value={price}></input>
                <button type="submit">Add</button>
            </form>
        </div>
    )

}

export default NewItemForm
