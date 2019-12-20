import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

import '../App.css';

const App = () => (
  <div>
    <h2>Онлайн магазин</h2>
    <hr/>
    <div className="container">
      <ProductsContainer />
      <CartContainer />
    </div>
  </div>
)

export default App
