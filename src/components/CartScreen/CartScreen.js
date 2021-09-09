import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './CartScreen.css'


export const CartScreen = () => {

    const {carrito, eliminarDelCarrito, vaciarCarrito} = useContext(CartContext)
    if (carrito < 1) {
        return <div className="alert alert-danger pt-5" role="alert">
                <h4 className="alert-heading pb-5">El carrito está vacío, agrega algo!</h4>
                <Link to={`/`} className="btn btn-warning m-5">Agrega algo al carrito</Link>
            </div>
    }

    return (
        <>
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
        </>
    )
}
