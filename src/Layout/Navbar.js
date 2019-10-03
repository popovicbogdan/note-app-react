import React from "react";
import { connect } from "react-redux";
import { deleteItem } from "../store/actions/notes";
import Dropdown from "./Dropdown";

const Navbar = props => {
  return (
    <div id="right" className="col s3 m7">
      <nav className="z-depth-0">
        <ul className="nav-wrapper">
          <li id="nav-right" className="hide-on-small-and-down ">
            <button className="hoverable">
              <i className="material-icons ">access_time</i>
            </button>
          </li>
          <li id="nav-right" className="hide-on-small-and-down ">
            <button
              onClick={() => props.deleteItem(props.id)}
              className="hoverable"
            >
              <i className="material-icons ">delete</i>
            </button>
          </li>
          <Dropdown id={props.id} />
        </ul>
      </nav>
    </div>
  );
};
const mapStateToProps = state => {
  return state.showForm.item ? { id: state.showForm.item.id } : { id: "" };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteItem: id => dispatch(deleteItem(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
