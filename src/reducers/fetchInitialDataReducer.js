import constants from '../constants';

const fetchInitialDataReducer = (state = {}, action) => {
  switch(action.type) {
    case constants.FETCH_INITIAL_DATA:
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default fetchInitialDataReducer;