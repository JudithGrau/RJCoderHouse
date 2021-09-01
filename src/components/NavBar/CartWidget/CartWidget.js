import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'
import cart from './cart.png'
import './CartWidget.css'

export const CartWidget = () => {

    const {cantidadCarrito} = useContext(CartContext)
    return (
        <div className="cartWidget">
            <Link to="/cart">
                <img src={cart} alt="cart"/>
                <span className="cant"> {cantidadCarrito()}</span>
            </Link>
        </div>
    )
}