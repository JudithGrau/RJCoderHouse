import React from 'react'
import { Link } from 'react-router-dom'
import '../CartScreen/CartScreen.css'

export const Counter = ({max, cantidad, setCantidad, agregar, agregado}) => {

    const handleSumar = () => {
        if (cantidad < max) {
            setCantidad(cantidad + 1)
        }
    }
    
    const handleRestar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <>
            <div className="d-flex">
                {
                    agregado
                        ? <Link to="/cart" className="btn_cartScreen terminar_compra m-0">Terminar mi compra</Link>
                        :
                        <div className="d-flex flex-row">
                            <button className="btn btn-primary mx-1" onClick={handleRestar}>-</button>
                            <p className="text_card">{cantidad}</p>
                            <button className="btn btn-primary mx-1" onClick={handleSumar}>+</button>
                            <button className="btn_cartScreen terminar_compra" onClick={agregar}>Agregar al carrito</button>
                        </div>
                }
            </div>
        </>
    )
}