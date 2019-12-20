import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal';
import Product from './Product'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    maxWidth              : '700px',
    maxHeight             : '550px'
  }
};

Modal.setAppElement('#root')

const Cart  = ({ products, total }) => {
  const [payButton, setPayButton] = useState('Оплатить');

  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <em>Добавьте товары в корзину</em>
  )

  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#000';
  }

  function closeModal(){
    setIsOpen(false);
  }

  function onPayButton() {
    return setPayButton('Оплачено');
  }

  return (
    <div style={{textAlign: 'center'}}>
      <h3>Корзина</h3>
      <div>{nodes}</div>
        <hr />
        <p>Итого: {total} рублей</p>
  
      <button 
        onClick={openModal}
        disabled={hasProducts ? '' : 'disabled'}
        style={{margin: '20px', width: '150px', height: '50px', padding: '5px', backgroundColor: 'darkolivegreen', fontSize: '1em', borderRadius: '5%', color: 'white'}}
        >
        {hasProducts ? 'К оплате' : 'Выберите товар'}
      </button>
      <Modal 
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <button onClick={closeModal}>Назад в магазин</button>
        <div 
          ref={_subtitle => (subtitle = _subtitle)} 
          className='desc-modal-content'>
          <h2>Корзина</h2>
          <div>{nodes}</div>
          <hr />
          <p>Итого: {total} рублей</p>
          <button 
            onClick={onPayButton}
            style={{margin: '20px', width: '150px', height: '50px', padding: '5px', backgroundColor: 'darkolivegreen', fontSize: '1em', borderRadius: '5%', color: 'white'}}
          >
            {payButton}
          </button>
        </div>
        <div>
      </div>
      <button onClick={closeModal}>Назад в магазин</button>
    </Modal>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
