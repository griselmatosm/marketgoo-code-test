import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
    data: dataReducer,
    error: errorReducer
  });
  
  export default rootReducer;