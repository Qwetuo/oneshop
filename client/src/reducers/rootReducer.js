import { combineReducers } from 'redux';
import reviewReducer from './reviewReducer';
import searchReducer from './searchReducer';

export default combineReducers({
  reviews: reviewReducer,
  search: searchReducer
});