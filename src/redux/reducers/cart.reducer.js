const initialState = {
  cart: [],
  items: [],
  totalAmount: 0,
  totalItems: 0,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let currentCart = state.cart;
      currentCart.push(action.payload);
      return { ...state, cart: currentCart };
    case "ADD_TO_ITEMS":
      return { ...state, items: action.payload };
    case "ADD_TOTAL":
      return {
        ...state,
        totalAmount: action.payload.amount,
        totalItems: action.payload.count,
      };
    default:
      return state;
  }
};

export default CartReducer;
