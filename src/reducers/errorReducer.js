export const GET_ERROR = 'GET_ERROR';

export default (state = null, action) => {
    switch (action.type) {
      case GET_ERROR:
        return action.payload;
  
      default:
        return state;
    }
  };