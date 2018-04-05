import React from 'react';
import { connect } from 'react-redux';

const Order = (props) => {
  return (
    <div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
};

export default connect(mapStateToProps, null)(Order);
