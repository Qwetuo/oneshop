import { FETCH_STORE_REVIEWS } from './types';

export const fetchStoreReviews = storeRef => async dispatch => {
  const response = await fetch(`/api/review/all/${storeRef}`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });

  if (response.ok) {
    const storeReviews = await response.json();

    dispatch({
      type: FETCH_STORE_REVIEWS,
      payload: storeReviews
    })
  }
};