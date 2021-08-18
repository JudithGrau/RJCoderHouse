import React from 'react'
import cart from './cart.png'

export const CartWidget = ( {cantidad = 0} ) => {

    return (
        <div className="cartWidget">
            <img src={cart} alt="cart"/>
            <span> {cantidad}</span>
        </div>
    )
}