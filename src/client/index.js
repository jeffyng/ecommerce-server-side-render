import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../routes/Routes';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';
import { renderRoutes } from 'react-router-config';

const store = createStore(rootReducer, window.INITIAL_STATE);
delete window.INITIAL_STATE;

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
  );

