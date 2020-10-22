import { AdminTypes } from "../types";

export const getOrdersType = (type, status) => ({
  type: AdminTypes.GET_ORDERS_REQUEST,
  payload: { type, status },
});

export const updateOrderStatus = (orderId, status, index) => ({
  type: AdminTypes.UPDATE_ORDER_STATUS_REQUEST,
  payload: { orderId, status, index },
});
