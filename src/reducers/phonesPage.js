import { FETCH_PHONES_SUCCESS } from "../actionTypes";
import { pluck, merge } from "ramda";

const initialState = {
  ids: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      return merge(state, { ids: pluck("id", payload) });
    default:
      return state;
  }
};
