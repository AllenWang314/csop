import React, { Component } from "react";
import { get, post } from "../../utilities";
import { Row, Col, Form, Input, Button, Checkbox } from "antd";
import logo from '../modules/NavBar/CSOP Logo.png';

import "./Pages.css";

class PasswordReset extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    let tok = this.props.computedMatch.params.token;

    this.state = {
      tok: tok,
      email: "",
      pass1: "",
      pass2: "",
    };
  }

  submitForm = () => {
    if (this.state.pass1 !== this.state.pass2) {
      this.setState({msg: "Your passwords don't match!"})
      return
    }
    if (this.state.pass1.length < 6) {
      this.setState({msg: "Your new password is too short!"})
      return
    }
    post("/api/resetPassword", { email: this.state.email, token: this.state.tok ,password: this.state.pass1}).then((res) => {
      if (res.msg) {
        this.setState({ msg: res.msg })
      }
    });
  };

  render() {
    return (
      <>
        <Row justify={"center"}>
          <Col
            style={{
              flexDirection: "column",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <br />
            <br />
            <br />
            <br />
            <img
              src={logo}
              style={{ display: "block", marginLeft: "auto", marginRight: "auto", width: "20%" }}
            />
            <br />
            <br />
            <h2 style={{ textAlign: "center" }}>Reset your password</h2>
            <Input
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
              style={{ width: "20%", textAlign: "center" }}
              placeholder="email"
            ></Input>
            <br />
            <Input
              value={this.state.pass1}
              onChange={(e) => {
                this.setState({ pass1: e.target.value });
              }}
              style={{ width: "20%", textAlign: "center" }}
              placeholder="new password"
              type='password'
            ></Input>
            <br />
            <Input
              value={this.state.pass2}
              onChange={(e) => {
                this.setState({ pass2: e.target.value });
              }}
              style={{ width: "20%", textAlign: "center" }}
              placeholder="re-enter password"
              type='password'
            ></Input>
            <br />
            <Button onClick={this.submitForm}>Confirm</Button>
            <br />
            {this.state.msg ? <>{this.state.msg}<a href={"/"}> Return to home</a></> : ""}
          </Col>
        </Row>
      </>
    );
  }
}

export default PasswordReset;
