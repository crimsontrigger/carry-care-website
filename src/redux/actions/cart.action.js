export const addItems = (items) => ({
  type: "ADD_TO_ITEMS",
  payload: items,
});

export const addTotal = (amount, count) => ({
  type: "ADD_TOTAL",
  payload: { amount, count },
});

export const addToCart = (items) => ({
  type: "ADD_TO_CART",
  payload: items,
});