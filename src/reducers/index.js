import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import phones from "./phones";
import phonesPage from "./phonesPage";
import phonePage from "./phonePage";
import cart from "./cart";

export default history =>
  combineReducers({
    phones,
    phonesPage,
    phonePage,
    cart,
    router: connectRouter(history)
  });
