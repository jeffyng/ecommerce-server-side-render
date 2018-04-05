import React from 'react';

import { connect } from 'react-redux';
import { addToCart } from '../actions';

const Product = (props) => {
  const addToCart = () => {
    props.addToCart(props.product) 
  }
  
  return (
    <div className="product">
      
      <div className="product__container">
        <div className="product__image-container">
          <a className="product__image-link" href="/">
            <img className="product__image-img" src={props.product.imageUrl} alt=""/>
          </a>
        </div>
      </div>

    <div className="product__details">
      <div className="product__details-header-container">
        <h3 className="product__details-title">{props.product.productName}</h3>
        <span className="product__details-price">{props.product.price}</span>
      </div>
      <span className="product__details-color">{props.product.color}</span>
      <div className="product__details-button-container">
        <button onClick={addToCart} className="product__details-button-btn" >Add to Cart </button>
      </div>
    </div>
    </div>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => {
      dispatch(addToCart(product))
    }
  }
}


export default connect(null, mapDispatchToProps)(Product);

