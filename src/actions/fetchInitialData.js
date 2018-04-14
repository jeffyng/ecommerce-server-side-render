import constants from '../constants';
//TODO need to remove sample data when database is set up
import sampleData from '../sampleData';

const fetchInitialData = () => {
  // initial data will be asyncrhonous later
  // sample data;

const data = sampleData;

  return {
    type: constants.FETCH_INITIAL_DATA,
    payload: data
  }
}

export default fetchInitialData;

