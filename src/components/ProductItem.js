import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

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

const ProductItem = ({ product, onAddToCartClicked }) => {
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

  return (
  <div>
  <img src={require(`../data/${product.id}.jpg`)} width='200' />
    <Product
      id={product.id}
      title={product.title}
      price={product.price}
      quantity={product.inventory} />
      <button onClick={openModal}>
        Подробнее
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
          <h2>{product.title}</h2>
          <img src={require(`../data/${product.id}.jpg`)} width="400" />
          <h3>{product.price} рублей</h3>
          <p>{product.description}</p>
        </div>
        <div>
          <button
            onClick={onAddToCartClicked}
            disabled={product.inventory > 0 ? '' : 'disabled'} >
            {product.inventory > 0 ? 'Добавить в корзину' : 'Продано'}
          </button>
        </div>
        <button onClick={closeModal}>Назад в магазин</button>
      </Modal>
    <button
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? '' : 'disabled'} >
      {product.inventory > 0 ? 'Добавить' : 'Продано'}
    </button>
  </div>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
