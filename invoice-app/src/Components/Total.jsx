import React from 'react'
import '../Styles/NewItemForm.css'

export default function Total(props) {
    const { productList } = props;

    const calTotal = (productList) => {
        let total = 0;
        for (let i = 0; i < productList.length; i++) {
            total = total + (productList[i].price * productList[i].qty)
        }
        return total;
    }
    return (
        <div className="Total">
            <div className="Total-text">
                <h5>Grand Total: {calTotal(productList)}</h5>
            </div>
        </div>
    )
}
