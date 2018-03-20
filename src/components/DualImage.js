import React from 'react';

const DualImage = () => (
  <section className="dual-image">
    <div className="dual-image__container dual-image__container-1">
      <img className="dual-image__img" src="../img/homepage-double-1.jpg" alt="Wear to Work" />
      <div class="dual-image__text-block">
        <h2 className="dual-image-title">Wear to Work</h2>
        <a className="btn dual-image__btn" href="#">Shop Now</a>
      </div>
    </div>
    <div className="dual-image__container dual-image__container-2">
      <img className="dual-image__img" src="../img/homepage-double-2.jpg" alt="#DamnGoodDenim" />
      <div className="dual-image__text-block">
        <h2 className="dual-image-title">#DamnGoodDenim</h2>
        <div class="dual-image__text-block__btn-group">
          <a className="btn dual-image__btn" href="#">Shop Men</a>
          <a className="btn dual-image__btn" href="#">Shop Women</a>
        </div>
      </div>
    </div>
  </section>
);

export default DualImage;
