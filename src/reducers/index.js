import { combineReducers } from 'redux';
import setPathReducer from './setPathReducer';

const rootReducer = combineReducers({
  path: setPathReducer
});

export default rootReducer;
