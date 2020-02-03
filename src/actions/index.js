import {
  FETCH_PHONES_FAILURE,
  FETCH_PHONES_REQUEST,
  FETCH_PHONES_SUCCESS,
  LOAD_MORE_PHONES_REQUEST,
  LOAD_MORE_PHONES_SUCCESS,
  LOAD_MORE_PHONES_FAILURE,
  FETCH_PHONE_BY_ID_REQUEST,
  FETCH_PHONE_BY_ID_FAILURE,
  FETCH_PHONE_BY_ID_SUCCESS,
  ADD_PHONE_TO_CART,
  SEARCH_PHONES
} from "../actionTypes";

import {
  fetchPhones as fetchPhonesAPI,
  loadMorePhones as loadMorePhonesAPI,
  fetchPhoneById as fetchPhoneByIdAPI
} from "../service";

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
      error: true
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

export const fetchPhoneById = id => async dispatch => {
  dispatch({
    type: FETCH_PHONE_BY_ID_REQUEST
  });

  try {
    const phone = await fetchPhoneByIdAPI(id);

    dispatch({
      type: FETCH_PHONE_BY_ID_SUCCESS,
      payload: phone
    });
  } catch (error) {
    dispatch({
      type: FETCH_PHONE_BY_ID_FAILURE,
      payload: error,
      error: true
    });
  }
};

export const addPhoneToCart = id => {
  return {
    type: ADD_PHONE_TO_CART,
    payload: id
  };
};

export const searchPhones = value => {
  return {
    type: SEARCH_PHONES,
    payload: value
  };
};
