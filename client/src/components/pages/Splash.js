import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import "./Pages.css";
import "./Splash.css";
import miniChips from "./mini-chips.png";
import bigChip from "./csop3d-32.png";
import leftChip from "./left-chip.png";
import leftChipDark from "./left-chip-2.png";
import trophy from "./Trophy.png";
import NavBar from "../modules/NavBar/NavBar";

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
    return (
      <div>
        <NavBar />
        <div className="content-container">
          <div className="Content">
            <img className="MiniChips" src={miniChips} />
            <h1 className="Title">Collegiate Series of Poker</h1>
            <p className="TagLine">Climb the Ranks. Get Swag. Win 10k in prizes.</p>
            <a className="Play" href="https://docs.google.com/forms/d/e/1FAIpQLSd_ir05nZz_Ztc_SeXoDDj1l4RmN0-9wbxgARsDbokrtfbsyQ/viewform?usp=sf_link" target="_blank" >Sign Up</a>
          </div>
          <img className="LeftChipLight" src={leftChip} />
          <img className="LeftChipDark" src={leftChipDark} />
          <img className="BigChip" src={bigChip} />

          <div className="PageTwo">
            <div className="PageTwoContainer">
              <div className="Welcome">
                <h1 className="WelcomeCSOP">Welcome to CSOP!</h1>
                <p>We create a collegiate scene for poker just like any other sport. College students nation-wide can climb the ranks every season and be invited to a National Finals Tournament, where they can compete for the ultimate title! This year, we will be only be hosting a virtual final tournament happening on May 8th open to all undergraduates.</p>
                <p>Do you have what it takes?</p>
              </div>
              <div className="Season">
                <img className="Trophy" src={trophy} />
                <p>Season 1</p>
                <p>Spring 2021</p>
              </div>
              <div className="ButtonContainer">
                <NavLink to="/about">
                  <button className="Info">More Info</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
