import React from 'react';
import { connect } from 'react-redux';
import OrderSummary from './OrderSummary';
import OrderList from './OrderList';

const Order = (props) => {
  return (
    <div className='order'>
      <div className='order__container'>
        <OrderList />
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
