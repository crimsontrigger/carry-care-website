import { tableDataTypes } from "../types";

const initialState = {
  orders: [],
  loading: false,
  err: null,
};

const AdminReducer = (state = initialState, action) => {
  // This switch case is doodoo but its boilerplate for now
  switch (action.type) {
    case tableDataTypes.GET_TABLE_DATA_REQUEST:
      return { ...state, loading: true, err: null };
    case tableDataTypes.GET_TABLE_DATA_SUCCESS:
      return { ...state, loading: false };
    case tableDataTypes.GET_TABLE_DATA_FAILURE:
      return { ...state, loading: false, err: null };
    default:
      return state;
  }
};

export default AdminReducer;
