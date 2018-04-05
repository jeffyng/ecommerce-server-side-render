import constants from '../constants';

const addToCart = (product) => {
  return {
    type: constants.ADD_TO_CART,
    payload: product
  }
}

export default addToCart;
