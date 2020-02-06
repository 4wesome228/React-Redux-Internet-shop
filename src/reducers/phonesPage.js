import {
  FETCH_PHONES_SUCCESS,
  LOAD_MORE_PHONES_SUCCESS,
  SEARCH_PHONES,
  LOAD_MORE_PHONES_FAILURE,
  FETCH_PHONES_REQUEST
} from "../actionTypes";
import { pluck, merge } from "ramda";

const initialState = {
  ids: [],
  search: "",
  error: "",
  loading: true
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PHONES_REQUEST:
      return merge(state, { loading: true });
    case FETCH_PHONES_SUCCESS:
      return merge(state, { ids: pluck("id", payload), loading: false });
    case LOAD_MORE_PHONES_SUCCESS:
      const ids = pluck("id", payload);
      return merge(state, { ids: [...state.ids, ...ids] });
    case LOAD_MORE_PHONES_FAILURE:
      return merge(state, { error: payload });
    case SEARCH_PHONES:
      return merge(state, { search: payload });

    default:
      return state;
  }
};
