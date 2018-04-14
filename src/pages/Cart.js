import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Order from '../components/Order';



const Cart = (props) => {
  return (
    <div>
    <Header />
    <div className="content">
      <Order />
      <Footer />
    </div>
  </div>
  )
};


export default Cart;
