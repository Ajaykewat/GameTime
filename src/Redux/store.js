import { createStore, combineReducers} from 'redux';
import SpinnerReducer from './Reducers/SpinnerReducer';

const rootReducer = combineReducers({
  count: SpinnerReducer,
});
 
export const store = createStore(rootReducer);