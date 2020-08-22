import React, { Component } from "react";

import "./Pages.css";

class About extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    console.log("Loaded about")
    return (
      <div className = "content-container">
          This is the about page.
      </div>
    );
  }
}

export default About;
