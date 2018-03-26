import React from 'react';
import Product from './Product';

const Collections = (props) => {
  return (
    <section className="collections">
      <h2 className="collections__header">{props.collectionName}</h2>
      <div className="collections__container">
        {props.products.map((product) => {
          return (
            <Product product={product} key={product.productId}/>
          )
        })}
      </div>
    </section>
  )
};

export default Collections;
