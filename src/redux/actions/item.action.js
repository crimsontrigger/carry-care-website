import { ItemTypes } from "../types";

export const addNewItem = (name, value, type) => ({
  type: ItemTypes.ADD_ITEM_REQUEST,
  payload: { name, value, type },
});

export const getItemType = (type) => ({
  type: ItemTypes.GET_ITEM_REQUEST,
  payload: { type },
});
