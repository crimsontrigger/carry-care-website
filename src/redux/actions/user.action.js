import { UserTypes } from "../types";

export const addUser = (name, apartmentNumber, phoneNumber) => ({
  type: UserTypes.ADD_TO_USER,
  payload: { name, apartmentNumber, phoneNumber },
});
