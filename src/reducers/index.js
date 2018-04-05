import { combineReducers } from 'redux';
import setPathReducer from './setPathReducer';
import fetchInitialDataReducer from './fetchInitialDataReducer';
import addToCartReducer from './addToCartReducer';


const rootReducer = combineReducers({
  path: setPathReducer,
  initialData: fetchInitialDataReducer,
  cart: addToCartReducer
});

export default rootReducer;
