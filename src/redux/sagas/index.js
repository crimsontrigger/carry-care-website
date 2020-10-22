import { all, fork } from "redux-saga/effects";

// Sagas
// import authSaga from "./auth.saga";
import itemSaga from "./item.saga";
import orderSaga from "./order.saga";
import adminSaga from "./admin.saga";

// Connect types to sagas
export const rootSaga = function* root() {
  yield all([fork(itemSaga), fork(orderSaga), fork(adminSaga)]);
};
