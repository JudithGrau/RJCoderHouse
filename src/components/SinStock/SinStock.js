import React from 'react'
import { Col } from 'react-bootstrap'
import './SinStock.css'

export const SinStock = ({stock, size}) => {
  // display de cartel de falta de stock si el stock = 0
  if (Number(stock) <= 0) {
    return <Col xs={Number(size)} className='stock m-auto'> Sin stock! </Col>
  }
  else {
    return null
  }
}
