import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartScreen.css'

import { BsFillTrashFill } from 'react-icons/bs'


export const CartScreenView = ( {productos = []} ) => {
    const {carrito, eliminarDelCarrito, vaciarCarrito} = useContext(CartContext)


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
                            <BsFillTrashFill className="trash" onClick={() => eliminarDelCarrito(prod.id)}/>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            <hr/>

            <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar carrito</button>
        </section>
        


        
    )
}