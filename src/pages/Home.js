import React from 'react';
import Header from '../components/Header';
import Slides from '../components/Slides';
import DualImage from '../components/DualImage';
import TripleImage from '../components/TripleImage';

const Home = () => (
  <div>
    <Header />
      <div className="content">
      <Slides />
      <DualImage />
      <TripleImage />
    </div>
  </div>
)

export default Home;