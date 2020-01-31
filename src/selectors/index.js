import { prop, map, length } from "ramda";

export const getPhoneById = (state, id) => prop(id, state.phones);

export const getPhones = state => {
  console.log(getPhoneById(state, 2));
  const phones = map(id => getPhoneById(state, id), state.phonesPage.ids);
  return phones;
};

export const getRenderedPhonesLength = state => length(state.phonesPage.ids);
