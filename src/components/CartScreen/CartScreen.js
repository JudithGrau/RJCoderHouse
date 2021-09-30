import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './CartScreen.css'
import { CartScreenView } from './CartScreenView'


export const CartScreen = () => {

    const {carrito} = useContext(CartContext)
    if (carrito < 1) {
        return <div className="alert alert-danger pt-5" role="alert">
                <h4 className="alert-heading pb-5">El carrito está vacío, agrega algo!</h4>
                <Link to={`/`} className="btn_cartScreen agregar_algo col-4 m-5">Agrega algo al carrito</Link>
            </div>
    }

    return (
        <>
            <CartScreenView />
        </>
    )
}
