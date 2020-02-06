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
  SEARCH_PHONES,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE
} from "../actionTypes";

import {
  fetchPhones as fetchPhonesAPI,
  loadMorePhones as loadMorePhonesAPI,
  fetchPhoneById as fetchPhoneByIdAPI,
  fetchCategories as fetchCategoriesAPI
} from "../service";
import { getRenderedPhonesLength } from "../selectors";

//import { getRenderedPhonesLength } from "../selectors";

const fetchPhonesData = async (types, fetchFromAPI, dispatch, offset) => {
  const [request, success, failure] = types;
  dispatch({
    type: request
  });

  try {
    const phones = await fetchFromAPI(offset);
    dispatch({
      type: success,
      payload: phones
    });
  } catch (error) {
    dispatch({
      type: failure,
      payload: error
    });
  }
};

export const fetchPhones = offset => async dispatch => {
  fetchPhonesData(
    [FETCH_PHONES_REQUEST, FETCH_PHONES_SUCCESS, FETCH_PHONES_FAILURE],
    fetchPhonesAPI,
    dispatch,
    offset
  );
};

export const loadMorePhones = () => async (dispatch, getState) => {
  const offset = getRenderedPhonesLength(getState());

  dispatch({
    type: LOAD_MORE_PHONES_REQUEST
  });

  try {
    const phones = await loadMorePhonesAPI(offset);
    dispatch({
      type: LOAD_MORE_PHONES_SUCCESS,
      payload: phones
    });
  } catch (error) {
    dispatch({
      type: LOAD_MORE_PHONES_FAILURE,
      payload: error
    });
  }
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
    payload: value.toLowerCase()
  };
};

export const fetchCategories = () => async dispatch => {
  dispatch({
    type: FETCH_CATEGORIES_REQUEST
  });

  try {
    const categories = await fetchCategoriesAPI();
    dispatch({
      type: FETCH_CATEGORIES_SUCCESS,
      payload: categories
    });
  } catch (error) {
    dispatch({
      type: FETCH_CATEGORIES_FAILURE,
      payload: error
    });
  }
};
