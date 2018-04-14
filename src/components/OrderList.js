import React from 'react';
import { connect } from 'react-redux';
import { adjustCart } from '../actions';
import constants from '../constants';

const OrderList = (props) => {
  const removeFromCart = (index) => {
    props.removeFromCart(index);
  }
  return (
    <div className="order-list">
      <ul className="order-list__container">
        { props.cart.map((product, index) => {
          return (
            <li className="order-list__item" key={index}>
              <div className="order-list__item-img-container">
                <img className="order-list__item-img" src={product.imageUrl} />
                <div className="order-list__item-button-container">
                  <button onClick={ () => { removeFromCart(index)}} className="order-list__item-remove-button">Remove</button>
                </div>
              </div>
              <div className="order-list__item-details">
                <h3 className="order-list__item-title">{product.productName}</h3>
                <span className="order-list__item-color">{product.color}</span>
                <span className="order-list__item-price">${product.price}</span>
              </div>
            </li>
          )
          })
        }
      </ul>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (index) => {
      dispatch(adjustCart(constants.REMOVE_FROM_CART, index))
    }
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);

