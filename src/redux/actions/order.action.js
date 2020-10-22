import { OrderTypes } from "../types";

export const addNewOrder = (
  items,
  totalAmount,
  totalItems,
  name,
  apartmentNumber,
  phoneNumber,
  type
) => ({
  type: OrderTypes.ADD_ORDER_REQUEST,
  payload: {
    items,
    totalAmount,
    totalItems,
    name,
    apartmentNumber,
    phoneNumber,
    type,
  },
});

export const addNewOrderSuccess = (data) => ({
  type: OrderTypes.ADD_ORDER_CAPTURE_REQUEST,
  payload: data,
});
