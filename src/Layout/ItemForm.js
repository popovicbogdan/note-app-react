import React from "react";
import { connect } from "react-redux";
import { addItem } from "../store/actions/notes";

class ItemForm extends React.Component {
  constructor() {
    super();
    this.state = {
      id: Date.now(),
      title: "",
      notes: []
    };
    this.handleNotesKey = this.handleNotesKey.bind(this);
    this.handleTitleKey = this.handleTitleKey.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // on enter add the value of text field to the state.title
  handleTitleKey(e) {
    if (e.key === "Enter") {
      this.setState({
        ...this.state,
        title: e.target.value
      });
    }
  }
  // on enter  add the note to the state.notes array and clear the text field
  handleNotesKey(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      this.setState({
        ...this.state,
        notes: this.state.notes.concat(e.target.value)
      });
      e.target.value = "";
    }
  }
  // prevents enter from submitting form when a note is added, adds object to the store, and resets the state
  handleSubmit(e) {
    if (e.key !== "Enter") {
      e.preventDefault();
      const { title, id, notes } = this.state;
      const item = { title, id, notes };
      this.props.addItem(item);
      this.setState({
        title: "",
        id: Date.now(),
        notes: []
      });
    } else {
      e.preventDefault();
    }
  }
  handleClick = item => {
    this.setState({
      ...this.state,
      notes: this.state.notes.filter(elem => elem !== item)
    });
  };
  render() {
    const notes = this.state.notes.length ? (
      this.state.notes.map(item => (
        <li key={this.state.notes.indexOf(item)}>
          <p>
            {item}
            <button
              onClick={e => {
                e.preventDefault();
                this.handleClick(item);
              }}
            >
              <i className="tiny material-icons">cancel</i>
            </button>
          </p>
        </li>
      ))
    ) : (
      <p id="add_note">Add a note </p>
    );
    const title = this.state.title.length ? (
      <h5>{this.state.title}</h5>
    ) : (
      <input
        onKeyPress={this.handleTitleKey}
        type="text"
        name="title"
        placeholder="Title"
        id="title"
      />
    );
    return (
      <div className="col s12 m7">
        <div id="form" className="container">
          <form>
            <div className="input-field">
              {title}
              <ul className="browser-default">{notes}</ul>
              <input
                onKeyPress={this.handleNotesKey}
                type="text"
                name="notes"
                placeholder="Notes"
                id="notes"
              />
            </div>
            <button
              onClick={this.handleSubmit}
              className="btn btn-block hoverable"
              type="button"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addItem: item => dispatch(addItem(item))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ItemForm);
