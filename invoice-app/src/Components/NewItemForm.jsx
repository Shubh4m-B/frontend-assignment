import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ListItem from './ListItem'

function NewItemForm(props) {

    //General Details
    const [customerName, setCustomerName] = useState("")
    const [email, setEmail] = useState("")
    const [dueDate, setDate] = useState("")

    // Product Details
    const [productName, setproductName] = useState("")
    const [qty, setqty] = useState("")
    const [price, setprice] = useState("")
    const [productList, addProduct] = useState([])

    // handlers for general detail
    const handleCustomer = (e) => {
        setCustomerName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleDate = (e) => {
        setDate(e.target.value)
    }

    // handlers for the Item List
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
        addProduct(productList => [...productList, item])
        setproductName("")
        setqty("")
        setprice("")
    }

    // Create the invoice
    const handleCreate = () => {
        const newInvoice = {
            id: uuidv4(),
            customerName: customerName,
            customerId: uuidv4(),
            email: email,
            dueDate: dueDate,
            list: productList
        }
        props.saveInvoice(newInvoice)
        props.routeProps.history.push("/");
    }

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="name">Customer Name</label>
                    <input type="text" placeholder="Customer Name" id="name" onChange={handleCustomer} value={customerName} />
                </div>
                <div>
                    <label htmlFor="email">Email ID</label>
                    <input type="email" placeholder="Email Id" id="email" onChange={handleEmail} value={email} />
                </div>
                <div>
                    <label htmlFor="date">Due Date</label>
                    <input type="date" id="date" onChange={handleDate} value={dueDate} />
                </div>
            </form>
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
            <button onClick={handleCreate}>Create Invoice</button>
        </div>
    )

}

export default NewItemForm
