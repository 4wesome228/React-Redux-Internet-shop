import { FETCH_PHONE_BY_ID_SUCCESS } from "../actionTypes";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PHONE_BY_ID_SUCCESS:
      return payload;
    default:
      return state;
  }
};
