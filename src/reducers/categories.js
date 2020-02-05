import { FETCH_CATEGORIES_SUCCESS } from "../actionTypes";
import { indexBy, prop, merge } from "ramda";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CATEGORIES_SUCCESS:
      const categories = indexBy(prop("id"), payload);
      return merge(state, categories);

    default:
      return state;
  }
};
