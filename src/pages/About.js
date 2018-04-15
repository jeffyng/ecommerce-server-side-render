import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
    <Header />
    <div className="content">
      <div className="about">
        <div className="about-hero">
          <h1 className="about-hero__title">
            We believe we can 
          </h1>
          <h1 className="about-hero__title">
            all make a difference.
          </h1>
          <p className="about-hero__text">Our way: Exceptional quality.</p>
          <p className="about-hero__text">Ethical factories. Radical Transparency.</p>
        </div>
        <section className="about__summary">
          <div>
            <p className="about__summary-text">
            At Everjane, we want the right choice to be as easy as putting on a great T-shirt. That’s why we partner with the best, ethical factories around the world. Source only the finest materials. And share those stories with you—down to the true cost of every product we make. It’s a new way of doing things. We call it Radical Transparency.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  </div>
  )
};


export default About;
