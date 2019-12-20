import React from 'react'
import PropTypes from 'prop-types'

const ProductsList = ({ children }) => (
  <div>
    <h3 className="list-heading">Список товаров</h3>
    <div className="products-list">
      {children}
    </div>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList
