import { prop, map, length, pluck, sum } from "ramda";
import { compose } from "redux";

export const getPhoneById = (state, id) => prop(id, state.phones);

export const getPhones = state => {
  const phones = map(id => getPhoneById(state, id), state.phonesPage.ids);
  return phones;
};

export const getRenderedPhonesLength = state => length(state.phonesPage.ids);

export const getTotalCartPrice = state => {
  return compose(
    sum(),
    pluck("price"),
    map(id => getPhoneById(state, id))
  )(state.cart);
};

export const getTotalCartCount = state => {
  return length(state.cart);
};
