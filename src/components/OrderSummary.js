import React from 'react';
import { connect } from 'react-redux';
import checkOut from '../actions';

const OrderSummary = (props) => {
  const items = props.cart  || [];
  const sum = items.reduce((total, item) => { return total + item.price } ,0) || 0
  return (
    <div className="order-summary">
      <div className="order-summary__container">
        <div className="order-summary__title">
          <h3 className="order-summary__title-header">Order Summary</h3>
        </div>
        <div className="order-summary__details">
          <span className="order-summary__subtotal">Subtotal</span>
          <span className="order-summary__amount">{'$' + sum}</span>
        </div>
      </div>
      <a href="/checkout"><button className="order-summary__button">CONTINUE TO CHECKOUT</button></a>
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
    checkOut: () => {
      dispatch(checkOut())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary);
