import { FETCH_STORE_REVIEWS, CREATE_STORE_REVIEW } from "./types";

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

export const createStoreReview = (storeRef, body)=> async dispatch => {
  const response = await fetch(`/api/review/create/${storeRef}`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      for: storeRef,
      rating: body.rating,
      review: body.review,
      image: body.image
    })
  });

  if (response.ok) {
    const responseJSON = await response.json();
    const payload = responseJSON.payload;

    dispatch({
      type: CREATE_STORE_REVIEW,
      payload
    });
  }
};
