import { combineReducers } from 'redux';
import setPathReducer from './setPathReducer';
import fetchInitialDataReducer from './fetchInitialDataReducer';
import adjustCartReducer from './adjustCartReducer';
import checkOutReducer from './checkOutReducer';

const rootReducer = combineReducers({
  path: setPathReducer,
  initialData: fetchInitialDataReducer,
  cart: adjustCartReducer,
  checkOut: checkOutReducer
});

export default rootReducer;
