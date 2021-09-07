import { combineReducers } from 'redux';

import recept from './recept';
import auth from './auth';

const rootReducer = combineReducers({
  recept,
  auth
});

export default rootReducer;
