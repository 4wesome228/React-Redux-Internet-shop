import {
  FETCH_PHONES_FAILURE,
  FETCH_PHONES_REQUEST,
  FETCH_PHONES_SUCCESS,
  LOAD_MORE_PHONES_REQUEST,
  LOAD_MORE_PHONES_SUCCESS,
  LOAD_MORE_PHONES_FAILURE
} from "../actionTypes";

import { fetchPhones as fetchPhonesAPI } from "../service";
import { loadMorePhones as loadMorePhonesAPI } from "../service";
//import { getRenderedPhonesLength } from "../selectors";

const fetchPhonesData = async (types, fetchFromAPI, dispatch) => {
  const [request, success, failure] = types;
  dispatch({
    type: request
  });

  try {
    const phones = await fetchFromAPI();
    dispatch({
      type: success,
      payload: phones
    });
  } catch (error) {
    dispatch({
      type: failure,
      payload: error,
      error: error
    });
  }
};

export const fetchPhones = () => async dispatch => {
  fetchPhonesData(
    [FETCH_PHONES_REQUEST, FETCH_PHONES_SUCCESS, FETCH_PHONES_FAILURE],
    fetchPhonesAPI,
    dispatch
  );
};

export const loadMorePhones = () => async (dispatch, getState) => {
  //const offset = getRenderedPhonesLength(getState());
  fetchPhonesData(
    [
      LOAD_MORE_PHONES_REQUEST,
      LOAD_MORE_PHONES_SUCCESS,
      LOAD_MORE_PHONES_FAILURE
    ],
    loadMorePhonesAPI,
    dispatch
  );
};
