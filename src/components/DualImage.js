import React from 'react';

const DualImage = () => (
  <section className="dual-image">
    <div className="dual-image__container dual-image__container-1">
      <h2 className="dual-image-title">Wear to Work</h2>
      <img className="dual-image__img" src="../img/homepage-double-1.jpg" alt="Wear to Work" />
    </div>
    <div className="dual-image__container dual-image__container-2">
      <h2 className="dual-image-title">#DamnGoodDenim</h2>
      <img className="dual-image__img" src="../img/homepage-double-2.jpg" alt="#DamnGoodDenim" />
    </div>
  </section>
);

export default DualImage;
