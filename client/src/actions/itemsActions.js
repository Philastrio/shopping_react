import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "./types";

export const getItems = () => {
  return {
    type: GET_ITEMS
  };
};
export const deleteItems = id => {
  return {
    type: DELETE_ITEM,
    payload: id
  };
};
export const addItems = item => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};
export const setItemsLoading = item => {
  return {
    type: ITEMS_LOADING,
    payload: item
  };
};
