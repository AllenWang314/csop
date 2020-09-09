import React, { Component } from "react";
import "./Pages.css";
import "./Splash.css";

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
