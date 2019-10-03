import React from "react";
import { connect } from "react-redux";
import { showItem } from "../store/actions/notes";

const NoteList = props => {
  const notesList =
    props.items &&
    props.items.map(item => {
      return (
        <button
          onClick={() => {
            props.showItem(item);
          }}
          key={item.id}
          style={{ display: "block", textAlign: "left" }}
        >
          <h5>{item.title}</h5>
          <p>{item.notes[0]}</p>
        </button>
      );
    });

  return (
    <div className="col s12 m5">
      <div id="notesList" className="container">
        {notesList}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    items: state.toSearch
      ? state.items.filter(elem =>
          elem.title.toLowerCase().includes(state.toSearch)
        )
      : state.items,
    showForm: state.showForm
  };
};
const mapDispatchToProps = dispatch => {
  return {
    showItem: item => dispatch(showItem(item))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList);
