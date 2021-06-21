import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ListItem from './ListItem'
import Title from './Title'
import Empty from './Empty'
import Total from './Total'

import '../Styles/NewItemForm.css'

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
        const item = { productName: productName, qty: qty, price: price, id: uuidv4().slice(-12) }
        addProduct(productList => [...productList, item])
        setproductName("")
        setqty("")
        setprice("")
    }

    // Create the invoice
    const handleCreate = () => {
        const newInvoice = {
            id: uuidv4().slice(-12),
            customerName: customerName,
            customerId: uuidv4().slice(-12),
            email: email,
            dueDate: dueDate,
            list: productList
        }
        props.saveInvoice(newInvoice)
        props.routeProps.history.push("/");
    }

    return (
        <div className="NewItemForm">
            <h1 className="NewItemForm-heading1">Create New Invoice</h1>
            <div className="NewItemForm-general">
                <h2 className="NewItemForm-heading2">General Details</h2>
                <form className="NewItemForm-form1">
                    <div className="row form-row">
                        <label htmlFor="name" className="col-3">Customer Name: </label>
                        <input type="text" placeholder="Customer Name" id="name" onChange={handleCustomer} value={customerName} className="col-7" />
                    </div>
                    <div className="row form-row">
                        <label htmlFor="email" className="col-3">Email ID: </label>
                        <input type="email" placeholder="Email Id" id="email" onChange={handleEmail} value={email} className="col-7" />
                    </div>
                    <div className="row form-row">
                        <label htmlFor="date" className="col-3">Due Date:</label>
                        <input type="date" id="date" onChange={handleDate} value={dueDate} />
                    </div>
                </form>
            </div>

            <h2 className="NewItemForm-heading2">Items</h2>
            <Title />
            <div>
                {productList.length ?
                    productList.map((item) => (
                        <ListItem productName={item.productName} qty={item.qty} price={item.price} id={item.id} key={item.id} />
                    ))
                    : <Empty />
                }
                <Total productList={productList} />
            </div>

            <h5 className="NewItemForm-heading2">Add New Item</h5>
            <form onSubmit={handleSubmit} className="Form">
                <input type="text" placeholder="Item Name" onChange={handleName} value={productName} className="Form-item" required></input>
                <input type="text" placeholder="Quantity" onChange={handleQty} value={qty} className="Form-item" required></input>
                <input type="text" placeholder="Price" onChange={handlePrice} value={price} className="Form-item" required></input>
                <button type="submit" className="Form-item">Add</button>
            </form>
            <div className="NewItemForm-button">
                <button onClick={handleCreate} >Send Invoice</button>
            </div>
        </div>
    )

}

export default NewItemForm
