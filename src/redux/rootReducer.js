import { combineReducers } from 'redux';
import jobReducer from './jobReducer';
import filterReducer from './filterReducer';
// Import other reducers as needed

const rootReducer = combineReducers({
  jobs: jobReducer,
  filters: filterReducer,
  // Add other reducers here
});

export default rootReducer;