import { CHANGE_SEARCH, GET_RESULTS } from "../actions/types";

const initialState = {
  query: "store",
  searchResults: [],
  lat: 1.293813,
  lng: 103.853438
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SEARCH:
      return {
        ...state,
        query: action.payload.query,
        lat: action.payload.location.lat
          ? action.payload.location.lat
          : state.lat,
        lng: action.payload.location.lng
          ? action.payload.location.lng
          : state.lng
      };
    case GET_RESULTS:
      return {
        ...state,
        searchResults: action.results
      };
    default:
      return state;
  }
}
