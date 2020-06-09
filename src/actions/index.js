import { FETCH_DATA } from './actionsTypes';
import axios from 'axios';

const ROOT_URL = 'https://api.covid19api.com/summary';

export const fetchDataApi = () => async (dispatch) => {
    const response = await axios.get(ROOT_URL)

    dispatch({type: FETCH_DATA, payload: response.data})
}

