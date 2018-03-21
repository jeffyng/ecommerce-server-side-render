import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import Men from '../pages/Men';

export default () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/men" component={Men} />
  </div>
);

