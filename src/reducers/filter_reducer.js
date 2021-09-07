import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort_name: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort_name, filtered_products } = state;
    let tempArr = [...filtered_products];
    if (sort_name === "price-lowest") {
      tempArr = tempArr.sort((a, b) => a.price - b.price);
    }
    if (sort_name === "price-highest") {
      tempArr = tempArr.sort((a, b) => b.price - a.price);
    }
    if (sort_name === "name-a") {
      tempArr = tempArr.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort_name === "name-z") {
      tempArr = tempArr.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    return { ...state, filtered_products: tempArr };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
