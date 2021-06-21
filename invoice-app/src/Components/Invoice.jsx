import React from 'react'
import { Link } from 'react-router-dom'
import Title from './Title'
import ListItem from './ListItem'
import Total from './Total'
import Empty from './Empty'
import '../Styles/Invoice.css'
import '../Styles/NewInvoice.css'

export default function Invoice(props) {
    const { id, customerId, customerName, status, list, email, dueDate } = props.invoice

    return (
        <div className="container Invoice">
            <h1 className="NewItemForm-heading1">Invoice #{id}</h1>
            <div className="Invoice-content">
                <div className="Invoice-general">
                    <h5>Customer ID: {customerId}</h5>
                    <h5>Customer Name: {customerName}</h5>
                    <h5>Email: {email}</h5>
                    <h5>Due Date: {dueDate}</h5>
                    <h5>Status: {status}</h5>
                </div>
                <Title />
                {

                    list.length ?
                        list.map((item) => (
                            <ListItem productName={item.productName} qty={item.qty} price={item.price} id={item.id} key={item.id} />
                        ))
                        : <Empty />

                }
                <Total productList={list} />
                <div className="NewItemForm-button">
                    <Link to='/' id="back">Back</Link>
                </div>
            </div>
        </div>
    )
}
