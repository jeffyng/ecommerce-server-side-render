import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CheckOutForm from '../components/CheckOutForm';

const CheckOut = () => {
  return (
    <div>
    <Header />
    <div className="content">
      <CheckOutForm />
      <Footer />
    </div>
  </div>
  )
};

export default CheckOut;
