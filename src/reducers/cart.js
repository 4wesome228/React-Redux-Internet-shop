import { ADD_PHONE_TO_CART } from "../actionTypes";
import { append } from "ramda";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PHONE_TO_CART:
      return append(payload, state);
    default:
      return state;
  }
};
