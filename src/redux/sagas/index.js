import { all, fork } from "redux-saga/effects";

// Sagas
// import authSaga from "./auth.saga";

// Connect types to sagas
export const rootSaga = function* root() {
  yield all([
    // fork(authSaga),
    // fork(hashSaga), for a new saga
  ]);
};
