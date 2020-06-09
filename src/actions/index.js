import { FETCH_DATA } from './actionsTypes';
import axios from 'axios';

const API_URL = 'https://api.covid19api.com/summary';

export const fetchDataApi = () => async (dispatch) => {
  const response = await axios.get(API_URL);
  let err;
  if (response.status !== 200) throw err = Error('Error: Too Many Requests');

  dispatch({ type: FETCH_DATA, payload: response.data.Global || err });
};
