import { createStore } from "redux";
import rootReducer from "./reducers/notes";

const initState = {
  showForm: true,
  items: [
    { id: "1", title: "Laws of human nature", notes: ["blabla", "blaasdw"] },
    { id: "2", title: "Principles", notes: ["blabla", "blaasdw"] },
    { id: "3", title: "12 rules for life", notes: ["blabla", "blaasdw"] }
  ],
  toSearch: null
};

const store = createStore(
  rootReducer,
  initState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
