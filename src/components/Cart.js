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

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const [payButton, setPayButton] = useState('Оплатить');

  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      //<img src={} />
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <em>Добавленные в корзину товары</em>
  )

  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#000';
  }

  function closeModal(){
    setIsOpen(false);
  }

  function onPayButton() {
    return setPayButton('Оплачено');
  }

  return (
    <div>
      <h3>Корзина</h3>
      <div>{nodes}</div>
      <p>Итого: {total} рублей</p>
      <button onClick={openModal}
        disabled={hasProducts ? '' : 'disabled'}>
        К оплате
      </button>
      <Modal 
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <button onClick={closeModal}>Назад в магазин</button>
        <div ref={_subtitle => (subtitle = _subtitle)} className='desc-modal-content'>
          <h2>Корзина</h2>
          <div>{nodes}</div>
          <p>Итого: {total} рублей</p>
          <button onClick={onPayButton}>
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
