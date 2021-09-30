import React from 'react'
import { Container} from 'react-bootstrap'
import { GoLocation } from 'react-icons/go';
import { FiPhone } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom'
import logo from '../NavBar/logo.png' 
import './Footer.css'

export const Footer = () => {

  return <Container fluid className='footer'>
    <div className="container-footer-all">

      <div className="container-body">
        <div className="column1">
          <h2 className=''>Tienda Anime</h2>
          <p className="dark">Somos fabricantes de remeras y buzos animé de excelente calidad estampadas. Las telas que se usan para la confección son de primera calidad.</p>
          <div className="text-center">
          <Link to={"/"}><img src={logo} alt="cart" className="img_logo mr-5" width="60px"/></Link>
          </div>
        </div>
        <div className="column2">
          <h2 className=''>Contacto</h2>
          <div className="fila">
          <GoLocation className="icono1" />
            <label>Dirección: Alberdi 5800, Mataderos, CABA</label>
          </div>
          <div className="fila">
          <FiPhone className="icono2" />
            <label>Teléfono: 1121112233</label>
          </div>
          <div className="fila">
          <MdEmail className="icono3" />
            <label>Email: tiendaanime@gmail.com</label>
          </div>
        </div>
      </div>
    </div>
      <div className="container-footer">
        <div className="copyright text-center mt-5">
        &copy; 2021 Todos los derechos reservados | Judith Grau
        </div>
      </div>
  </Container>

}