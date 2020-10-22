import { put, call, takeLatest, all } from "redux-saga/effects";
import { Container } from "typedi";

import { OrderTypes, UserTypes } from "../types";
import { OrderService } from "../../services";

export function* addNewOrder(action) {
  const orderService = Container.get(OrderService);
  const {
    items,
    totalAmount,
    totalItems,
    name,
    apartmentNumber,
    phoneNumber,
    type,
  } = action.payload;
  try {
    const res = yield call(orderService.addNewOrder, {
      items,
      totalAmount,
      totalItems,
      name,
      apartmentNumber,
      phoneNumber,
      type,
    });

    yield put({
      type: OrderTypes.ADD_ORDER_SUCCESS,
      data: res.data,
    });
    yield put({
      type: "ADD_TO_CART",
      payload: {},
    });
    yield put({
      type: "ADD_TOTAL",
      payload: { amount: 0, count: 0 },
    });
    yield put({
      type: UserTypes.ADD_TO_USER,
      payload: { name, apartmentNumber, phoneNumber },
    });
  } catch (error) {
    console.log("Add items error ", error.response);
    yield put({ type: OrderTypes.ADD_ORDER_ERROR, error });
  }
}

export function* addNewOrderCapture(action) {
  const orderService = Container.get(OrderService);
  const { name, apartmentNumber, phoneNumber } = action.payload;
  try {
    yield put({
      type: OrderTypes.ADD_ORDER_SUCCESS,
      data: action.payload,
    });
    yield put({
      type: "ADD_TO_CART",
      payload: {},
    });
    yield put({
      type: "ADD_TOTAL",
      payload: { amount: 0, count: 0 },
    });
    yield put({
      type: UserTypes.ADD_TO_USER,
      payload: { name, apartmentNumber, phoneNumber },
    });
  } catch (error) {
    console.log("Add items error ", error.response);
    yield put({ type: OrderTypes.ADD_ORDER_ERROR, error });
  }
}

export default function* orderSaga() {
  yield all([
    takeLatest(OrderTypes.ADD_ORDER_REQUEST, addNewOrder),
    takeLatest(OrderTypes.ADD_ORDER_CAPTURE_REQUEST, addNewOrderCapture),
  ]);
}
