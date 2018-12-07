import { FETCH_STORE_REVIEWS, CREATE_STORE_REVIEW } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_STORE_REVIEWS:
      return {
        ...state,
        items: action.payload
      };
      case CREATE_STORE_REVIEW:
      return {
        ...state,
        item: action.payload
      }
    default:
      return state;
  }
}