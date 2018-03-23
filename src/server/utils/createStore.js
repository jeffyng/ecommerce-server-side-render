import { createStore, combineReducers } from 'redux';
import rootReducer from '../../reducers';
import { setPath } from '../../actions';


export default (path) => {
  const store = createStore(rootReducer);
  store.dispatch(setPath(path))
  return store;
}
