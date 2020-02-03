import { FETCH_PHONES_SUCCESS, LOAD_MORE_PHONES_SUCCESS } from "../actionTypes";
import { indexBy, prop, merge } from "ramda";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      //creates new object with key id, value equals payload's item
      const newValues = indexBy(prop("id"), payload);
      return merge(state, newValues);
    case LOAD_MORE_PHONES_SUCCESS:
      const moreValues = indexBy(prop("id"), payload);
      return merge(state, moreValues);

    default:
      return state;
  }
};
