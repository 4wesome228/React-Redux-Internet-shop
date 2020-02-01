import {
  FETCH_PHONES_SUCCESS,
  LOAD_MORE_PHONES_SUCCESS,
  SEARCH_PHONES
} from "../actionTypes";
import { pluck, merge } from "ramda";

const initialState = {
  ids: [],
  search: ""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      return merge(state, { ids: pluck("id", payload) });
    case LOAD_MORE_PHONES_SUCCESS:
      const ids = pluck("id", payload);

      return {
        ids: [...state.ids, ...ids]
      };

    case SEARCH_PHONES:
      return {
        ...state,
        search: payload
      };

    default:
      return state;
  }
};
