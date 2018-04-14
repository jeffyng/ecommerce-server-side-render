import constants from '../constants';

 const setPath = (path) => {
  return {
    type: constants.SET_PATH,
    payload: path
  }
};

export default setPath;


