import { FETCH_PHONES_SUCCESS, LOAD_MORE_PHONES_SUCCESS } from "../actionTypes";
import { pluck, merge } from "ramda";

const initialState = {
  ids: []
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
    default:
      return state;
  }
};
