import React from 'react';

const Slides = () => (
  <section className="slides">
    <ul className="slides__container">
      <li className="slides__item slides__item-1">
        <h1 className="slides__item-title">Silk gets casual.</h1>
        <a className="btn slides__btn" href="#">Shop Now</a>
      </li>
      <li className="slides__item slides__item-2">
        <h1 className="slides__item-title grey-text">The $50 Button-Down</h1>
        <a className="btn slides__btn" href="#">Shop Now</a>
      </li>
      <li className="slides__item slides__item-3">
        <h1 className="slides__item-title">The Modern Utility Jacket</h1>
        <a className="btn slides__btn" href="#">Shop Now</a>
      </li>
      <li className="slides__item slides__item-4">
        <h1 className="slides__item-title">Box Cutter</h1>
        <a className="btn slides__btn" href="#">Shop Now</a>
      </li>
      <li className="slides__item slides__item-5">
        <h1 className="slides__item-title grey-text">A Cooler Tee</h1>
        <a className="btn slides__btn" href="#">Shop Now</a>
      </li>
    </ul>
  </section>
);

export default Slides;
