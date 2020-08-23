import React, { Component } from "react";

import { get, post } from "../../utilities";
import Cookies from "universal-cookie";
const cookies = new Cookies();
import { List, Space, Modal, Row, Col, Button, Form, Input, DatePicker, Checkbox } from "antd";
import { CalendarOutlined, TeamOutlined, BookOutlined } from "@ant-design/icons";

import "../../utilities.css";

import logo from "../../public/logo.png";
import public1 from "../../public/public1-removebg-preview.png";

export default function Login(props) {
  const [formLogin] = Form.useForm();
  const [formSignup] = Form.useForm();
  let onFinishLogin = (fieldsValue) => {
    formLogin.resetFields();
    props.login({
      email: fieldsValue.loginEmail,
      password: fieldsValue.loginPassword,
    });
  };
  let onFinishSignup = (fieldsValue) => {
    formSignup.resetFields();
    props.signup({
      name: fieldsValue.signupName,
      email: fieldsValue.signupEmail,
      password: fieldsValue.signupPassword,
    });
  };
  return (
    <div className="content-container">
      <div>
        <button
          onClick={() => {
            props.handleLogin();
          }}
        >
          Login
      </button>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form form={formLogin} name={"Login"} onFinish={onFinishLogin}>
              <Form.Item
                name="loginEmail"
                label="Email"
                rules={[
                  {
                    type: "email",
                    required: true,
                    message: "Please enter a valid email",
                  },
                ]}
              >
                <Input placeholder="csop123@mit.edu" />
              </Form.Item>
              <Form.Item
                name="loginPassword"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please enter a password",
                  },
                ]}
              >
                <Input.Password placeholder="time2grind" />
              </Form.Item>

              <Form.Item>
                <Button key="submit" type="primary" htmlType="submit">
                  Login
              </Button>
              </Form.Item>

              <Form.Item>{props.loginMessage}</Form.Item>
            </Form>
          </Col>
          <Col span={12}>
            <Form form={formSignup} name={"Signup"} onFinish={onFinishSignup}>
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
                <Input placeholder={"CSOP Dude"} />
              </Form.Item>
              <Form.Item
                name="signupEmail"
                label="Email"
                rules={[
                  {
                    type: "email",
                    required: true,
                    message: "Please enter a valid email",
                  },
                ]}
              >
                <Input placeholder={"csop123@mit.edu"} />
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
                <Input.Password placeholder={"time2grind"} />
              </Form.Item>

              <Form.Item>
                <Button key="submit" type="primary" htmlType="submit">
                  Signup
              </Button>
              </Form.Item>

              <Form.Item>{props.signUpMessage}</Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}




