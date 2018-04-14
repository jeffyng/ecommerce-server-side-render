import React from 'react';
import { connect } from 'react-redux';

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
      <button className="order-summary__button">CONTINUE TO CHECKOUT</button>
    </div>
  )
};
const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}
export default connect(mapStateToProps, null)(OrderSummary);
