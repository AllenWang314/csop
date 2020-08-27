import React, { Component, useState } from "react";
import { NavLink } from 'react-router-dom';
import { get, post } from "../../utilities";
// import 'antd/dist/antd.css';
import { List, Space, Modal, Row, Col, Button, Form, Input, DatePicker, Checkbox } from "antd";
import { CalendarOutlined, TeamOutlined, BookOutlined } from "@ant-design/icons";

import "../../utilities.css";
import logo from "../modules/NavBar/CSOP Logo.png";

export default function Login(props) {
  const [formLogin] = Form.useForm();
  const [formSignup] = Form.useForm();
  const [email, setEmail] = useState("");
  let onFinishLogin = (fieldsValue) => {
    setEmail(fieldsValue.loginEmail)
    formLogin.resetFields();
    props.login({
      email: fieldsValue.loginEmail,
      password: fieldsValue.loginPassword,
    });
  };
  return (
    <div style={{ width: "100%", height: "100vh" }}>
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
              width: "70%",
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
          <div>Welcome!</div>
          <div>Ready to start crushing?</div>
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

              <Form.Item>{props.loginMessage === "Email not verified!" ? <div>{props.loginMessage} <button onClick = {()=>{post("/api/resend", {email: email})}}> Resend Verification Email </button></div> : props.loginMessage}</Form.Item>
            </Form>
            <div>
                <NavLink to="/passwordemail"> Forgot your password? </NavLink>
            </div>
            <div>
                New member? <NavLink to="/signup"> Sign Up</NavLink>
            </div>
            </div>
        </Col>
      </Row>
    </div>
  );
}





