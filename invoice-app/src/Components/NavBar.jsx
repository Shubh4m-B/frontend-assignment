import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/NavBar.css'

export class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <Link to='/invoice-app'>
                    <h2 className="NavBar-brand">Invoice App</h2>
                </Link>
                <ul className="NavBar-list">
                    <li className="NavBar-item">
                        <Link to='/invoice-app'>Home</Link>
                    </li>
                    <li className="NavBar-item">
                        <Link to='/invoice-app/new'>New Invoice</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavBar
