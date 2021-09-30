import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import logo from '../NavBar/logo.png'
import './About.css'

export const About = ({ greeting }) => {
  return (
    <Container fluid className='text-center'>
      <Row className="mt-5">
        
        <h1 className='title text-center mt-5'>Sobre nosotros</h1>
        
        <div>
          <h4 className=''>
              {greeting}
          </h4>
          <img src={logo} alt="cart" width="100px"/>
          <Col xs={12} className='mb-5'>
            <p>Somos fabricantes de remeras y buzos animé de excelente calidad estampadas. Las telas que se usan para la confección son de primera calidad.</p>
            <p>La tela que se utiliza es ALGODON 100 % PEINADO generando este tejido una calidad en la tela que no se destiñe con los lavados, no se deforma, y hace que el estampado perdure por muchísimo tiempo.</p>
            <p>Fabricamos remeras y buzos de la mejor calidad estampadas con  personajes de animé que no se encuentran fácilmente porque son de las sagas más nuevas y populares.</p>
            <p>Usamos las mejores telas porque nuestro objetivo es que tengas a tus personajes y motivos favoritos en una prenda de calidad.</p>
            <p>Hace muchos años que estamos en el rubro y siempre fue nuestra premisa brindar un producto premium a nuestros clientes. </p>
          </Col>
        </div>
        
      </Row>
    </Container>
  )
}