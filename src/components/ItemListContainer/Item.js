import React from 'react'
import './ItemListContainer.css'

export const Item = ( {img, nombre, desc, precio} ) => {


    return (
        <div className="card col-4">
            <img src={img} alt={nombre}/>
            <h3 className="title text-center">{nombre}</h3>
            <p className="text-center">{desc}</p>
            <p className="text-center">$ {precio}</p>
        </div>
    )
}
