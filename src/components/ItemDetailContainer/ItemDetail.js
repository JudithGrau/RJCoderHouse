import React from 'react'
import { Link } from 'react-router-dom'
import './ItemDetailContainer.css'

export const ItemDetail = ({category, id, nombre, desc, img, precio}) => {


    return (
        <div className="card_item">
            <div className="productDetail">
                <div className="col-md-6 d-block">
                    <img className="imgProd" src={img} alt={nombre}/>
                </div>
                <div className="col-md-6 d-block">
                    <h2>{nombre}</h2>
                    <p>{desc}</p>
                    <p>Precio: ${precio}</p>
                    
                    <Link to={`/category/${category}`} className="btn btn-primary">Volver</Link>
                </div>
            </div>
            
        </div>
    )
}
