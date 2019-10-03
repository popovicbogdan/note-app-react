import React from "react";

import { connect } from "react-redux";
import { searchFor } from "../store/actions/notes";

const Search = props => {
  const handleChange = e => {
    props.searchFor(e.target.value);
  };
  return (
    <nav className="nav-wrapper z-depth-0">
      <form>
        <div className="input-field">
          <input
            onChange={handleChange}
            id="search"
            placeholder="Search"
            type="search"
            required
          />
          <label className="label-icon">
            <i className="material-icons">search</i>
          </label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </nav>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    searchFor: text => dispatch(searchFor(text))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Search);
