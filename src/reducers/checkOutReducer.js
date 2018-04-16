import constants from '../constants';

const checkOutReducer = (state = false, action) => {
  switch (action.type) {
    case constants.CHECK_OU:
      return true;
    default:
      return state;
  }
};

export default checkOutReducer;
