import { UserTypes } from "../types";

const initialState = {
  name: "",
  apartmentNumber: "",
  phoneNumber: "",
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserTypes.ADD_TO_USER:
      return {
        ...state,
        name: action.payload.name,
        apartmentNumber: action.payload.apartmentNumber,
        phoneNumber: action.payload.phoneNumber,
      };

    default:
      return state;
  }
};

export default UserReducer;
