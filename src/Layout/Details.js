import React from "react";
import { connect } from "react-redux";
import { addNote, deleteNote } from "../store/actions/notes";

const Details = props => {
  const handleNotesKey = e => {
    if (e.key === "Enter") {
      props.addNote(props.item.id, e.target.value);
      e.target.value = "";
    }
  };

  const item = props.item;
  const notes = item.notes.map(note => {
    return (
      <li key={item.notes.indexOf(note)}>
        <p>
          {note}
          <button
            onClick={() => props.deleteNote(item.id, item.notes.indexOf(note))}
          >
            <i className="tiny material-icons">cancel</i>
          </button>
        </p>
      </li>
    );
  });
  return (
    <div className="col s12 m7">
      <div id="details" className="container">
        <h5>{item.title}</h5>
        <ul className="browser-default">{notes}</ul>

        <input
          onKeyPress={handleNotesKey}
          type="text"
          name="notes"
          placeholder="Notes"
          id="notes"
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  var itemId = ownProps.itemId;
  return {
    item: state.items.find(elem => {
      return elem.id === itemId;
    })
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addNote: (id, text) => dispatch(addNote(id, text)),
    deleteNote: (id, index) => dispatch(deleteNote(id, index))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
