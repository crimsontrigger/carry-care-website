import { combineReducers, Reducer } from "redux";

import CartReducer from "./cart.reducer";
import UserReducer from "./user.reducer";
import OrderReducer from "./order.reducer";
import ItemReducer from "./item.reducer";
import AdminReducer from "./admin.reducer";

const allReducers = {
  cart: CartReducer,
  user: UserReducer,
  order: OrderReducer,
  item: ItemReducer,
  admin: AdminReducer,
};

const rootReducer = combineReducers({ ...allReducers });

export default rootReducer;
