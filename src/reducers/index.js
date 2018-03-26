import { combineReducers } from 'redux';
import setPathReducer from './setPathReducer';
import fetchInitialDataReducer from './fetchInitialDataReducer';


const rootReducer = combineReducers({
  path: setPathReducer,
  initialData: fetchInitialDataReducer
});

export default rootReducer;
