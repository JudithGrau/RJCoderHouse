import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router'
import Swal from 'sweetalert2'
import { CartContext } from '../../context/CartContext'
import { generarOrden } from '../../firebase/generarOrden'
import './Checkout.css'

export const Checkout = () => {

    const {carrito, totalCarrito, vaciarCarrito} = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        tel: 0,
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.nombre.length > 3 && values.email.length > 7 && values.tel.length >= 8) {
            generarOrden(values, carrito, totalCarrito())
                .then( res => {
                    Swal.fire({
                        icon: 'success',
                        title: 'La compra fue registrada!',
                        text: `Su número de Orden es: ${res}`,
                        confirmButtonText: 'OK'
                    })
                    vaciarCarrito()
                })
                .catch( err => {
                    console.log(err)
                })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Campos inválidos',
                text: 'Revise su información'
            })
        }
    }

    return (
        <div>
            <h2>Checkout</h2>
            <hr/>
            
        {!carrito.length 
            ? <Redirect to="/"/>
            :
            <div>
                <div className="form-container">
                    <div className="app-wrapper">
                        <div>
                            <h2 className="title">Create Order</h2>
                        </div>
                        <form className="form-wrapper" onSubmit={handleSubmit}>
                            <div className="name">
                                <label className="label">Full Name </label>
                                <input className="input"
                                    type="text"
                                    value={values.nombre}
                                    onChange={handleInputChange}
                                    name="nombre"
                                    required
                                />
                            </div>
                            <div className="email">
                                <label className="label">Email </label>
                                <input className="input"
                                    type="email"
                                    value={values.email}
                                    onChange={handleInputChange}
                                    name="email"
                                    required
                                />
                            </div>
                            <div className="telefono">
                                <label className="label">Teléfono </label>
                                <input className="input"
                                    type="tel"
                                    value={values.tel}
                                    onChange={handleInputChange}
                                    name="tel"
                                    required
                                />
                            </div>
                            <div>
                                <button className="submit" type="submit">Submit</button>
                            </div>
                        </form>

                    </div>
                </div>

            </div>
        }
        </div>
    )
}
