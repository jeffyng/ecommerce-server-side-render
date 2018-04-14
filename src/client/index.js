import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../routes/Routes';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';
import { renderRoutes } from 'react-router-config';

// Combine store from server and window.localStorage (cart)
const localStorage = JSON.parse(window.localStorage.getItem('cart')) || [];
window.INITIAL_STATE.cart = [...window.INITIAL_STATE.cart, ...localStorage];

const store = createStore(rootReducer, window.INITIAL_STATE);

const saveReduxStateToLocalStorage = () => {
  const reduxCart = store.getState().cart;
  window.localStorage.setItem('cart', JSON.stringify(reduxCart));
}
// Save redux store to window.localStorage on each dispatch;
store.subscribe(saveReduxStateToLocalStorage);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
  );

