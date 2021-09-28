import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartScreen.css'

import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'


export const CartScreenView = () => {
    const {carrito, eliminarDelCarrito, vaciarCarrito, totalCarrito} = useContext(CartContext)


    return (
        <section className="container my-5">
            <div className=" my-5">
                <h1 className="title text-center">Resumen de compra</h1>
                <div className="productos d-flex">
                {carrito.map(prod => (

                    <div className="containerCard card-content" key={prod.id}>
                        <div className="textCard text-center m-2">
                            <img className="imgProd" src={prod.img} alt={prod.nombre}/>
                            <h4>{prod.nombre}</h4>
                            <p className="textCardP">Cantidad: {prod.cantidad}</p>
                            <p className="textCardP">Precio Total: ${prod.precio * prod.cantidad}</p>
                            <button className="btn"><BsFillTrashFill className="trash" onClick={() => eliminarDelCarrito(prod.id)}/></button>
                        </div>

                    </div>
                ))}
                </div>
            </div>
            <hr/>
            <h4>Total compra: $ {totalCarrito()}</h4>

            <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar carrito</button>
            <Link to="/checkout">
                <button className="btn btn-success mx-3">
                    Terminar mi compra
                </button>
            </Link>
        </section>
        


        
    )
}