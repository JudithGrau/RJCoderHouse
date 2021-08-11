import React from 'react'
import cart from './cart.png'

export const CartWidget = () => {

    return (
        <div>
            <img src={cart} className="cart" alt="cart"/>
        </div>
    )
}