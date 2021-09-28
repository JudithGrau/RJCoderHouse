import React from 'react'
import { SinStock } from '../SinStock/SinStock'
import { Link } from 'react-router-dom'
import './ItemListContainer.css'

export const Item = ( { id, img, nombre, desc, precio, stock } ) => {


    return (
        <div className="card col-4">
            <img src={img} alt={nombre}/>
            <h4 className="title text-center">{nombre}</h4>
            <p className="text-center">{desc}</p>
            <p className="text-center">$ {precio}</p>
            <Link to={`/detail/${id}`} className="btn btn-outline-primary mb-1">Ver más</Link>
            <SinStock stock={stock} size='8'/>
        </div>
    )
}
