import React from 'react';
import { connect } from 'react-redux';
import OrderSummary from './OrderSummary';

const Order = (props) => {
  return (
    <div className='order'>
      <div className='order__container'>
        <div>asfsfsfasffasfsaf</div>
        <OrderSummary />
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
};

export default connect(mapStateToProps, null)(Order);
