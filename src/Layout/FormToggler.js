import React from "react";
import { connect } from "react-redux";
import ItemForm from "./ItemForm";
import Details from "./Details";

const FormToggler = props => {
  const display =
    props.showForm === true ? (
      <ItemForm />
    ) : (
      <Details itemId={props.showForm.item.id} />
    );

  return <div>{display}</div>;
};

const mapStateToProps = state => {
  return {
    showForm: state.showForm
  };
};
export default connect(mapStateToProps)(FormToggler);
