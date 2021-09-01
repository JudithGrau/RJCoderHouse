import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import './ItemDetailContainer.css'
import { Counter } from '../Counter/Counter';

export const ItemDetail = ({category, id, nombre, desc, img, precio, stock}) => {

    const {agregarAlCarrito, isInCart} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)
    // agregar al carrito
    const handleAdd = () => {
        agregarAlCarrito({
            category, id, nombre, desc, img, precio, cantidad
        })
    }

    return (
        <div className="card_item">
            <div className="productDetail">
                <div className="col-md-6 d-block">
                    <img className="imgProd" src={img} alt={nombre}/>
                </div>
                <div className="col-md-6 d-block">
                    <h2>{nombre}</h2>
                    <p className="text_card">{desc}</p>
                    <p className="text_card">Precio: ${precio}</p>
                    <Counter
                        max={stock} 
                        cantidad={cantidad} 
                        setCantidad={setCantidad}
                        agregar={handleAdd} 
                        agregado={isInCart(id)} 
                    />
                    
                    <Link to={`/category/${category}`} className="btn btn-secondary m-5">Volver</Link>
                </div>
            </div>
            
        </div>
    )
}
