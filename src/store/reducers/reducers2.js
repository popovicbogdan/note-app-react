import { ADD_NOTE, ADD_ITEM, SHOW_FORM, SHOW_ITEM } from "../actions/actions";

// const initState = {
//   showForm: true,
//   items: [
//     { id: "1", title: "Laws of human nature", notes: ["blabla", "blaasdw"] },
//     { id: "2", title: "Principles", notes: ["blabla", "blaasdw"] },
//     { id: "3", title: "12 rules for life", notes: ["blabla", "blaasdw"] }
//   ]
// };

export default function notesApp(state = {}, action) {
  console.log("NOTESAPP REDUCERS STATE", state);
  return state;
}
//   switch (action.type) {
//     case ADD_NOTE:
//       console.log("ADDNOTE STATE", state);
//       let item = state.find(elem => {
//         console.log(elem);
//         console.log(action.id);

//         return elem.id == action.id;
//       });
//       item.notes.concat(action.payload);
//       console.log("ITEM", item);
//       return state.map(elem => {
//         if (elem == item) {
//           return { ...item, notes: [...item.notes, action.payload] };
//         } else {
//           return elem;
//         }
//       });

//     case ADD_ITEM:
//       console.log("reducers state", state);
//       return [...state, action.payload];

//     default:
//       return state;
//   }
// }
// export function toggleForm(state = {}, action) {
//   console.log("TOGGLEFORM REDUCER STATE", state);
//   switch (action.type) {
//     case SHOW_ITEM:
//       console.log("ACTION.PAYLOAD", action.payload);
//       return {
//         ...state,
//         showForm: false,
//         item: action.payload
//       };
//     case SHOW_FORM:
//       return true;

//     default:
//       return state;
//   }
// }
