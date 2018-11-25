import { FETCH_STORE_REVIEWS } from '../actions/types';

const initialState = {
  reviews: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_STORE_REVIEWS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}