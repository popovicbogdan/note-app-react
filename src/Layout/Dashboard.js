import React from "react";

import Navbar from "./Navbar";
import NoteList from "./NoteList";

import Searchbar from "./Searchbar";
import FormToggler from "./FormToggler";

const Dashboard = () => {
  return (
    <div id="dashboard" className="container">
      <div id="navigation" className="row z-depth-0">
        <Searchbar />
        <Navbar />
      </div>

      <div className="row">
        <NoteList />
        <FormToggler />
      </div>
    </div>
  );
};

export default Dashboard;
