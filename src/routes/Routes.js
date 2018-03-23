import React from 'react';
import Home from '../pages/Home';
import Products from '../pages/Products';
// import { Route } from 'react-router-dom';

// export default () => (
//   <div>
//     <Route exact path="/" component={Home} />
//     <Route path="/men" component={Products} />
//     <Route path="/women" component={Products} />
//   </div>
// );

export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/men',
    component: Products
  },
  {
    path: '/women',
    component: Products
  }
];