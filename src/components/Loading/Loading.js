import React from 'react'
import { Spinner } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import './Loading.css'

export const Loading = () => {
    return (
        <div className="divPadre">
            <div className="divHijo">
                <Spinner animation="border" role="status" variant="warning" className="spinner" /> <p>Cargando...</p>
            </div>
        </div>
    )
}
