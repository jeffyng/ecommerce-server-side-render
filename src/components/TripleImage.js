import React from 'react';

const TripleImage = () => (
  <section className="triple-image">
    <div className="triple-image__container triple-image__container-1">
      <h3 className="triple-image__title">The Kick Crop</h3>
      <img className="triple-image__img" src="../img/homepage-triple-1.jpg" alt="The Kick Crop"/>
    </div>
    <div className="triple-image__container triple-image__container-2">
      <h3 className="triple-image__title">New Day Heels</h3>
      <img className="triple-image__img" src="../img/homepage-triple-2.jpg" alt="New Day Heels"/>
    </div>
    <div className="triple-image__container triple-image__container-3">
      <h3 className="triple-image__title">Back in Stock</h3>
      <img className="triple-image__img" src="../img/homepage-triple-3.jpg" alt="Back in Stock"/>
    </div>
  </section>
);

export default TripleImage;
