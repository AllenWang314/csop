import React, { Component } from "react";

import "./Pages.css";

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
          This is the dashboard page.
      </div>
    );
  }
}

export default Dashboard;
