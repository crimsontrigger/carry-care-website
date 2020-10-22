import { OrderTypes } from "../types";

const initialState = {
  orders: [],
  loading: false,
  err: null,
  recentOrder: {},
  success: false,
};

const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case OrderTypes.ADD_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        err: null,
        success: false,
      };
    case OrderTypes.ADD_ORDER_SUCCESS:
      let currOrders = state.orders;
      currOrders.splice(0, 0, action.data);
      return {
        ...state,
        loading: false,
        orders: currOrders,
        recentOrder: action.data,
        success: true,
      };
    case OrderTypes.ADD_ORDER_ERROR:
      return {
        ...state,
        loading: false,
        err: action.error,
        success: false,
      };

    default:
      return state;
  }
};

export default OrderReducer;
