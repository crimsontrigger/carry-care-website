import { put, call, takeLatest, all } from "redux-saga/effects";
import { Container } from "typedi";

import { ItemTypes } from "../types";
import { ItemService } from "../../services";

export function* addNewItem(action) {
  const itemService = Container.get(ItemService);
  const { name, value, type } = action.payload;
  try {
    const res = yield call(itemService.addNewItem, { name, value, type });

    yield put({
      type: ItemTypes.ADD_ITEM_SUCCESS,
      data: res,
    });
  } catch (error) {
    console.log("Add items error ", error.response);
    yield put({ type: ItemTypes.ADD_ITEM_ERROR, error: "error" });
  }
}

export function* getItemType(action) {
  const itemService = Container.get(ItemService);
  const { type } = action.payload;
  try {
    const res = yield call(itemService.getItemType, { type });
    yield put({
      type: ItemTypes.GET_ITEM_SUCCESS,
      data: res.data,
    });
  } catch (error) {
    console.log("Get items error ", error.response);
    yield put({ type: ItemTypes.GET_ITEM_ERROR, error });
  }
}

export default function* itemSaga() {
  yield all([
    takeLatest(ItemTypes.ADD_ITEM_REQUEST, addNewItem),
    takeLatest(ItemTypes.GET_ITEM_REQUEST, getItemType),
  ]);
}
