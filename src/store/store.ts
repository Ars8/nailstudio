import { createStore } from 'redux';
import rootReducer from './rootReducer';

export interface RootState {
    
}

const store = createStore(rootReducer);

export default store;
