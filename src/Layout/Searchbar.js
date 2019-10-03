import React from "react";
import Search from "./Search";
import { connect } from "react-redux";
import { showForm } from "../store/actions/notes";

const Searchbar = props => {
  return (
    <div id="left" className="col s9 m5 ">
      <nav className="nav-wrapper z-depth-0">
        <ul id="nav-left">
          <li id="search-nav">
            <Search />
          </li>
          <li id="add-nav">
            <button className="hoverable" onClick={props.showForm}>
              <i id="plus" className="material-icons">
                add
              </i>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    showForm: () => dispatch(showForm())
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Searchbar);
