import constants from '../constants';


export const setPath = (path) => {
  return {
    type: constants.SET_PATH,
    payload: path
  }
};


