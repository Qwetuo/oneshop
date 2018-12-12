import { CHANGE_SEARCH, GET_RESULTS } from "./types";

export const changeSearch = query => ({
  type: CHANGE_SEARCH,
  query
})

export const updateSearchResults = results => ({
  type: GET_RESULTS,
  results
})
