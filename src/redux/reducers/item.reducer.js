import { ItemTypes } from "../types";

const initialState = {
  items: [],
  loading: false,
  err: null,
  success: false,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ItemTypes.GET_ITEM_REQUEST:
      return { ...state, loading: true, err: null };
    case ItemTypes.GET_ITEM_SUCCESS:
      return { ...state, loading: false, items: action.data };
    case ItemTypes.GET_ITEM_ERROR:
      return { ...state, loading: false, err: action.error };
    case ItemTypes.ADD_ITEM_REQUEST:
      return { ...state, loading: true, err: null, success: false };
    case ItemTypes.ADD_ITEM_SUCCESS:
      return { ...state, loading: false, success: true };
    case ItemTypes.ADD_ITEM_ERROR:
      return { ...state, loading: false, err: action.error };
    default:
      return state;
  }
};

export default CartReducer;
