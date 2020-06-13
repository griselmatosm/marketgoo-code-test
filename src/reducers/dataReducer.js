import { GET_SUCCESS } from '../actions/actionsTypes';

export default (state = null, action) => {
  switch (action.type) {
    case GET_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};
