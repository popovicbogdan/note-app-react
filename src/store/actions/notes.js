import {
  ADD_NOTE,
  ADD_TITLE,
  ADD_ITEM,
  SHOW_FORM,
  SHOW_ITEM,
  DELETE_ITEM,
  DELETE_NOTE,
  SEARCH
} from "./actions";

export const addNote = (id, text) => {
  return {
    type: ADD_NOTE,
    id,
    payload: text
  };
};
export const addTitle = text => {
  return {
    type: ADD_TITLE,
    payload: text
  };
};
export const addItem = item => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};
export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    payload: id
  };
};
export const deleteNote = (id, index) => {
  return {
    type: DELETE_NOTE,
    id,
    payload: index
  };
};
export const showForm = () => {
  return {
    type: SHOW_FORM
  };
};
export const showItem = item => {
  return {
    type: SHOW_ITEM,
    payload: item
  };
};
export const searchFor = text => {
  console.log("SEARCH");

  return {
    type: SEARCH,
    payload: text
  };
};
