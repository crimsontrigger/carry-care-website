import { combineReducers, Reducer } from "redux";

import CartReducer from "./cart.reducer";

const allReducers = {
  cart: CartReducer,
};

const rootReducer = combineReducers({ ...allReducers });

export default rootReducer;
