import constants from '../constants';

const adjustCartReducer = (state = [], action) => {
  switch (action.type) {
    case constants.ADD_TO_CART:
      return [...state, action.payload];
    case constants.REMOVE_FROM_CART:
      return state.slice(0, action.payload).concat(state.slice(action.payload + 1));
    default:
      return state;
  }
}
export default adjustCartReducer;
