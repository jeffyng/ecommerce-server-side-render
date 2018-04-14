import constants from '../constants';

// const addToCart = (product) => {
//   return {
//     type: constants.ADD_TO_CART,
//     payload: product
//   }
// }
const adjustCart = (type, payload) => {
  return {
    type: type,
    payload: payload
  }
}

export default adjustCart;
