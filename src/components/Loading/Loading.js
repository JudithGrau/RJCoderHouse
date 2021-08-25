import React from 'react'
import { Spinner } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Loading.css'

export const Loading = () => {
    return (
        <div className="divPadre">
            <div className="divHijo">
                <Spinner color="warning" className="spinnerReactstrap"/>
            </div>
        </div>
    )
}
