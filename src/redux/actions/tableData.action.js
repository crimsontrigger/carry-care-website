import { tableDataTypes } from "../types";

export const getTableData = (type, status) => ({
  type: tableDataTypes.GET_ORDERS_REQUEST,
  payload: { type, status },
});

// export const addRow = (orderId, status, index) => ({
//   type: tableDataTypes.UPDATE_ORDER_STATUS_REQUEST,
//   payload: { data, status, index },
// });

export const addRow = (data) => ({
  type: tableDataTypes.ADD_ROW_REQUEST,
  payload: { data },
});

export const editRow = (data) => ({
  type: tableDataTypes.EDIT_ROW_REQUEST,
  payload: { data },
});

export const deleteRow = (data) => ({
  type: tableDataTypes.DELETE_ROW_REQUEST,
  payload: { data },
});
