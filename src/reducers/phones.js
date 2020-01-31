import { FETCH_PHONES_SUCCESS } from "../actionTypes";
import { indexBy, prop, merge } from "ramda";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      const newValues = indexBy(prop("id"), payload);
      return merge(state, newValues);
    default:
      return state;
  }
};
