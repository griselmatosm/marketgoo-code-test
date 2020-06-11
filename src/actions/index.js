import { GET_SUCCESS } from './actionsTypes';
import { GET_ERROR } from './actionsTypes';
import axios from 'axios';

const API_URL = 'https://api.covid19api.com/summary';

const getSucces = (response) => {
  return {type: GET_SUCCESS, payload: response.data.Global}
} 

const getError = (err) => {
  return {type: GET_ERROR, payload: err.message}
}

export const fetchDataApi = () => (dispatch) => {
  axios.get(API_URL)
  .then((response) => {
    dispatch(getSucces(response))
  })
  .catch((err) =>{
    dispatch(getError(err))
  })
};
