import React, { Component } from "react";
import "./Pages.css";
import "./Contact.css";

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
          <h1 className="Title">Contact</h1>
          <p className="contact-body">
            Please email <a href="mailto:official.csop@gmail.com">official.csop@gmail.com</a> for inquries regarding logistics, registration, or sponsorships. We typically respond within 24 hours and are always happy to answer any questions that you may have.
          </p>

          <p className="contact-body">
            Follow us on instagram <a href="https://www.instagram.com/pokercsop/">@pokercsop</a> or find us on <a href="https://www.facebook.com/PokerCSOP">facebook</a>!
          </p>
      </div>
    );
  }
}

export default Contact;
