import React from 'react'
import { Link } from 'react-router-dom'
import cart from './cart.png'
import './CartWidget.css'

export const CartWidget = ( {cantidad = 0} ) => {

    return (
        <div className="cartWidget">
            <Link to={"/cart"}>
                <img src={cart} alt="cart"/>
                <span className="cant"> {cantidad}</span>
            </Link>
        </div>
    )
}