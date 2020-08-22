import React, { Component } from "react";

import "./Pages.css";

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
      <div className = "content-container">
        This is the splash page.
      </div>
    );
  }
}

export default Splash;
