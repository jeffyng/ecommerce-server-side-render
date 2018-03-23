import constants from '../constants';


const setPathReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.SET_PATH:
      return {...state, ...{path: action.payload}};
    default:
      return state;  
  }
}

export default setPathReducer;


