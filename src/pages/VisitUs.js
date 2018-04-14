import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StoreInfo from '../components/StoreInfo';

const VisitUs = (props) => {
  return (
    <div>
    <Header />
    <div className="content">
      <StoreInfo />
      <Footer />
    </div>
  </div>
  )
};


export default VisitUs;