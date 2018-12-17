import { CHANGE_SEARCH, GET_RESULTS } from "./types";

export const changeSearch = (query, location) => ({
  type: CHANGE_SEARCH,
  payload: { query, location }
});

export const updateSearchResults = results => ({
  type: GET_RESULTS,
  results
});
