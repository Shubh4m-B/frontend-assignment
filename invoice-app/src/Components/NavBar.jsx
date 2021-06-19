import React, { Component } from 'react'
import '../Styles/NavBar.css'

export class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <h1 className="NavBar-brand">Product Name</h1>
                <ul className="NavBar-list">
                    <li className="NavBar-item">
                        My Orders
                    </li>
                    <li className="NavBar-item">
                        My Cart
                    </li>
                    <li className="NavBar-item">
                        Logout
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavBar
