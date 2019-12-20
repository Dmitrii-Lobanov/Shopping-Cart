import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, quantity, title }) => (
  <div>  
    <div>{title}</div> 
    <div>{price} рублей</div>
    <div>Количество: {quantity ? ` ${quantity}` : null} шт.</div>
  </div>
  )

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}

export default Product
