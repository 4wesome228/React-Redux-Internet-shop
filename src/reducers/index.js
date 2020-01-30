import { combineReducers } from "redux";
import phones from "./phones";

import { connectRouter } from "connected-react-router";

export default history =>
  combineReducers({
    phones,
    router: connectRouter(history)
  });
