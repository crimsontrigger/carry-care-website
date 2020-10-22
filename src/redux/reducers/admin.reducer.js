import { AdminTypes } from "../types";

const initialState = {
  orders: [],
  loading: false,
  err: null,
};

const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case AdminTypes.GET_ORDERS_REQUEST:
      return { ...state, loading: true, err: null };
    case AdminTypes.GET_ORDERS_SUCCESS:
      return { ...state, orders: action.data, loading: false };
    case AdminTypes.GET_ORDERS_ERROR:
      return { ...state, loading: false, err: null };
    case AdminTypes.UPDATE_ORDER_STATUS_SUCCESS:
      let currOrders = state.orders;
      currOrders.splice(action.index, 1);
      return { ...state, orders: currOrders, loading: false };
    case AdminTypes.GET_ORDERS_ERROR:
      return { ...state, loading: false, err: null };
    default:
      return state;
  }
};

export default AdminReducer;
