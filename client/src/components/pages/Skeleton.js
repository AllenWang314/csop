import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./Skeleton.css";

import { get, post } from "../../utilities";

class Skeleton extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  handleLogin() {
    post("/api/signup", {name: "Daniel Sun", email:"dansun@mit.edu", password:"hehexd"}).then((res) => {
      console.log(res)
    })
  }

  render() {
    return (
      <>oda
        <button onClick = {()=>{this.handleLogin()}}>Signup</button> 
      </>
    );
  }
}

export default Skeleton;
