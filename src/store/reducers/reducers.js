import {
  ADD_NOTE,
  ADD_ITEM,
  SHOW_FORM,
  SHOW_ITEM,
  DELETE_ITEM,
  DELETE_NOTE,
  SEARCH
} from "../actions/actions";

// const initState = {
//   showForm: true,
//   items: [
//     { id: "1", title: "Laws of human nature", notes: ["blabla", "blaasdw"] },
//     { id: "2", title: "Principles", notes: ["blabla", "blaasdw"] },
//     { id: "3", title: "12 rules for life", notes: ["blabla", "blaasdw"] }
//   ]
// };

export default function notesApp(state = {}, action) {
  switch (action.type) {
    case ADD_NOTE:
      let item = state.find(elem => {
        return elem.id === action.id;
      });
      return state.map(elem => {
        if (elem === item) {
          return { ...item, notes: [...item.notes, action.payload] };
        } else {
          return elem;
        }
      });

    case ADD_ITEM:
      return [...state, action.payload];

    case DELETE_ITEM:
      return [...state.filter(elem => elem.id !== action.payload)];

    case DELETE_NOTE:
      let delItem = state.find(elem => {
        return elem.id === action.id;
      });
      let notes = delItem.notes.filter(
        elem => delItem.notes.indexOf(elem) !== action.payload
      );

      return state.map(elem => {
        if (elem === delItem) {
          return {
            ...delItem,
            notes: [...notes]
          };
        } else {
          return elem;
        }
      });

    default:
      return state;
  }
}
export function toggleForm(state = {}, action) {
  switch (action.type) {
    case SHOW_ITEM:
      return {
        ...state,
        showForm: false,
        item: action.payload
      };

    case SHOW_FORM:
      return true;

    case DELETE_ITEM:
      return true;

    default:
      return state;
  }
}
export function toSearch(state = {}, action) {
  if (action.type === SEARCH) {
    return action.payload;
  } else {
    return state;
  }
}
