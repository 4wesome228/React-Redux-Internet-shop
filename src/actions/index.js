import {
  FETCH_PHONES_FAILURE,
  FETCH_PHONES_REQUEST,
  FETCH_PHONES_SUCCESS
} from "../actionTypes";

import { fetchPhones as fetchPhonesAPI } from "../service";

export const fetchPhones = () => async dispatch => {
  dispatch({
    type: FETCH_PHONES_REQUEST
  });

  try {
    const phones = await fetchPhonesAPI();
    dispatch({
      type: FETCH_PHONES_SUCCESS,
      payload: phones
    });
  } catch (error) {
    dispatch({
      type: FETCH_PHONES_FAILURE,
      payload: error,
      error: error
    });
  }
};
