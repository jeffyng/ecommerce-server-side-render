import { createStore, combineReducers } from 'redux';
import rootReducer from '../../reducers';
import { setPath, fetchInitialData } from '../../actions';


export default (path) => {
  const store = createStore(rootReducer);
  store.dispatch(setPath({path: path}))
  store.dispatch(fetchInitialData());
  return store;
}
