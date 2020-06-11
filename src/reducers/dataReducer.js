export const GET_SUCCESS = 'GET_SUCCESS';

export default (state = null, action) => {
  switch (action.type) {
    case GET_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};
