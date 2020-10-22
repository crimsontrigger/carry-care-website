import { put, call, takeLatest, all } from "redux-saga/effects";
import { Container } from "typedi";

import { AdminTypes } from "../types";
import { AdminService } from "../../services";

export function* getOrdersType(action) {
  const adminService = Container.get(AdminService);
  const { type, status } = action.payload;
  try {
    const res = yield call(adminService.getOrdersType, {
      type,
      status,
    });

    yield put({
      type: AdminTypes.GET_ORDERS_SUCCESS,
      data: res.data,
    });
  } catch (error) {
    console.log("Add items error ", error.response);
    yield put({ type: AdminTypes.GET_ORDERS_ERROR, error });
  }
}

export function* updateOrderStatus(action) {
  const adminService = Container.get(AdminService);
  const { orderId, status, index } = action.payload;
  try {
    const res = yield call(adminService.updateOrderStatus, {
      orderId,
      status,
    });

    yield put({
      type: AdminTypes.UPDATE_ORDER_STATUS_SUCCESS,
      data: res.data,
      index,
    });
  } catch (error) {
    console.log("update order status error  ", error.response);
    yield put({ type: AdminTypes.UPDATE_ORDER_STATUS_ERROR, error });
  }
}

export default function* adminSaga() {
  yield all([
    takeLatest(AdminTypes.GET_ORDERS_REQUEST, getOrdersType),
    takeLatest(AdminTypes.UPDATE_ORDER_STATUS_REQUEST, updateOrderStatus),
  ]);
}
