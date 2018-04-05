import constants from '../constants';

const addToCartReducer = (state = [], action) => {
  switch (action.type) {
    case constants.ADD_TO_CART:
      return [...state, action.payload]
    default:
      return state;
  }
}

export default addToCartReducer;
