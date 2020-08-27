import React, { Component } from "react";
import { get, post } from "../../utilities";
import { Row, Col, Form, Input, Button, Checkbox } from "antd";
import logo from '../modules/NavBar/CSOP Logo.png';

import "./Pages.css";

class PasswordEmail extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    let tok = this.props.computedMatch.params.token;

    this.state = {
      tok: tok,
      email: "",
    };
  }

  submitForm = () => {
    post("/api/passwordEmail", { email: this.state.email }).then((res) => {
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
            <h2 style={{ textAlign: "center" }}>Enter your email and we'll send you a link to reset your password!</h2>
            <Input
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
              style={{ width: "20%", textAlign: "center" }}
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

export default PasswordEmail;
