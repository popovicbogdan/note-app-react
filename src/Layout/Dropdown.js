import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteItem } from "../store/actions/notes";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false
    };
  }
  handleClick = e => {
    e.preventDefault();
    this.setState({
      showDropdown: !this.state.showDropdown
    });
  };
  render() {
    const dropdown = this.state.showDropdown === false ? "hide" : "show";
    return (
      <li id="nav-right" className="hide-on-med-and-up">
        <button onClick={this.handleClick} className=" hoverable">
          <i className="material-icons ">more_vert</i>
        </button>

        <ul id="list" className={dropdown}>
          <li id="drop">
            <button
              onClick={() => this.props.deleteItem(this.props.id)}
              className="button-transparent waves-effect waves-teal hoverable"
            >
              Delete
            </button>
          </li>
          <li id="drop">
            <button className="button-transparent waves-effect waves-teal hoverable">
              Clock
            </button>
          </li>
        </ul>
      </li>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    deleteItem: id => dispatch(deleteItem(id))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Dropdown);
// id="dropdown1"
