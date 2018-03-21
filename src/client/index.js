import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../routes/Routes';
//import Home from '../pages/Home';

ReactDOM.hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>, 
  document.getElementById('root')
  );