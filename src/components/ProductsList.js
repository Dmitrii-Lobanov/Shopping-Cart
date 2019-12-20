import React from 'react'
import PropTypes from 'prop-types'

const ProductsList = ({ children }) => (
  <div>
    <h3>Список товаров</h3>
    <div>{children}</div>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList
