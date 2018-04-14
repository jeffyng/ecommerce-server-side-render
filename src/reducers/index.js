import { combineReducers } from 'redux';
import setPathReducer from './setPathReducer';
import fetchInitialDataReducer from './fetchInitialDataReducer';
import adjustCartReducer from './adjustCartReducer';

const rootReducer = combineReducers({
  path: setPathReducer,
  initialData: fetchInitialDataReducer,
  cart: adjustCartReducer
});

export default rootReducer;
