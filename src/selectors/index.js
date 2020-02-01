import { prop, map, length, pluck, sum, filter, contains } from "ramda";
import { compose } from "redux";

export const getPhoneById = (state, id) => prop(id, state.phones);

export const getPhones = state => {
  const apllyFilter = item =>
    contains(state.phonesPage.search, prop("name", item));

  const phones = compose(
    filter(apllyFilter),
    map(id => getPhoneById(state, id))
  )(state.phonesPage.ids);

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
