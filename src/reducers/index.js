import { combineReducers } from 'redux';

import userReducer from './user.reducer';
import betReducer from './bet.reducer';

export default combineReducers({
  betReducer,
  userReducer,
});