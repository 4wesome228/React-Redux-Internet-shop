import { prop, map, length, pluck, sum, filter, contains, values } from "ramda";
import { compose } from "redux";

export const getPhoneById = (state, id) => {
  return (state.phones && prop(id, state.phones)) || state.phonePage;
};

export const getPhones = (state, ownProps) => {
  const apllyFilter = item =>
    contains(state.phonesPage.search, prop("name", item));

  const phones = compose(
    filter(apllyFilter),
    map(id => getPhoneById(state, id))
  )(state.phonesPage.ids);

  const categoryId = ownProps.match.params.id;
  if (categoryId) {
    const applyCategoryFilter = item =>
      contains(categoryId, prop("categoryId", item));
    const phonesOfCurrentCategory = filter(applyCategoryFilter, phones);

    return phonesOfCurrentCategory;
  }

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

export const getPhonesOffset = state => {
  return state.phonesPage.ids.length;
};

export const getCategories = state => {
  return values(state.categories);
};
