import React, { Component } from "react";

import "./Pages.css";


class Leaderboard extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    console.log("Loaded leaderboard")
    return (
      <div className = "content-container">
          This is the leaderboard page.
      </div>
    );
  }
}

export default Leaderboard;
