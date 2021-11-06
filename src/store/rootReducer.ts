/* import { combineReducers } from 'redux';

import recept from './ducks/recepts/reducer';
import auth from './ducks/auth/reducer';

const rootReducer = combineReducers({
  recept,
  auth
});

export default rootReducer;
 */

import { combineReducers } from 'redux';
import { receptsReducer } from './ducks/recepts/reducer';

export const rootReducer = combineReducers({
  recepts: receptsReducer,
});