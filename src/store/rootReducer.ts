import { combineReducers } from 'redux';

import recept from './ducks/recept/reducer';
import auth from './ducks/auth/reducer';

const rootReducer = combineReducers({
  recept,
  auth
});

export default rootReducer;
