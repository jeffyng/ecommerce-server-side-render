import React from 'react';

const TripleImage = () => (
  <section className="triple-image">
    <div className="triple-image__container triple-image__container-1">
      <a href="#" className="">
        <div className="triple-image__container__text-block">
          <h3 className="triple-image__container__text-block-title">The Kick Crop</h3>
          <span className="triple-image__container__text-block-text">Shop Now</span>
        </div>
        <img className="triple-image__img" src="../img/homepage-triple-1.jpg" alt="The Kick Crop"/>
      </a>
    </div>
    <div className="triple-image__container triple-image__container-2">
      <a href="#">
        <div className="triple-image__container__text-block">
          <h3 className="triple-image__container__text-block-title">New Day Heels</h3>
          <span className="triple-image__container__text-block-text">Shop Now</span>
        </div>  
        <img className="triple-image__img" src="../img/homepage-triple-2.jpg" alt="New Day Heels"/> 
      </a>
    </div>
    <div className="triple-image__container triple-image__container-3">
      <a href="#">
        <div className="triple-image__container__text-block">
          <h3 className="triple-image__container__text-block-title">Back in Stock</h3>
          <span className="triple-image__container__text-block-text">Shop Now</span>
        </div>
        <img className="triple-image__img" src="../img/homepage-triple-3.jpg" alt="Back in Stock"/>
      </a>
    </div>
  </section>
);

export default TripleImage;
