import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import "./Pages.css";
import "./Splash.css";
import miniChips from "./mini-chips.png";
import bigChip from "./csop3d-32.png";
import leftChip from "./left-chip.png";
import leftChipDark from "./left-chip-2.png";
import trophy from "./Trophy.png";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    console.log("Loaded dashboard")
    return (
      <div className = "content-container">
        <div className="Content">
          <h1 className="Title">Dashboard</h1>
          <div className="placeholder">
            Coming soon!
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
