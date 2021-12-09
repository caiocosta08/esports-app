import { combineReducers } from 'redux';

import userReducer from './user.reducer';
import betReducer from './bet.reducer';
import gameReducer from './game.reducer';

export default combineReducers({
  betReducer,
  userReducer,
  gameReducer,
});