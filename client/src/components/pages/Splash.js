import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import "./Pages.css";
import "./Splash.css";
import miniChips from "./mini-chips.png";
import bigChip from "./csop3d-32.png";
import leftChip from "./left-chip.png";
import leftChipDark from "./left-chip-2.png";
import trophy from "./Trophy.png";

class Splash extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    console.log("Loaded splash")
    return (
      <div className="content-container">
        <div className="Content">
          <img className="MiniChips" src={miniChips}/>
          <h1 className="Title">Collegiate Series of Poker</h1>
          <p className="TagLine">Climb the Ranks.</p>
          <NavLink to="/dashboard">
            <button className="Play">Play Now</button>
          </NavLink>
        </div>
        <img className="LeftChipLight" src={leftChip}/>
        <img className="LeftChipDark" src={leftChipDark}/>
        <img className="BigChip" src={bigChip}/>
      </div>
    );
  }
}

export default Splash;
