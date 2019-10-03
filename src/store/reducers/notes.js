import { combineReducers } from "redux";
import notesApp from "./reducers";
import { toggleForm, toSearch } from "./reducers";

const rootReducer = combineReducers({
  items: notesApp,
  showForm: toggleForm,
  toSearch: toSearch
});
export default rootReducer;
