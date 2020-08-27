import React, { Component, useState } from "react";

import { get, post } from "../../utilities";
import Cookies from "universal-cookie";
const cookies = new Cookies();
import { List, Space, Modal, Row, Col, Button, Form, Input, DatePicker, Checkbox } from "antd";
import { CalendarOutlined, TeamOutlined, BookOutlined } from "@ant-design/icons";

import "../../utilities.css";
import logo from "../modules/NavBar/CSOP Logo.png";



export default function Signup(props) {
  const [formLogin] = Form.useForm();
  const [formSignup] = Form.useForm();
  const [pageNumber, setPageNumber] = useState(1);
  const [email, setEmail] = useState("");

  let onFinishSignup = (fieldsValue) => {
    formSignup.resetFields();
    props.signup({
      name: fieldsValue.signupName,
      email: fieldsValue.signupEmail,
      password: fieldsValue.signupPassword,
      college: fieldsValue.signupCollege,
      resume: fieldsValue.signupResumeLink,
    });
  };
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <div>
        <Row >
        <Col span={12} style = {{
              display: "flex",
              overflow: "hidden",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              color: "white",
              }}>
          <div
            style={{
              width: "100%",
              height: "100vh",
              backgroundColor: "#041528",
              display: "flex",
              overflow: "hidden",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              color: "white",
            }}
          >
        <img src = {logo} width = {"400px"}></img>

          </div>
          <div
            style={{
              width: "100%",
              height: "100vh",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "white",
              color:"black",
            }}
          >
            <div>Make an Account</div>
            <div>Who are you?</div>
            <Form form={formSignup} name={"Signup"} onFinish={onFinishSignup}>
              <Form.Item
                name="signupEmail"
                label="School Email"
                rules={[
                  {
                    type: "email",
                    required: true,
                    message: "Please enter a valid email",
                  },
                ]}
              >
                <Input placeholder={"email@college.edu"} />
              </Form.Item>
              <Form.Item
                name="signupName"
                label="Full Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter a valid name",
                  },
                ]}
              >
                <Input placeholder={"First Last"} />
              </Form.Item>
              <Form.Item
                name="signupCollege"
                label="College"
                rules={[
                  {
                    required: true,
                    message: "Please enter a valid College",
                  },
                ]}
              >
                <Input placeholder={"College/University"} />
              </Form.Item>
              <Form.Item
                name="signupResumeLink"
                label="Link to Resume"
                rules={[
                  {
                    required: true,
                    message: "Please enter a valid link",
                  },
                ]}
              >
                <Input placeholder={"Link to Resume"} />
              </Form.Item>
              <Form.Item
                name="signupPassword"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please enter a password",
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (getFieldValue("signupPassword").length >= 6) {
                        return Promise.resolve();
                      }
                      return Promise.reject("Your password is too short!");
                    },
                  }),
                ]}
              >
                <Input.Password placeholder={"Password"} />
              </Form.Item>
              <Form.Item
                name="signupPassword2"
                label="Confirm Password"
                rules={[
                  {
                    required: true,
                    message: "Please re-enter your password",
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (getFieldValue("signupPassword") === getFieldValue("signupPassword2")) {
                        return Promise.resolve();
                      }
                      return Promise.reject("Your passwords don't match");
                    },
                  }),
                ]}
              >
                <Input.Password placeholder={"Re-enter Password"} />
              </Form.Item>
              {/* <input type="file" id="input"/> */}

              <Form.Item>
                <Button key="submit" type="primary" htmlType="submit">
                  Signup
              </Button>
              </Form.Item>

              <Form.Item>{props.signUpMessage}</Form.Item>
            </Form>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}





