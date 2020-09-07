import React, { Component } from "react";
import "./Pages.css";
import "./Splash.css";

class Contact extends Component {
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
          <h1 className="Title">Contact</h1>
          <div className="placeholder">
            Please email poker-exec@mit.edu for inquries regarding logistics, registration, or sponsorships.
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
